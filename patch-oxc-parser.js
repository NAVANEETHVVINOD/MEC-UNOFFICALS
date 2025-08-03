// patch-oxc-parser.js
try {
  const fs = require("fs");
  const path = require("path");

  const targetFile = path.resolve("node_modules/oxc-parser/index.js");

  if (fs.existsSync(targetFile)) {
    let content = fs.readFileSync(targetFile, "utf8");
    content = content.replace(
      "require('./bindings.js')",
      "require('@oxc-parser/wasm')"
    );
    fs.writeFileSync(targetFile, content);
    console.log("✅ Patched oxc-parser to use WASM");
  }
} catch (e) {
  console.error("Failed to patch oxc-parser:", e);
}
