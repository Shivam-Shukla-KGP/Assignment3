<script type="text/javascript">var x=0,z=0;
var x1=0;
var score=0;
var ar=new Array(5);
var ar1=new Array(10);
ar[0]="leaf.jpg";
ar[1]="leaf2.jpg";
ar[2]="leaf3.png";
ar[3]="leaf4.jpg";
ar[4]="leaf5.png";
var y=10*Math.random();
y=(Math.ceil(y)-1);
for(i=0;i<10;i++,y++)
{if(y>=10)
  {y=y-10;
  }
  z=i;
  if(i>=5)
  {z=i-5;
  }
  ar1[y]=ar[z];
}
function im1()
{  alert("hi");
	if(x1==ar1[0])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[0];
 }
 else if(x1!=0 &&x1!=ar1[0])
 {score-=20;
 }
 
}
function im2()
{if(x1==ar1[1])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[1];
 }
 else if(x1!=0 &&x1!=ar1[1])
 {score-=20;
 }
}
function im3()
{if(x1==ar1[2])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[2];
 }
 else if(x1!=0 &&x1!=ar1[2])
 {score-=20;
 }
}
function im4()
{if(x1==ar1[3])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[3];
 }
 else if(x1!=0 &&x1!=ar1[3])
 {score-=20;
 }
}
function im5()
{if(x1==ar1[4])
   {x1=0;
    score+=100;
   }
 else if(x1==0)
 {x1=ar1[4];
 }
 else if(x1!=0 &&x1!=ar1[4])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
function im6()
{if(x1==ar1[5])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[5];
 }
 else if(x1!=0 &&x1!=ar1[5])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
function im7()
{if(x1==ar1[6])
   {score+=100;
    x1=0;
   } 
 else if(x1==0)
 {x1=ar1[6];
 }
 else if(x1!=0 &&x1!=ar1[6])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
function im8()
{if(x1==ar1[7])
   {score+=100;
     x1=0;
   }
 else if(x1==0)
 {x1=ar1[7];
 }
 else if(x1!=0 &&x1!=ar1[7])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
function im9()
{if(x1==ar1[8])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[8];
 }
 else if(x1!=0 &&x1!=ar1[8])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
function im10()
{if(x1==ar1[9])
   {score+=100;
    x1=0;
   }
 else if(x1==0)
 {x1=ar1[9];
 }
 else if(x1!=0 &&x1!=ar1[9])
 {score-=20;
 }
 document.write(""+"Score:"+score);
}
</script>