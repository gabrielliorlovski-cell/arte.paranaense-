const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir. forEach(function(botoesCurtir){
    let curtiu = false
    botaoCurtir.addEventListener("click", curtir);
function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if (curtiu === false){
        contador.textContnt++;
        curtiu = true;
    }
        else{
            contador.textContnt--;
            curtiu = false;
        }
    } 
});





