import { copyFileSync, mkdirSync, rmSync } from "node:fs";
rmSync("dist",{recursive:true,force:true});
mkdirSync("dist",{recursive:true});
copyFileSync("index.html","dist/index.html");
copyFileSync("_headers","dist/_headers");
console.log("Site pronto em dist/");
