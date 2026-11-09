//main menu
//  Select Map
//      maps
//  character menu
//      choose slayer
//      choose starting deck
//  
let curmenu = "mainmenu"
function deckenterhandler(){
        charmenu.style.visibility = "hidden"
        deckmenu.style.visibility = "visible"
        curmenu = "deckmenu"
          cardwidth =  ,j
         displayCards(
        availablecardsgrid,
        card.cards,
        addCardToDeck
    );
}
function cselecthandler(){
        charmenu.style.visibility = "hidden"
        charselectmenu.style.visibility = "visible"
        curmenu = "charselect"
}
function towerenter(){
        mainmenu.style.visibility = "hidden";
        mapmenu.style.visibility = "visible"
}
function charmenuenter(){
        mainmenu.style.visibility = "hidden";
        charmenu.style.visibility = "visible"
        curmenu = "charmenu"
}
function maphandler(){
        mainmenu.style.visibility = "hidden";
        mapmenu.style.visibility = "visible"
        curmenu = "mapmenu"
}
function menubackhandler(e){
        if(e.key == "`"){
                if(curmenu == "charselect"){
                        charmenu.style.visibility = "visible"
                       charselectmenu.style.visibility = "hidden"
                       curmenu = "charmenu"
                }
                else if(curmenu == "mapmenu"){
                        mainmenu.style.visibility = "visible";
                        mapmenu.style.visibility = "hidden"
                        curmenu = mainmenu
                }
                else if(charmenu.style.visibility === "visible"){
                        charmenu.style.visibility = "hidden"
                        mainmenu.style.visibility = "visible"
                }
                else if(curmenu == "deckmenu"){
                        deckmenu.style.visibility = "hidden"
                        charmenu.style.visibility = "visible"
                        curmenu = charmenu
                }
        }
}
let deckmenu = document.getElementById("deckmenu")
let deckbutton = document.getElementById("formdeck")
let charmenu = document.getElementById("charmenu")
let mainmenu = document.getElementById("mainmenu");
let towerbutton = document.getElementById("towerenter")
let mapbutton = document.getElementById("mapmenuselect");
let charbutton = document.getElementById("charmenuselect")
let charselect = document.getElementById("select")
let availablecardsgrid = document.getElementById("availablecardsgrid");
let customdeckgrid = document.getElementById("customdeckgrid");
deckbutton.addEventListener("click",deckenterhandler,false)
mapbutton.addEventListener("click",maphandler,false)
towerbutton.addEventListener("click",towerenter,false)
charbutton.addEventListener("click",charmenuenter,false)
charselect.addEventListener("click",cselecthandler,false)
window.addEventListener("keydown", menubackhandler,false)

