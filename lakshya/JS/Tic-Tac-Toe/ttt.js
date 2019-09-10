var a1,a2,a3,a4,a5,a6,a7,a8,a9;
var p11=999,p12=999;
var flag;
var count=0;
                        function in1()
                        {
                            a1=document.getElementById('1').value;
                            check();
                            
                        }
                        function in2()
                        {
                            a2=document.getElementById('2').value;
                            check();
                        }
                        function in3()
                        {
                            a3=document.getElementById('3').value;
                            check();
                        }
                        function in4()
                        {
                            a4=document.getElementById('4').value;
                            check();
                        }
                        function in5()
                        {
                            a5=document.getElementById('5').value;
                            check();
                        }
                        function in6()
                        {
                            a6=document.getElementById('6').value;
                            check();
                        }
                        function in7()
                        {
                            a7=document.getElementById('7').value;
                            check();
                        }
                        function in8()
                        {
                            a8=document.getElementById('8').value;
                            check();
                        }
                        function inp1()
                        {
                            p11=document.getElementById('p1').value;
                        }
                        function inp2()
                        {
                            p12=document.getElementById('p2').value;
                        }
                        function in9()
                        {
                            a9=document.getElementById('9').value;
                            check();
                        }
                        function key(id)
                        {
                            document.getElementById(id).setAttribute("readonly", "true");
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
                            
                            if(flag==p11 && p11!="p")
                            {
                                alert("Player 1 wins!");
                            }
                            else if(flag==p12)
                            {
                                alert("Player 2 wins!");
                            }
                            else if(count==9)
                            {
                                alert("DRAW");
                            }
                            
                            
                            
                                
                            
                            
                        }