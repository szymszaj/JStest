const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

const desktopPath = path.join(require("os").homedir(), "Desktop");

const getUSBPath = () => {
  const drives = fs.readdirSync("/media/");
  if (drives.length > 0) {
    return path.join("/media/", drives[0]);
  }
  return null;
};

const copyFiles = (src, dest) => {
  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

const startMonitoring = () => {
  console.log("Monitoring for USB drive...");
  const watcher = chokidar.watch("/media/", { persistent: true });

  watcher.on("add", () => {
    const usbPath = getUSBPath();
    if (usbPath) {
      console.log(`USB drive detected: ${usbPath}`);
      copyFiles(desktopPath, usbPath);
      console.log("Files copied successfully.");
      watcher.close();
    }
  });
};

startMonitoring();
