const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const distPath = path.join(__dirname, '../dist/index.html');
  console.log(`Loading file: ${distPath}`);
  mainWindow.loadFile(distPath);

  // 如果你希望在开发时打开开发者工具，可以取消注释以下行
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  // const backendPath = path.join(__dirname, '../backend');
  // console.log(`Backend path: ${backendPath}`);

  // const flaskServer = spawn('python', ['app.py'], {
  //   stdio: ['pipe', 'pipe', 'pipe'],
  //   cwd: backendPath
  // });

  // flaskServer.stderr.on('data', (data) => {
  //   console.error(`Flask server error: ${data}`);
  // });

  // flaskServer.on('close', (code) => {
  //   console.log(`Flask server exited with code ${code}`);
  // });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
