/* ========================================
   QUIZ
======================================== */


/*
Procura todos os botões que possuem
a classe "resposta".
*/

const respostas =
    document.querySelectorAll(
        ".resposta"
    );


/*
Procura o espaço onde o resultado
será mostrado.
*/

const resultado =
    document.querySelector(
        "#resultado"
    );


/*
Repete o código para cada botão
encontrado.
*/

respostas.forEach(
    function (botao) {


        /*
        Espera o usuário clicar
        no botão.
        */

        botao.addEventListener(
            "click",
            function () {


                /*
                Descobre se a resposta
                é certa ou errada.
                */

                const resposta =
                    botao.dataset.resposta;


                /*
                Se a resposta for certa.
                */

                if (
                    resposta === "certa"
                ) {


                    resultado.textContent =
                        "🎉 Correto! O CSS é responsável pelas cores e aparência do site.";


                    resultado.style.color =
                        "green";


                }


                /*
                Se a resposta for errada.
                */

                else {


                    resultado.textContent =
                        "❌ Essa não é a resposta. Tente novamente!";


                    resultado.style.color =
                        "#b32b5a";

                }


            }
        );


    }
);
