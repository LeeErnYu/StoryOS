const { Menu } = require('electron');

function createApplicationMenu() {
  const template = [
    { label: 'StoryOS', submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }] },
    { label: 'File', submenu: [{ label: 'New Project', enabled: false }, { label: 'Open Project', enabled: false }] },
    { label: 'Edit', submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }] },
    { label: 'View', submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }, { type: 'separator' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }] },
    { label: 'Help', submenu: [{ label: 'About StoryOS', enabled: false }] }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

module.exports = { createApplicationMenu };
