const botoesCurti = document.querySelecorAll(."curtir");
botoesCurti. forEach(function(botoesCurti){
    let curtiu = false
    botaoCurtir.addEventListener("clik", curtir);
function curtir(){
    const contador = botaoCurtir. querySelector ("span");
    if (curtiu == false){
        contador. textContnt++;
        curtiu  = true; }
        else{
            contador.textContnt--;
            curtiu = false;
        }

}    
}
