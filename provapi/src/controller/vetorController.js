import { Router } from "express";
const endpoints = Router();



endpoints.get('/soma', (req, resp) => {
    let n = req.query.numero;
    let numeros = [];
    let soma = 0;

    for(let cont = 1; cont <= n; cont++){
        numeros.push(cont);
    }

    for(let item of numeros) {
        soma += item;
    }

    resp.send('A soma dos numeros de 1 a ' +  n + ' é ' + soma)

})

endpoints.get('/somaPares', (req, resp) => {
    let n = Number (req.query.numero);
    let numeros = [];
    let soma = 0;

    for(let cont = 1; cont <= n; cont++){
        if (cont % 2 == 0){
        numeros.push(cont);
       } 
    }

    for(let item of numeros) {
        soma += item;
    }

    resp.send('A soma dos numeros pares de 1 a ' +  n + ' é ' + soma)

})

endpoints.get('/especificaPares', (req, resp) => {
    let inicio = Number(req.query.inicio);
    let fim = Number(req.query.fim);
    let numeros = [];
    let soma = 0;

    for(let cont = inicio; cont <= fim; cont++){
        if (cont % 2 == 0){
        numeros.push(cont);
    }
    }

    for(let item of numeros) {
        soma += item;
    }

    resp.send('A soma dos numeros pares de ' +  inicio +  ' até '+  fim  + ' é ' + soma)

})

endpoints.get('/potencia', (req, resp) => {
    let base = Number(req.query.base);
    let expoente = Number(req.query.expoente);
    let numeros = [];
    let resultado = 1;

    if (base < 0 && expoente < 0 ){
        resp.send ('Cálculo Inválido')
    } else {
        for (let cont = 0; cont < expoente; cont++){
            numeros.push(base);
        }
    }

    for(let item of numeros) {
        resultado *= item;
    }

    resp.send(base + ' elevado a ' + expoente + ' é ' + resultado)

})


endpoints.get('/primos', (req, resp) => {
    let n = Number(req.query.numero);
    let numeros = [];
    let primo = true;

    if (n == 0 && n == 1 ){
        primo = false
    } else {
        for (let cont = 2; cont < n; cont++){
           if (n % cont == 0){
            numeros.push(cont);
            primo = false;
        }
    }
}

    if(primo) {
        resp.send(n + ' é um numero primo ');
    } else {
        resp.send(n + ' não é um numero primo ');
    }
})

export default endpoints;