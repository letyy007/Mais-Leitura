const fs = require("node:fs");

fs.readFile("./arq1.txt", function (error, resposta) {
    fs.readFile("./arq2.txt",  function (error, resposta2) {
       fs.readFile("./arq3.txt", function (error, resposta3   ) {
        console.log(`${resposta}${resposta2}${resposta3}`);
       });
    });
});
console.log("FIM");