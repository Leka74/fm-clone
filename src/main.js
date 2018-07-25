const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({ width: 800, height: 600, fullscreen: false, title: "Football Manager Online", minWidth: 800, minHeight: 600});
    const startUrl = process.env.DEV_URL;

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => mainWindow = null);
    Menu.setApplicationMenu(null);
}


app.on('ready', createWindow);