let total=0;
let counter=0;
let counterKruv=0;
let counterMel=0;
let counterTom=0;
let counterGam=0;

function addProdact(name,priceUnit,id,counterP,line){
    line=[];
    if (counterP>0)
    {
       line = document.getElementById(id);
       line.remove();
       line = document.createTextNode((counterP+1)*priceUnit +" "+ name);
    } 
    else{
        line = document.createTextNode(name +' '+ priceUnit);
    } 
    let newPar = document.createElement("ul"); 
    newPar.setAttribute("class","lineInBasket");
    newPar.setAttribute("id",id);
    newPar.style.background = 'lightgrey';
    newPar.appendChild(line);
    document.getElementById("basket").appendChild(newPar);
    if (counter != 0){
        removeTotalpriceLine();
    }
}
function addKruv(){
    let kruvline=[];
    addProdact("כרוב",8,"kruvLine",counterKruv,kruvline);
    counterKruv++;
}
function addMel(){
    let melline=[];
    addProdact("מלפפון",6,"melLine",counterMel,melline);
    counterMel++;
}
function addTom(){
    let tomline=[];
    addProdact("עגבניה",4,"tomline",counterTom,tomline);
    counterTom++;
}
function addGam(){
    let gamline=[];
    addProdact("גמבה",5,"gamline",counterGam,gamline);
    counterGam++;
}
function removeKruv(){
    let KruvLine1 = document.getElementById("kruvLine");
        KruvLine1.remove();
        counterKruv=0;
        if(counter>0){
            removeTotalpriceLine();
        }
}
function removeMel(){
    let MelLine1 = document.getElementById("melLine");
        MelLine1.remove();
        counterMel=0;
        if(counter>0){
            removeTotalpriceLine();
        }
}function removeTom(){
    let TomLine1 = document.getElementById("tomline");
        TomLine1.remove();
        counterTom=0;
        if(counter>0){
            removeTotalpriceLine();
        }
}function removeGam(){
    let GamLine1 = document.getElementById("gamline");
        GamLine1.remove();
        counterGam=0;
        if(counter>0){
            removeTotalpriceLine();
        }
}
function totalAll()
{
    
    if (counter!=0)
    {
        removeTotalpriceLine();
    }
        total= (8*counterKruv)+(6*counterMel)+(4*counterTom)+(5*counterGam);
        let newPar = document.createElement("ul");
        newPar.setAttribute("class","finelprice");
        if (total <= 20)
        { 
            let newContent = document.createTextNode(total + " המחיר הכולל הוא"); 
            newPar.style.background = '#d98b95';
            newPar.appendChild(newContent);
            document.getElementById("finelprice").appendChild(newPar);
        }
        else
        {
            let newContent = document.createTextNode(total * 0.9 + "המחיר המלא הוא " + total + "  לאחר הנחה של 10% המחיר הוא ");
            newPar.style.background = '#d98b95';
            newPar.appendChild(newContent);
            document.getElementById("finelprice").appendChild(newPar);
        } 
        counter++;

}
function CleanAll()
{
    let collection = document.getElementsByClassName('lineInBasket');
    while (collection.length>0)
    {
        collection[collection.length-1].remove();
    }
    removeTotalpriceLine();
    total = 0;
    counterKruv=0;
    counterMel=0;
    counterTom=0;
    counterGam=0;
}
function removeTotalpriceLine()
{
     let totalPriceLine = document.getElementsByClassName("finelprice");
     if(totalPriceLine[0] != ""){
        totalPriceLine[0].remove();
        counter=0;
    }
}
