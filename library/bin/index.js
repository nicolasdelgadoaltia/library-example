#!/usr/bin/env node

const [, , ...args] = process.argv;
const [operation] = args;
const { execSync } = require("child_process");
const path = require("path");

const execConfig = {
    stdio: "inherit",
};

if (operation === "start") {
    execSync(
        path.join(".", "node_modules", ".bin", "react-scripts start"),
        execConfig
    );
} else if (operation === "local-server") {
    execSync(
        path.join(
            ".",
            "node_modules",
            ".bin",
            "json-server --watch ./server/db.json"
        ),
        execConfig
    );
} else {
    console.log("command not available");
}
