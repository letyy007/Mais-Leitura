const fs = require("node:fs");

fs.readFile("./arq1.txt", function (error, resposta) {
    if(error){
        console.error("Erro ao ler arq1.txt:", error);
        return;
    }
    fs.readFile("./arq2.txt",  function (error, resposta2) {
       if(error){
           console.error("Erro ao ler arq2.txt:", error);
           return;
       }
       fs.readFile("./arq3.txt", function (error, resposta3   ) {
           if(error){
               console.error("Erro ao ler arq3.txt:", error);
               return;
           }
        console.log(`${resposta}${resposta2}${resposta3}`);
       });
    });
});
console.log("FIM");