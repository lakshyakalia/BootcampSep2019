function showNavBar(){
    var query = document.querySelectorAll('.not-active');
    if(query[0].className === 'not-active'){
        for(var i=0;i<query.length;i++){
            query[i].className += " responsive";
        }
    }
    else{
        for(var i=0;i<query.length;i++){
            query[i].className = "not-active";
        }
    }
    
}