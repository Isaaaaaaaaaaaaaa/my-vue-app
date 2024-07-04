# my-vue-app
This project is a full-stack application combining a Vue.js frontend and a Flask backend. 
It features user authentication, image upload, and object detection capabilities.

## Prerequisites
### Frontend

Node.js v16.0.0 or above  
npm (Node Package Manager)  

### Backend

Python v3.8 or above  
pip (Python Package Installer)  
MySQL database  

## Frontend Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and Hot-Reloads for App Development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and Minifies for Electron App 
```
npm run electron:build
```

## Backend Setup

### Navigate to Backend Directory
```
cd backend
```

### Create and Activate Virtual Environment (Optional but Recommended)
```
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```

### Install Dependencies:
```
pip install -r requirements.txt
```

### Start MySQL Database
```
mysql -u root -p
```

### Run Backend in Server
```
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Initialize Database
```
CREATE DATABASE user_data;
USE user_data;
python models.py
```

### Start the backend server:
```
python app.py
```