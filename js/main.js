var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var botaoC = document.getElementById('calcular');
var botaoL = document.getElementById('limpar');
var imc = document.getElementById('imc');
var stt = document.getElementById('status');

botaoC.addEventListener('click', function(){
    let nPeso = Number(peso.value);
    let nAltura = Number(altura.value);
    let Resultado = nPeso / (nAltura ** 2);
    let resultadoArredondado = Math.round(Resultado);

    if(nPeso == 0 || nAltura == 0){
        alert("Digite os valores ")
    }else{
    

    if(Resultado < 18.5){
        stt.innerText="Abaixo do peso"
        imc.innerText=resultadoArredondado
    } 
    else if (Resultado > 18.5 && Resultado < 24.9){
        stt.innerText = "Peso normal"
        imc.innerText=resultadoArredondado
    }
    else if (Resultado > 25 && Resultado < 29.9){
        stt.innerText = "Acima do peso (Sobrepeso)"
        imc.innerText=resultadoArredondado
    }
    else if (Resultado > 30 && Resultado < 34.9){
        stt.innerText = "Obesidade I"
        imc.innerText=resultadoArredondado
    }
    else if (Resultado > 35 && Resultado < 39.9){
        stt.innerText = "Obesidade II"
        imc.innerText=resultadoArredondado
    }
    else{
        stt.innerText = "Obesidade III"
        imc.innerText=resultadoArredondado
    }
    }



})


botaoL.addEventListener('click', function(){
    peso.value=""
    altura.value=""
    stt.innerText = 0
    imc.innerText = 0
    peso.focus()

  
})

function bloquearLetra(tecla) {
    console.log(tecla.charCode);
  
      if (tecla.charCode >=97 && tecla.charCode <=254){    
          return false;
      }
  }




