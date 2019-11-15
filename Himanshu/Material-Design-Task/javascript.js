function shownavbar(){
    var x = document.getElementById('nav-bar');
    if(x.className === "navigation-bar"){
        x.className += " responsive";
    }
    else{
        x.className = "navigation-bar";
    }
}