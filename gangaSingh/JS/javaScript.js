var box=1
var count=0


function clicked(elementName){
    var val =document.getElementById(elementName).innerHTML;
     if (val=="") 
     {
        if(box==1){
                document.getElementById(elementName).innerHTML="X";
                box=0;
     
       }
       else if(box==0){
                box=1;
                document.getElementById(elementName).innerHTML="O";
        } 
       
     }
     else
        {
         window.alert("Tile is in use. Please select another tile.");
       }
}
