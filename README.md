# How to refresh the library dependency in app

To refresh the changes, do `npm pack` inside the library folder and it will regenerate the tgz dependency file. Once it is generated, go to app folder and uninstall and install the file dependency. It can be done modifying the package.json. If you do a npm install with force, sometimes it doesn't refresh all the changes.
