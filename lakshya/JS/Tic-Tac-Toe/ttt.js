        var a1,a2,a3,a4,a5,a6,a7,a8,a9;
        var p11=999,p12=999;
        var flag;
        var count=0;
        var c=1;
        function in1(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a1='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a1='0';
                c=1;
                key(id);
            }
            check();            
        }
        function in2(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a2='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a2='0';
                c=1;
                key(id);
            }

            check();
            
        }
        function in3(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a3='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a3='0';
                c=1;
                key(id);
            }

            check();
            
        }
        function in4(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a4='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a4='0';
                c=1;
                key(id);
            }
            check();
        }
        function in5(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a5='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a5='0';
                c=1;
                key(id);
            }
            check();
        }
        function in6(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a6='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a6='0';
                c=1;
                key(id);
            }
            check();
        }
        function in7(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a7='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a7='0';
                c=1;
                key(id);
            }
            check();
        }
        function in8(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a8='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a8='0';
                c=1;
                key(id);
            }
            check();                            
        }
        function in9(id)
        {   if(c==1)
            {
                document.getElementById(id).innerHTML='X';  
                a9='X';
                c=0;
                key(id);
            }
            else
            {
                document.getElementById(id).innerHTML='0'; 
                a9='0';
                c=1;
                key(id);
            }                           
            check();                            
        }
        function key(id)
        {
            document.getElementById(id).disabled=true;
            count++;
        }                            
        function check()
        {                            
            if(a1==a2 && a1==a3)
            {
                flag=a1;                                
            }
            else if(a1==a4 && a1==a7)
            {
                flag=a1;
            }
            else if(a1==a5 && a1==a9)
            {
                flag=a1;
            }
            else if(a2==a5 && a5==a8)
            {
                flag=a2;
            }
            else if(a3==a5 && a5==a7)
            {
                flag=a3;
            }
            else if(a3==a6 && a3==a9)
            {
                flag=a3;
            }
            else if(a4==a5 && a5==a6)
            {
                flag=a4;
            }
            else if(a7==a8 && a7==a9)
            {
                flag=a7;
            }                            
            if(flag=='X')
            {      
                $(".win").fadeIn(2000);
                document.getElementById("win").style.display='block';
                document.getElementById("go2").innerHTML="Player 1 wins!";
            }
            else if(flag=='0')
            {
                $(".win").fadeIn(2000);
                document.getElementById("win").style.display='block';
                document.getElementById("go2").innerHTML="Player 2 wins!";
            }
            else if(count==9)
            {
                $(".win").fadeIn(2000);
                document.getElementById("win").style.display='block';
                document.getElementById("go2").innerHTML="DRAW!";
            }
        }