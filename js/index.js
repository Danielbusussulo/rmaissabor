//Pegando a imagem do banner

let img = document.getElementById('img-banner');


function efeitoRodar(){
    img.classList.toggle('rodar'); // adiciona ou remove uma classe automaticamente
}

function efeitoAr(){
    img.classList.toggle('arredondar'); // adiciona ou remove uma classe automaticamente
}

function efeitoMov(){
    img.classList.toggle('movimentar'); // adiciona ou remove uma classe automaticamente
}

function efeitoDis(){
    img.classList.toggle('distorcer'); // adiciona ou remove uma classe automaticamente
}

function efeitoAu(){
    img.classList.toggle('aumentar'); // adiciona ou remove uma classe automaticamente
}

//Estruturas condicionais : nos permitem mudar o fluxo de execução mediante uma condição

/*

numero= 9123
senha = 123

se numero == numero_bd e senha == senha_bd Entao
    pode entrar 
se não
    'senha ou numero incorretos !'

idade = 18;

se idade > 17 então
    ele pode votar
se não
    ele não pode votar

*/

//criando um slide basico

// aninhadas

let indice = 1;

function trocarImg(direcao){

    if(direcao == 'posterior'){

        if(indice == 1){

            img.src = "img/img2.jpeg";
            indice = 2;
        }
        else if(indice == 2){
            img.src = "img/img3.jpeg";
            indice = 3;

        }
        else if(indice == 3){
            img.src = "img/img1.jpeg";
            indice = 1;

        }

    }
    else if(direcao == 'anterior'){

        if(indice == 1){

            img.src = "img/img3.jpeg";
            indice = 3;
        }
        else if(indice == 2){
            img.src = "img/img1.jpeg";
            indice = 1;

        }
        else if(indice == 3){
            img.src = "img/img2.jpeg";
            indice = 2;

        }
        


    }


    

}