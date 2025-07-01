const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional
      nodeIntegration: true, // Only use if you really need Node in your HTML
      contextIsolation: false
    }
  });

  // Load your main HTML file
  win.loadFile('index.html');

  // Optional: Open DevTools automatically
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  // macOS specific behavior
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // Quit the app unless on macOS
  if (process.platform !== 'darwin') app.quit();
});
