const fs = require("fs");
const path = require("path");

const generateAppRegistry = () => {
  const rootDir = path.resolve(__dirname, "..");

  const appsDir = path.resolve(rootDir, "src", "apps");
  const apps = fs
    .readdirSync(appsDir)
    .filter((item) => fs.statSync(path.join(appsDir, item)).isDirectory());

  const configContent = `
    // This file is auto-generated. Do not edit directly.
    export const apps = ${JSON.stringify(apps)};
    `;

  const binDir = path.join(rootDir, "bin");
  if (!fs.existsSync(binDir)) {
    fs.mkdirSync(binDir, { recursive: true });
  }

  fs.writeFileSync(path.join(binDir, "app-registry.ts"), configContent);

  console.log(" - Apps file created successfully!");
};

module.exports = generateAppRegistry;
