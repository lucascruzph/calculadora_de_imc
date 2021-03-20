


function calculaImc(){

    let peso = document.getElementById("weight").value;
    let altura = document.getElementById("height").value;

    let pesoInt = parseInt(peso);
    let alturaInt = parseFloat(altura);

    let calcula = calula();
    function calula(){
        return pesoInt / (alturaInt * alturaInt);
    }

    let comVirgula = calcula.toFixed(1);

    document.getElementById("imc").innerHTML = `Seu IMC é: ${comVirgula} `;
}
