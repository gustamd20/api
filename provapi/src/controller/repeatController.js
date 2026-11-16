import { Router } from "express";
const endpoints = Router();

endpoints.get('/contagemSimples', (req, resp) => {
    let numero = Number(req.query.limite);
    let contador = 1;
    let contagem = '';

    while (contador <= numero){
        contagem += contador + '';
        contador++;
    }

    resp.send(contagem)

}); 

endpoints.get('/regressivaSimples', (req, resp) => {
    let numero = Number(req.query.limite);
    let contador = 5;
    let contagem = '';

    while (contador >= numero){
        contagem += contador + '';
        contador--;
    }

    resp.send(contagem)

}); 

endpoints.get('/contagemEspecifica', (req, resp) => {
    let n1 = Number(req.query.minimo);
    let n2 = Number(req.query.maximo);
    let contador = n1;
    let contagem = '';

    while (contador <= n2){
        contagem += contador + '';
        contador++;
    }

    resp.send(contagem)

}); 

endpoints.get('/regressivaEspecifica', (req, resp) => {
    let n1 = Number(req.query.maximo);
    let n2 = Number(req.query.minimo);
    let contador = n1;
    let contagem = '';

    while (contador >= n2){
        contagem += contador + '';
        contador--;
    }

    resp.send(contagem)

}); 

endpoints.get('/tabuada', (req, resp) => {
    let n1 = Number(req.query.numero);
    let n2 = Number(req.query.limite);
    let contador = 1;
    let contagem = '';

    while (contador <= n2){
        let mult = n1 * contador
        contagem += n1 + 'X' + contador + '=' + mult + '' + '/';
        contador++;
    }

    resp.send(contagem)

}); 

export default endpoints;