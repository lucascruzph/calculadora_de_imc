


function calculaImc(){

    let peso = document.getElementById("weight").value;
    let altura = document.getElementById("height").value;

    let pesoInt = parseInt(peso);
    let alturaInt = parseFloat(altura);

    let calcula = calula();
    function calula(){
        return pesoInt / (alturaInt * alturaInt);
    }

    const comVirgula = calcula.toFixed(1);

    if (comVirgula < 18.5){

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Você está abaixo do seu peso ideal`;
    } else if (comVirgula >= 18.5 && comVirgula < 25){

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Parabéns! Você está no seu peso ideal.`;
    } else if (comVirgula >= 25 && comVirgula< 30){

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Hum... Você está um pouco acima do peso.`;
    } else if (comVirgula >= 30 && comVirgula < 35){

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Atenção! Você está com Obesidade Grau 1.`;
    }else if (comVirgula >= 35 && comVirgula < 40){

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Cuidado! Você está com Obesidade Grau 2.`;
    } else{

        document.getElementById("imc").innerHTML = `Seu IMC é de ${comVirgula}. Alerta! Você está com Obesidade Mórbida. É recomendo que você proucure um médico assim que possível!`;
    }


    //document.getElementById("imc").innerHTML = `Seu IMC é: ${comVirgula} `;
}
