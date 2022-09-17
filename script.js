let total=0;
let counter=0;
let counterKruv=1;
let counterMel=1;
let counterTom=1;
let counterGam=1;

function addProdact(name,priceUnit,id,counterP,line){
    line=[];
    if (counterP>1)
    {
       line = document.getElementById(id);
       line.remove();
       line = document.createTextNode(counterP*priceUnit +" "+ name);
    } 
    else{
        line = document.createTextNode(name +' '+ priceUnit);
    } 
    total = total + priceUnit;
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


function totalAll()
{
    
    if (counter!=0)
    {
        removeTotalpriceLine();
    }
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
   
    console.log(collection);
    while (collection.length>0)
    {
        collection[collection.length-1].remove();
    }
    removeTotalpriceLine();
    total = 0;
    counterKruv=1;
    counterMel=1;
    counterTom=1;
    counterGam=1;
}
function removeTotalpriceLine()
{
     let totalPriceLine = document.getElementsByClassName("finelprice");
     if(totalPriceLine[0] != ""){
        totalPriceLine[0].remove();
        counter=0;
    }
}
