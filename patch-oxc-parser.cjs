// patch-oxc-parser.js
const fs = require("fs");
const path = require("path");

function patchFile() {
  const filePath = path.resolve("node_modules/oxc-parser/index.js");

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace native binding import with wasm
    if (content.includes("require('./bindings.js')")) {
      content = content.replace(
        "require('./bindings.js')",
        "require('@oxc-parser/wasm')"
      );
      fs.writeFileSync(filePath, content, "utf8");
      console.log("✅ Patched oxc-parser to use @oxc-parser/wasm");
    }
  }
}

patchFile();
