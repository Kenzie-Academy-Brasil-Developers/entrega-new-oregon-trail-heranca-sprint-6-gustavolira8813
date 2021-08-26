# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar minhas refeições 
    Para doar minhas refeições

Contexto: 
    Dado um Hunter de nome "Luigi"
    E ele sempre começa a viagem com 2 refeições
    E ele sempre começa a viagem saudável.

Cenário: Caçou para conseguir mais refeições
    Quando o Hunter sair para caçar 1 vezes
    Então a quantidade de refeições será igual a 7

Cenário: Comeu e seguiu viagem saudável
    Quando o Hunter parar para comer 1 vezes
    Então a quantidade de refeições será igual a 0
    E o Hunter não ficará doente

Cenário: Comeu e ficou doente
    Quando o Hunter parar para comer 2 vezes
    Então a quantidade de refeições será de 0
    E o Hunter ficará doente

Cenário: Cedeu sua refeição
    Quando o Hunter cedeu 1 refeições
    Então a quantidade de refeições deve ser igual a 1

Cenário: Saiu para caçar, comeu e seguiu saudável
    Quando o Hunter foi caçar 2 vezes
    E parar para comer 2 vezes
    Então a quantidade de refeições deve ser 8
    E o Hunter segue saudável