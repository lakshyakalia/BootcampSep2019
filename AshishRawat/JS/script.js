var box=0;
var count=0;
var m=9;
async function clicked(elementbyid)
{
var con = document.getElementById(elementbyid).innerHTML;
  if(con=="")
  {
      if(box==0)
      {
        
          box=1;
          document.getElementById(elementbyid).innerHTML="X";
          count++;
          m--;
          document.getElementById(elementbyid).setAttribute("data-points","-1");
          document.getElementById("sc").value=m;

      }
      else if(box==1)
      {
        box=0;
          document.getElementById(elementbyid).innerHTML="O";
          count++;
          m--;
          document.getElementById(elementbyid).setAttribute("data-points","1");
          document.getElementById("sc").value=m;

          
      }
  }
  else
  {
    window.alert("Select another tile");
  }
    checkResult();
  }
var arr= new Array(3);
for(i=0;i<arr.length;i++)
{
    arr[i]=new Array(3);
}
for (var i = 0; i < 3; i++) 
{ 
for (var j = 0; j < 3; j++) 
{ 
    arr[i][j] = 0; 
} 
}
/*-----------------------------------------JQUERY_ANIMATE-----------------------------------------------*/
$(document).ready(function(){
    var div = $("table");
    var btn= $(".btn")
    div.animate({height: '300px', opacity: '0.2'}, "slow");
    div.animate({width: '300px', opacity: '0.6'}, "slow");
    btn.animate({height: '90px', opacity: '0.2'}, "slow");
    btn.animate({width: '90px', opacity: '0.6'}, "slow");
    //div.animate({height: '100px', opacity: '0.4'}, "slow");
    //div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
/*------------------------------------------------------------------------------------------------------*/

function checkResult(){
  var s1=0;
    var s2 = 0;
    var elementId=1;
        for (var i = 0; i < 3; i++) { 
            for (var j = 0; j < 3; j++) { 
                var x=document.getElementById(elementId).getAttributeNode('data-points').value; 
                arr[i][j] = parseInt(x); 
                elementId ++;
            } 
        } 
        for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += arr[i][j];
            }
            if(rowSum === 3)
            {
                alert("Circle WIN!");
                location.reload()
                return;

                
            }
            else if(rowSum === -3)
            {
                alert("Cross WIN!");
                location.reload();
                return;
                
            }
        
        }
    
        for(var i = 0; i<3;i++){
            var colSum = 0;
            for(var j = 0; j<3;j++){
                colSum += arr[j][i];
            }
            if(colSum === 3)
            {
                alert("Circle WIN!");
                location.reload();
                return;
                
                
            }
            else if(colSum === -3)
            {
                alert("Cross WIN!");
                location.reload();
                return;
                
                
            }
        }
    
        if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
        {   s1=3;
            alert("Circle WIN!");
            location.reload();
            return;
           
            
            
        }
        else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
        {
            s1=-3;
            alert("Cross WIN!");
            location.reload();
            return;
          
            
        }

    
        if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
        {   s1=3;
            alert("Circle WIN!");
            return;
            
            
        } 
        else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
        {   s1=-3;
            alert("Cross WIN!");
            return;
           
            
        }
//---------------------------------------Draw Functionality-------------------------------------------------//
      if(count===9){
          alert("Its a Draw");
          return;
          
      }

      

}
function Reset()
      {
          location.reload();
          return;
      }

