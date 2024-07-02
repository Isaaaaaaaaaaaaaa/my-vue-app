from flask import Flask, jsonify, request, session, Response , make_response
from flask_cors import CORS
import mysql.connector
from config import db_config
from flask_session import Session
import os
import numpy as np
from ultralytics import YOLO  # Import YOLOv8 from Ultralytics
from werkzeug.security import generate_password_hash, check_password_hash
from PIL import Image
from io import BytesIO
import shutil

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Allow cross-origin requests with credentials
app.config['SECRET_KEY'] = 'supersecretkey'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# 设置上传文件的目标路径为 'images'
UPLOAD_FOLDER = 'images'
IMAGE_FOLDER = 'images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Initialize YOLOv8 model from Ultralytics
yolo_model = YOLO('weights/best.pt')

def perform_object_detection(image_path):
    try:
        # Check if the image file exists
        if not os.path.isfile(image_path):
            raise FileNotFoundError(f"Image file not found at {image_path}")

        # Run inference on a single image and save results
        yolo_model.predict(image_path, save=True, save_txt=True)

        # Read the content of labels file
        labels_file_path = "runs/detect/predict/labels/uploaded_image.txt"
        if os.path.isfile(labels_file_path):
            with open(labels_file_path, 'r') as f:
                first_numbers = [line.split()[0] for line in f.readlines()]
                return first_numbers
        else:
            return []

    except Exception as e:
        # Log the error for debugging
        print(f"Error performing object detection: {e}")
        return {"error": str(e)}

def delete_runs_folder(folder_path):
    try:
        if os.path.exists(folder_path):
            shutil.rmtree(folder_path)
            print(f"Deleted folder: {folder_path}")
        else:
            print(f"Folder not found: {folder_path}")
    except Exception as e:
        print(f"Error deleting folder {folder_path}: {e}")

import base64

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'photo' in request.files:
        delete_runs_folder("runs")

        uploaded_file = request.files['photo']
        new_filename = 'uploaded_image.jpg'
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], new_filename)
        image = Image.open(BytesIO(uploaded_file.read()))
        image.save(image_path, 'JPEG')

        first_numbers = perform_object_detection(image_path)
        object_labels = {
              0: 'wild duck', 1: 'bird', 2: 'deer', 3:'goat', 4: 'squirrel', 5: 'cat',
            6: 'Anser cygnoides', 7: 'badger', 8: 'monkey', 9: 'boar', 10:'dog', 11:'rabbit',
        }
        object_counts = {}
        for number in first_numbers:
            object_name = object_labels.get(int(number))
            if object_name:
                if object_name in object_counts:
                    object_counts[object_name] += 1
                else:
                    object_counts[object_name] = 1

        detected_image_path = "runs/detect/predict/uploaded_image.jpg"
        detected_image = Image.open(detected_image_path)
        detected_image_byte_array = BytesIO()
        detected_image.save(detected_image_byte_array, format='JPEG')
        detected_image_data = detected_image_byte_array.getvalue()

        # 使用 Base64 编码检测到的图片
        detected_image_base64 = base64.b64encode(detected_image_data).decode('utf-8')

        # 创建描述对象计数的文本
        object_counts_text = ', '.join([f"{count} {obj}" for obj, count in object_counts.items()])
        if object_counts_text:
            object_counts_text = f"Detected: {object_counts_text}."
        else:
            object_counts_text = "No Object has been detected."

        # 使用 JSON 格式返回
        response_data = {
            'image': detected_image_base64,
            'object_counts_text': object_counts_text
        }

        return jsonify(response_data)

    else:
        return jsonify({"error": "No file uploaded"}), 400



    
def get_db_connection():
    try:
        return mysql.connector.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password'],
            database=db_config['database']
        )
    except mysql.connector.Error as err:
        print(f"Database connection error: {err}")
        return None

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']
    hashed_password = generate_password_hash(password)

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to database"}), 500

    cursor = conn.cursor()
    try:
        cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', (username, hashed_password))
        conn.commit()
    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500
    finally:
        cursor.close()
        conn.close()

    return jsonify({"message": "User registered successfully"})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to database"}), 500

    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if user and check_password_hash(user['password'], password):
        session['user'] = user['username']
        return jsonify({"message": "Login successful", "username": user['username']})
    else:
        return jsonify({"error": "Invalid credentials"}), 401

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({"message": "Logged out successfully"})

@app.route('/api/status', methods=['GET'])
def status():
    if 'user' in session:
        return jsonify({"logged_in": True, "username": session['user']})
    else:
        return jsonify({"logged_in": False})

if __name__ == '__main__':
    app.run(debug=True)
