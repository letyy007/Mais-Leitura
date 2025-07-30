const readFile = require("node:fs").promises;
const terminal = readFile.createInterface({
    input: process.stdin,
    output: process.stdout
});
terminal.question("garibalda: /n", function (valor) {
    console.log("Seja bem vindo(a) " + valor);
});