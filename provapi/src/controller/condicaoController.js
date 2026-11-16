import { Router } from "express";
const endpoints = Router();

endpoints.get('/febre', (req, resp) => {
    let grau = Number(req.query.temperatura);

    if (grau <= 37.5) {
        return resp.status(200).send({
            situacao: "Não está com febre"
        });
    } else if (grau > 37.5) {
        return resp.status(200).send({
            situacao: "Está com febre"
        });
    } else {
        return resp.status(400).send({
            situacao: "Inválido"
        });
    }
});

endpoints.get('/semaforo', (req, resp) => {
    let situacao = (req.query.cor);

    if (situacao == 'Vermelho') {
        return resp.status(200).send({
            acao: "Não atravessar"
        });
    } else if (situacao == 'Verde') {
        return resp.status(200).send({
            acao: "Pode atravessar"
        });
    } else {
        return resp.status(400).send({
            acao: "Farol inoperante"
        });
    }
});

endpoints.get('/meses', (req, resp) => {
    let mesNumber = Number(req.query.numero);

    if (mesNumber == 1) {
        return resp.status(200).send({
            mes: "Janeiro"
        });
    } else if (mesNumber == 2) {
        return resp.status(200).send({
            mes: "Fevereiro"
        });

          } else if (mesNumber == 3) {
        return resp.status(200).send({
            mes: "Março"
        }); 
        
            } else if (mesNumber == 4) {
        return resp.status(200).send({
            mes: "Abril"
        });

            } else if (mesNumber == 5) {
        return resp.status(200).send({
            mes: "Maio"
        });

            } else if (mesNumber == 6) {
        return resp.status(200).send({
            mes: "Junho"
        });

            } else if (mesNumber == 7) {
        return resp.status(200).send({
            mes: "Julho"
        });

            } else if (mesNumber == 8) {
        return resp.status(200).send({
            mes: "Agosto"
        });

            } else if (mesNumber == 9) {
        return resp.status(200).send({
            mes: "Setembro"
        });

            } else if (mesNumber == 10) {
        return resp.status(200).send({
            mes: "Outubro"
        });

            } else if (mesNumber == 11) {
        return resp.status(200).send({
            mes: "Novembro"
        });

            } else if (mesNumber == 12) {
        return resp.status(200).send({
            mes: "Dezembro"
        });
    } else {
        return resp.status(400).send({
            mes: " Mês Inválido"
        });
    }
});

endpoints.get('/notas', (req, resp) => {
    let n1 = Number(req.query.nota1);
    let n2 = Number(req.query.nota2);
    let n3 = Number(req.query.nota3);

    let s = (n1 + n2 + n3) / 3;

    if (s >= 8 && s <= 10) {
        return resp.status(200).send({
            situacao: "Aprovado com sucesso"
        });
    } else if (s >= 6 && s< 8) {
        return resp.status(200).send({
            situacao: "Aprovado"
        });

    } else if (s >= 3 && s< 6) {
        return resp.status(200).send({
            situacao: "Recuperação"
        });

    } else if (s < 3) {
        return resp.status(200).send({
            situacao: "Reprovado"
        });
    
    } else if (s == 0) {
        return resp.status(200).send({
            situacao: "Desistente"
        });
    } else {
        return resp.status(400).send({
            situacao: "Inválido"
        });
    }
});

endpoints.get('/dias', (req, resp) => {
    let diaNumber = Number(req.query.numero);

    if (diaNumber == 0) {
        return resp.status(200).send({
            dia: "Domingo"
        });
    } else if (diaNumber == 1) {
        return resp.status(200).send({
            dia: "Segunda-feira"
        });

          } else if (diaNumber == 2) {
        return resp.status(200).send({
            dia: "Terça-feira"
        }); 
        
            } else if (diaNumber == 3) {
        return resp.status(200).send({
            dia: "Quarta-feira"
        });

            } else if (diaNumber == 4) {
        return resp.status(200).send({
            dia: "Quinta-feira"
        });

            } else if (diaNumber == 5) {
        return resp.status(200).send({
            dia: "Sexta-feira"
        });

            } else if (diaNumber == 6) {
        return resp.status(200).send({
            dia: "Sábado"
        });

        
    } else {
        return resp.status(400).send({
            dia: " Dia Inválido"
        });
    }
});


export default endpoints;