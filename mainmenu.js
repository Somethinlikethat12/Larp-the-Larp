//main menu
//  Select Map
//      maps
//  character menu
//      choose slayer
//      choose starting deck
//  
function deckenterhandler(){
        charmenu.style.visibility = "hidden"
        deckmenu.style.visibility = "visible"
}
function cselecthandler(){
        charmenu.style.visibility = "hidden"
        charselectmenu.style.visibility = "visible"
}
function towerenter(){
        mainmenu.style.visibility = "hidden";
        mapmenu.style.visibility = "visible"
}
function charmenuenter(){
        mainmenu.style.visibility = "hidden";
        charmenu.style.visibility = "visible"
}
function maphandler(){
        mainmenu.style.visibility = "hidden";
        mapmenu.style.visibility = "visible"
}
function menubackhandler(e){
        if(e.key == "`"){
                if(charselectmenu.style.visibility === "visible"){
                        charmenu.style.visibility = "visible"
                       charselectmenu.style.visibility = "hidden"
                }
                else if(mapmenu.style.visibility === "visible"){
                        mainmenu.style.visibility = "visible";
                        mapmenu.style.visibility = "hidden"
                }
                else if(charmenu.style.visibility === "visible"){
                        charmenu.style.visibility = "hidden"
                        mainmenu.style.visibility = "visible"
                }
                else if(deckmenu.style.visibility === "visible"){
                        deckmenu.style.visibility = "hidden"
                        charmenu.style.visibility = "visible"
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
deckbutton.addEventListener("click",deckenterhandler,false)
mapbutton.addEventListener("click",maphandler,false)
towerbutton.addEventListener("click",towerenter,false)
charbutton.addEventListener("click",charmenuenter,false)
charselect.addEventListener("click",cselecthandler,false)
window.addEventListener("keydown", menubackhandler,false)

