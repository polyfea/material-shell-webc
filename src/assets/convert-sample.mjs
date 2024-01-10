import { jsonc } from 'jsonc';
import * as fs from "fs";

let input;
let output;

for( let ix = 0; ix < process.argv.length; ++ix ) {
    if(process.argv[ix] === "-i" || process.argv[ix] === "--input") {
        input = process.argv[ix+1]
    }
    if(process.argv[ix] === "-o" || process.argv[ix] === "--output") {
        output = process.argv[ix+1]
    }
}

if( !input || !output) {
    process.stdout.write(`Convert JSONC to JSON file.\nUsage: convert-jsonc -i input.jsonc -o output.jsonc`);
    process.exit(1);
}

let  text = fs.readFileSync(input).toString();
text = text.replaceAll("node_modules/@polyfea/md-shell/dist/","");
text = text.replaceAll("md-shell/md-shell.esm.js","dist/md-shell.esm.js");
const data = jsonc.parse(text);
text = JSON.stringify(data, null, 2);
fs.writeFileSync(output, text);
