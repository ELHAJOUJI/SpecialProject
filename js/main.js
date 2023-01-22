/* Start -Landing */
/* Elemennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt Declarationnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
let lan_ele1 = document.querySelector(".landing-page");
let lan_ele2 = document.querySelector(".landing-page .parametre1");
let lan_ele3 = document.querySelector(".landing-page .parametre2");
let lan_ele4 = document.getElementsByClassName("list1");
let lan_ele4_0=document.createElement("div");
let lan_ele4_1=document.createElement("div");
let lan_ele4_2=document.createElement("div");
let lan_ele4_3=document.createElement("div");
let lan_ele4_4=document.createElement("div");
let lan_ele4_5=document.createElement("div");
let lan_ele4_00=document.createElement("div");
let lan_ele4_11=document.createElement("div");
let lan_ele4_22=document.createElement("div");
let lan_ele4_33=document.createElement("div");
let lan_ele4_44=document.createElement("div");
let lan_ele4_55=document.createElement("div");
let lan_ele5 = document.querySelector(".landing-page .parametre1 .box .boxs2 #Bulte1");
let lan_ele6 = document.querySelector(".landing-page .parametre1 .box .boxs2 #Bulte2");
let lan_ele55 = document.querySelector(".landing-page .parametre1 .box .boxs2 #bBulte1");
let lan_ele66 = document.querySelector(".landing-page .parametre1 .box .boxs2 #bBulte2");
let lan_ele7 = document.querySelector(".cercle1");
let lan_ele8 = document.querySelector(".cercle2");
let lan_ele9 = document.querySelector(".cercle3");
let lan_ele10 = document.querySelector(".cercle4");
let lan_ele11 = document.querySelector(".cercle5");
let lan_ele12=document.getElementsByClassName("list3");

let lan_ele13 = document.querySelector(".box1");
let lan_ele14=document.querySelector(".about .container .box1 h1");
let lan_ele15=document.querySelector(".specialHeading");
 let lan_ele16=document.querySelector(".gallery .container .specialHeading");
let lan_ele17=document.querySelector(".skills .container .box .rectangle .ftg11");
let lan_ele18=document.querySelector(".skills .container .box .rectangle .ftg22");
let lan_ele19=document.querySelector(".skills .container .box .rectangle .ftg33");
let lan_ele20=document.querySelector(".skills .container .box .rectangle .ftg44");
let lan_ele21=document.querySelector(".skills .container .box .rectangle .ftg55");
let lan_ele22=document.querySelector(".skills .container .box .rectangle .ftg66");



let lan_ele23=document.querySelector(".timeline .container .box1 h3");
let lan_ele24=document.querySelector(".timeline .container .box2 h3");
let lan_ele25=document.querySelector(".timeline .container .box3 h3");
let lan_ele26=document.querySelector(".timeline .container .box4 h3");



let lan_ele27=document.querySelector(".timeline .container  .cercle1");
let lan_ele28=document.querySelector(".timeline .container  .cercle2");
let lan_ele29=document.querySelector(".timeline .container  .cercle3");
let lan_ele30=document.querySelector(".timeline .container  .cercle4");

let lan_ele31=document.querySelector(".timeline .container .fill");

let lan_ele32=document.querySelector(".timeline .container .rectangle1");
let lan_ele33=document.querySelector(".timeline .container .rectangle2");


let lan_ele34=document.querySelector(".features .container .specialHeading");
let lan_ele35=document.getElementsByClassName("line");
let lan_ele36=document.querySelector(".Testimonials .box1");
let lan_ele37=document.querySelector(".contact .container  button");
let lan_ele38=document.querySelector(".contact .container .specialHeading");
let lan_ele39=document.getElementsByClassName("image");

let lan_ele40=document.querySelector(".gallery");
let lan_ele42=document.querySelector(".skills");
let lan_ele43=document.querySelector(".about ");
let lan_ele44=document.querySelector(".about .container");
let lan_ele41=document.querySelector(".hhhf");

let lan_ele45=document.querySelector(".picture1");
let lan_ele46=document.querySelector(".con1");

let lan_ele47=document.querySelector(".picture2");
let lan_ele48=document.querySelector(".con2");

let lan_ele49=document.querySelector(".picture3");
let lan_ele50=document.querySelector(".con3");

let lan_ele51=document.querySelector(".picture4");
let lan_ele52=document.querySelector(".con4");

let lan_ele53=document.querySelector(".picture5");
let lan_ele54=document.querySelector(".con5");

let lan_ele56=document.querySelector(".picture6");
let lan_ele57=document.querySelector(".con6");

let lan_ele58=document.querySelector(".picture7");
let lan_ele59=document.querySelector(".con7");

let lan_ele60=document.querySelector(".picture8");
let lan_ele61=document.querySelector(".con8");

let lan_ele62=document.querySelector(".picture9");
let lan_ele63=document.querySelector(".con9");
let lan_ele64=document.querySelector("body");

let lan_ele70=document.querySelector(".about .container");
let lan_ele71=document.querySelector(".features .container");
let lan_ele72=document.querySelector(".skills  .container");
let lan_ele73=document.querySelector(".timeline .container");
let lan_ele74=document.querySelector(".gallery .container");
let lan_ele75=document.querySelector(".contact .container");
let lan_ele76=document.querySelector(".footer");
let lan_ele77=document.querySelector(".Testimonials");
let lan_ele78=document.querySelector(".landing-page");


 
/* Elemennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnt Declarationnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */










/* Randooooooooooooooooooooooooooooooooooooooooooom Backgrounddddddddddddddddddddddddddddddddddddddddddddd */
let i = '2';
let k = +i;
setInterval(function (){
 
    lan_ele1.style.cssText=`background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url(../imgs/${i}.jpg); 
    background-size: cover;
    min-height: 100vh;
    position: relative;
    `
    k = +i;
    k++;
    i = k.toString();
    if (k == 10) {
       i = k.toString();
       k = 1;
       i = k.toString();
   }

}, 6000); 
/* Randooooooooooooooooooooooooooooooooooooooooooom Backgrounddddddddddddddddddddddddddddddddddddddddddddd */









/* Updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */
let h=0;
let g=0;
 function attribuer(h){
  if(h%2==0){
    return 0;
  }
  else{
    return 1;
  }
 }
lan_ele3.onclick=function(){
 
  if(attribuer(h)==0){
    
    lan_ele2.style.transform="translate(200px)";
    lan_ele3.style.transform="translate(200px)"; 
  
  }

  else{
    lan_ele2.style.transform="translate(0px)";
    lan_ele3.style.transform="translate(0px)"; 
  
  }
h++;
  
}
/* Updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */












/* Myyyyyyyyyyyyyyyyyyyy Functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
function built1(left,top,color){
return `background-color:${color}; width:100px; height:30px;visibility:hidden; position:fixed; left:${left}px; top:${top}px ;text-align:center;line-height:30px;color:white;  z-index: 100; `;

}

function built2(left,top,color){
  return `width: 0; 
  height: 0; 
  border-top: 8px solid transparent;                                                                    
  border-bottom: 8px solid transparent;
  visibility:hidden;
  border-left: 8px solid ${color}; 
  position:fixed;
  top:${top}px;
  left:${left}px;
  z-index: 100;
  `;
  
  }

function styling(x,y,i){
  
  lan_ele1.append(x);
  lan_ele1.append(y);
  x.style.visibility='hidden';
  y.style.visibility='hidden';
    
  
    lan_ele4[i].addEventListener("mouseover",function(){
    
      x.style.visibility='visible';
      y.style.visibility='visible';
  
  
  
  } ) ; 
  
  lan_ele4[i].addEventListener("mouseout",function(){
    
    x.style.visibility='hidden';
    y.style.visibility='hidden';
    
    } ) ;
}


function CreateItem(b){
  /* let b=window.getComputedStyle(elem,null).getPropertyValue('background-color');
  window.localStorage.setItem("color",b); */
  for(let i=0;i<6;i++){
    lan_ele4[i].style.cssText=`
    border: 3px solid ${b};
    `;
  }
  lan_ele5.style.cssText=`background-color:${b}`;
  lan_ele6.style.cssText=`background-color:${b}`;
  lan_ele55.style.cssText=`background-color:${b}`;
  lan_ele66.style.cssText=`background-color:${b}`;
  let gh0;
  let gh1;
  let gh2;
  let gh3;
  let gh4;
  let gh5;
  
  gh0=document.createTextNode("About Us");
  lan_ele4_0.append(gh0);
  lan_ele4_0.style.cssText=built1(1208,210,b);
  lan_ele4_00.style.cssText=built2(1308,217,b);
  
 
  gh1=document.createTextNode("Our Skills");
  lan_ele4_1.append(gh1);
  lan_ele4_1.style.cssText=built1(1208,248,b);
  lan_ele4_11.style.cssText=built2(1308,255,b);
  
  gh2=document.createTextNode("Our Gallery");
  lan_ele4_2.append(gh2);
  lan_ele4_2.style.cssText=built1(1208,284,b);
  lan_ele4_22.style.cssText=built2(1308,291,b);
  
  gh3=document.createTextNode("Timeline");
  lan_ele4_3.append(gh3);
  lan_ele4_3.style.cssText=built1(1208,319,b);
  lan_ele4_33.style.cssText=built2(1308,326,b);
  
  gh4=document.createTextNode("Feautures");
  lan_ele4_4.append(gh4);
  lan_ele4_4.style.cssText=built1(1208,357,b);
  lan_ele4_44.style.cssText=built2(1308,363,b);
  
  gh5=document.createTextNode("Testimonials");
  lan_ele4_5.append(gh5);
  lan_ele4_5.style.cssText=built1(1208,392,b);
  lan_ele4_55.style.cssText=built2(1308,399,b);

  
  for(let i=0;i<6;i++){
    lan_ele12[i].addEventListener("mouseover",function(){
      let k=window.localStorage.getItem("color");
      lan_ele12[i].style.cssText=`color:${b}`;
    })
  
    lan_ele12[i].addEventListener("mouseout",function(){
      lan_ele12[i].style.cssText=`color:white`;
    })
  
  } 

  lan_ele14.style.color=`${b}`;
  lan_ele15.style.color=`${b}`;
  lan_ele16.style.color=`${b}`;
  lan_ele17.style.backgroundColor=`${b}`;
  lan_ele18.style.backgroundColor=`${b}`;
  lan_ele19.style.backgroundColor=`${b}`;
  lan_ele20.style.backgroundColor=`${b}`;
  lan_ele21.style.backgroundColor=`${b}`;
  lan_ele22.style.backgroundColor=`${b}`; 


  lan_ele23.style.color=`${b}`;
  lan_ele24.style.color=`${b}`;
  lan_ele25.style.color=`${b}`;
  lan_ele26.style.color=`${b}`;


  lan_ele27.style.borderColor=`${b}`; 
  lan_ele28.style.borderColor=`${b}`; 
  lan_ele29.style.borderColor=`${b}`; 
  lan_ele30.style.borderColor=`${b}`; 

  lan_ele31.style.backgroundColor=`${b}`; 
  lan_ele32.style.backgroundColor=`${b}`; 
  lan_ele33.style.backgroundColor=`${b}`; 
  lan_ele36.style.backgroundColor=`${b}`; 
  lan_ele37.style.backgroundColor=`${b}`; 
  lan_ele34.style.color=`${b}`;
  lan_ele38.style.color=`${b}`;
  let n;
  for(n=0;n<6;n++){
    lan_ele35[n].style.backgroundColor=`${b}`;

  }
 

}


function updateColor(b){
  lan_ele4_0.style.backgroundColor=`${b}`;
  lan_ele4_00.style.borderLeftColor=`${b}`;
  lan_ele4_1.style.backgroundColor=`${b}`;
  lan_ele4_11.style.borderLeftColor=`${b}`;
  lan_ele4_2.style.backgroundColor=`${b}`;
  lan_ele4_22.style.borderLeftColor=`${b}`;
  lan_ele4_3.style.backgroundColor=`${b}`;
  lan_ele4_33.style.borderLeftColor=`${b}`;
  lan_ele4_4.style.backgroundColor=`${b}`;
  lan_ele4_44.style.borderLeftColor=`${b}`;
  lan_ele4_5.style.backgroundColor=`${b}`;
  lan_ele4_55.style.borderLeftColor=`${b}`;
  for(let i=0;i<6;i++){
    lan_ele4[i].style.cssText=`
    border: 3px solid ${b};
    `;
  }

  for(let i=0;i<6;i++){
    lan_ele12[i].addEventListener("mouseover",function(){
      let k=window.localStorage.getItem("color");
      lan_ele12[i].style.cssText=`color:${b}`;
    })
  
    lan_ele12[i].addEventListener("mouseout",function(){
      lan_ele12[i].style.cssText=`color:white`;
    })
  
  } 

  lan_ele5.style.cssText=`background-color:${b}`;
  lan_ele6.style.cssText=`background-color:${b}`;
  lan_ele55.style.cssText=`background-color:${b}`;
  lan_ele66.style.cssText=`background-color:${b}`;
  lan_ele14.style.color=`${b}`;
  lan_ele15.style.color=`${b}`;
  lan_ele16.style.color=`${b}`;
   lan_ele17.style.backgroundColor=`${b}`;
  lan_ele18.style.backgroundColor=`${b}`;
  lan_ele19.style.backgroundColor=`${b}`;
  lan_ele20.style.backgroundColor=`${b}`;
  lan_ele21.style.backgroundColor=`${b}`;
  lan_ele22.style.backgroundColor=`${b}`; 

  lan_ele23.style.color=`${b}`;
  lan_ele24.style.color=`${b}`;
  lan_ele25.style.color=`${b}`;
  lan_ele26.style.color=`${b}`;


  lan_ele27.style.borderColor=`${b}`; 
  lan_ele28.style.borderColor=`${b}`; 
  lan_ele29.style.borderColor=`${b}`; 
  lan_ele30.style.borderColor=`${b}`; 

  lan_ele31.style.backgroundColor=`${b}`; 
  lan_ele32.style.backgroundColor=`${b}`; 
  lan_ele33.style.backgroundColor=`${b}`; 

  lan_ele34.style.color=`${b}`;
  
  let n;
  for(n=0;n<6;n++){
    lan_ele35[n].style.backgroundColor=`${b}`;

  }
  lan_ele36.style.backgroundColor=`${b}`; 
  lan_ele37.style.backgroundColor=`${b}`; 
  lan_ele38.style.color=`${b}`;

}
/* Myyyyyyyyyyyyyyyyyyyy Functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */



let b=window.localStorage.getItem("color");
CreateItem(b);

styling(lan_ele4_0,lan_ele4_00,0);
styling(lan_ele4_1,lan_ele4_11,1);
styling(lan_ele4_2,lan_ele4_22,2);
styling(lan_ele4_3,lan_ele4_33,3);
styling(lan_ele4_4,lan_ele4_44,4);
styling(lan_ele4_5,lan_ele4_55,5);
   


lan_ele6.addEventListener("click",function(){
for(let i=0;i<6;i++){
  lan_ele4[i].style.visibility='hidden';
}
});

lan_ele5.addEventListener("click",function(){
  for(let i=0;i<6;i++){
    lan_ele4[i].style.visibility='visible';
  }
  
  });
 // 

  lan_ele7.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele7,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
    updateColor(b);
    
  });



  lan_ele8.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele8,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
    updateColor(b);
  });

  lan_ele9.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele9,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
    updateColor(b);
  });

  lan_ele10.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele10,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
    updateColor(b);
  });

  lan_ele11.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele11,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
    updateColor(b);
  });



/* Reset Buuuuuuuuuuuuuuuuuuuuuuuuuuuuutonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
 lan_ele13.addEventListener("click",function(){
    let b=window.getComputedStyle(lan_ele7,null).getPropertyValue('background-color');
    window.localStorage.setItem("color",b);
   updateColor(b);
  
});
 /* Reset Buuuuuuuuuuuuuuuuuuuuuuuuuuuuutonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
/* End-Landing */
setTimeout(function(){
  lan_ele17.style.width='750px';
  lan_ele18.style.width='650px';
  lan_ele19.style.width='850px';
  lan_ele20.style.width='690px';
  lan_ele21.style.width='850px';
  lan_ele22.style.width='650px';
},4000)


 /* SCROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIIIIIIIINNNNNNG */


lan_ele12[0].addEventListener("click",function(){

  window.scrollTo(0,625);
  
  });

lan_ele12[1].addEventListener("click",function(){

window.scrollTo(0,1019);

});

lan_ele12[2].addEventListener("click",function(){

  window.scrollTo(0,1645);
  
  });

  lan_ele12[3].addEventListener("click",function(){

    window.scrollTo(0,2080);
    
    });

    lan_ele12[4].addEventListener("click",function(){

      window.scrollTo(0,3180);
      
      });

      lan_ele12[5].addEventListener("click",function(){

        window.scrollTo(0,3928);
        
        });


        lan_ele4[0].addEventListener("click",function(){

          window.scrollTo(0,625);
          
          });
        
        lan_ele4[1].addEventListener("click",function(){
        
        window.scrollTo(0,1019);
        
        });
        
        lan_ele4[2].addEventListener("click",function(){
        
          window.scrollTo(0,1645);
          
          });
        
          lan_ele4[3].addEventListener("click",function(){
        
            window.scrollTo(0,2080);
            
            });
        
            lan_ele4[4].addEventListener("click",function(){
        
              window.scrollTo(0,3180);
              
              });
        
              lan_ele4[5].addEventListener("click",function(){
        
                window.scrollTo(0,3928);
                
                });
        
   /* SCROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIIIIIIIINNNNNNG */   


  lan_ele39[0].addEventListener("click",function(){
    
    lan_ele70.style.opacity='0.3';
    lan_ele71.style.opacity='0.3';
    lan_ele72.style.opacity='0.3';
    lan_ele73.style.opacity='0.3';
    lan_ele74.style.opacity='0.3';
    lan_ele75.style.opacity='0.3';
    lan_ele76.style.opacity='0.3';
    lan_ele77.style.opacity='0.3';


   
   
  lan_ele45.style.visibility='visible';
  lan_ele46.style.visibility='visible';




  })


  lan_ele46.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; 
  */
   lan_ele45.style.visibility='hidden';
   lan_ele46.style.visibility='hidden';
 
 
 
 
   })



   lan_ele39[1].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele47.style.visibility='visible';
   lan_ele48.style.visibility='visible';
   })

   lan_ele48.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele47.style.visibility='hidden';
   lan_ele48.style.visibility='hidden';
 
 
 
 
   })

   lan_ele39[2].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele49.style.visibility='visible';
   lan_ele50.style.visibility='visible';
   })

   lan_ele50.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele49.style.visibility='hidden';
   lan_ele50.style.visibility='hidden';

   })

   lan_ele39[3].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele51.style.visibility='visible';
   lan_ele52.style.visibility='visible';
   })

   lan_ele52.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele51.style.visibility='hidden';
   lan_ele52.style.visibility='hidden';
 
   })


   lan_ele39[4].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele53.style.visibility='visible';
   lan_ele54.style.visibility='visible';
   })

   lan_ele54.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele53.style.visibility='hidden';
   lan_ele54.style.visibility='hidden';
 
   })

   lan_ele39[5].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele56.style.visibility='visible';
   lan_ele57.style.visibility='visible';
   })

   lan_ele57.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele56.style.visibility='hidden';
   lan_ele57.style.visibility='hidden';
 
   })


   lan_ele39[6].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele58.style.visibility='visible';
   lan_ele59.style.visibility='visible';
   })

   lan_ele59.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele58.style.visibility='hidden';
   lan_ele59.style.visibility='hidden';
 
   })

   lan_ele39[7].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele60.style.visibility='visible';
   lan_ele61.style.visibility='visible';
   })

   lan_ele61.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele60.style.visibility='hidden';
   lan_ele61.style.visibility='hidden';
 
   })


   lan_ele39[8].addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele62.style.visibility='visible';
   lan_ele63.style.visibility='visible';
   })

   lan_ele63.addEventListener("click",function(){
    /* lan_ele40.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele42.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele43.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))';
    lan_ele44.style.cssText='background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3))'; */
 
   lan_ele62.style.visibility='hidden';
   lan_ele63.style.visibility='hidden';
 
   })