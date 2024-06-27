from flask import Flask, jsonify, request
from flask_cors import CORS  # 添加这一行
import mysql.connector
from config import db_config

app = Flask(__name__)
CORS(app)  # 添加这一行

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

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to database"}), 500

    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM my_table')
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rows)

@app.route('/api/test_connection', methods=['GET'])
def test_connection():
    try:
        conn = get_db_connection()
        if conn is None:
            raise mysql.connector.Error("Cannot connect to database")
        conn.close()
        return jsonify({"message": "Connection successful"})
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({"error": str(err)}), 500

if __name__ == '__main__':
    app.run(debug=True)
