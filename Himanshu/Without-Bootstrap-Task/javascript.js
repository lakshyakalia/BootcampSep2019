function showNavBar(){
    var query = document.querySelectorAll('.not-active');
    var x = document.querySelectorAll('.search-text');
    var y = document.querySelectorAll('.search-button');
    if(query[0].className === 'not-active'){
        for(var i=0;i<query.length;i++){
            query[i].className += " responsive";
        }
        x[0].className += " show-search-text";
        y[0].className += " show-search-button";

    }
    else{
        for(var i=0;i<query.length;i++){
            query[i].className = "not-active";
        }
        x[0].className = " search-text";
        y[0].className = " search-button";
    }
    
}