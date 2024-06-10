let menu = document.getElementById("menu")
let body = document.getElementsByName("body")
function closemenu(){
    menu.style.top = "-100vh";
    document.body.style.overflow = "auto";
    }
    function openmenu(){
        menu.style.top = 0;
        document.body.style.overflow = "hidden";
    }