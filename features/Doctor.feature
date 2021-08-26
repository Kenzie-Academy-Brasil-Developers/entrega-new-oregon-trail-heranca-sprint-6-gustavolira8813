# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar outros viajantes
    Para que possam seguir viagem saudavéis

    Contexto:
        Dado um Doctor de nome "Taric"
        E ele sempre começará a viagem com 1 refeição
        E ele começa a viagem sempre saudável

    Cenário: Ele curou um viajante
        Quando um Doctor curar um viajante
        Então o viajanta ficará saudável

    Cenário: Ele comeu e seguiu viagem saudável
        Quando um Doctor comer 1 vez
        Então ele continua saudável