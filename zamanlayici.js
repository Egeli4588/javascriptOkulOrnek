var metronom;
var sayilarim=[];
function melodiBaslat(){

 metronom=setInterval(() => {
    sayilarim.push( Math.floor(Math.random() * 49)); //0 ile 49 arasında rastgele tam sayı üretir.
    document.getElementById("potre").innerText=sayilarim;
    }, 1000);

}
function melodiDurdur(){
    clearInterval(metronom);
    } 



    
