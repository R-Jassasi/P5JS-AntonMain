var cnv;

let step;
let x;
let y;
let c;

let si;

let test;
let testArr = [];

let yellow =['rgba(246, 184, 80, 0.85)','rgba(251, 225, 106, .85)','rgba(246, 236, 176, 0.85)'];
let randColy;

let yellow2 =['rgba(246, 184, 80, 0.5)','rgba(251, 225, 106, .5)','rgba(246, 236, 176, 0.5)'];
let randColy2;

let blue = ['rgba(6, 19, 60, 0.5)','rgba(33, 131, 192, 0.5)','rgba(73, 193, 239, 0.5)','rgba(198, 231, 248, 0.5)','rgba(240, 249, 254, 0.5)']
let randColb;
let blue2 = ['rgba(6, 19, 60, 0.2)','rgba(33, 131, 192, 0.2)','rgba(73, 193, 239, 0.2)','rgba(198, 231, 248, 0.2)','rgba(240, 249, 254, 0.2)']
let randColb2;


let rectaArr = [];

//to fix the looping problem when switching
let state = 1;








function setup() {
  createCanvas(800,800);
  background(255);
  //clear();
  randColb = random(blue.length);
  randColb = floor(randColb);

  randColy2 = random(yellow2.length);
  randColy2 = floor(randColy2);

  randColb2 = random(blue2.length);
  randColb2 = floor(randColb2);



  for(let i = 0; i<170; i++){
    testArr.push(new gradientLine(random(0,width),random(0,height),40));
  }

  for(let i = 0; i < 800; i++){
    rectaArr.push(new recta(random(50,500),height/2,random(5,30)));
  }
  

 

}






function draw() {

  fill(140, 120, 77);
  textSize(30);
  text('switch between artworks with keys 1 & 2',50,height/2 );

  switch (key) {
    case "2":

     //ANTONY 2
     clear();
     background("#000038");
     blendMode(LIGHTEST);

     for(let i = 0; i < 170; i++){
       testArr[i].gradient();
      }

  

     for (let si = 10; si < 1500; si = si + 40){
       noFill();
       stroke(random(200.255));
       strokeWeight(random(.6,2.5));
       ellipse(400,400,si,si);
  
      }

      if (state == 0){
        noLoop();
        state=1;
      }
    break;

    case "1":

     //ANTONY 1
     clear();
     background('rgba(6, 19, 60, 1)');
     blendMode(BLEND);

     for(let x = 0; x < 50; x++){
       for(let y = 0; y < 50; y++ ){
         backdraw();
       }
      }
 
 
     for(let x = 0; x < 7; x++){
        for(let y = 0; y < 7; y++ ){
         lineray();
        }
      }
 
 
 
     for(let i = 0; i < 800; i++){
       rectaArr[i].display();
      }

      if (state == 0){
        noLoop();
        state=1;
      }
    break;

  }


  //noLoop();
}

function keyPressed (){
    if(state==1){
      loop();
      state=0;
    }
}


//ANTONY 1


function display(){
}


function backdraw(){
 push();


 randColb2 = random(blue2.length);
 randColb2 = floor(randColb2);

 x=random(0,width);
 y=random(0,height);
 d=random(20,50);
 fill(blue2[randColb2]);
 noStroke();
 rect(x,y,d,d);
 ellipse(x*2,y*2,d,d);
 pop();
 
 

 
}

function lineray(){
  randColb = random(blue.length);
  randColb = floor(randColb);

  randColy2 = random(yellow2.length);
  randColy2 = floor(randColy2);
  x=random(0,800);
  y=random(0,800);
  d=random(20,50);
 
 stroke(yellow2[randColy2]);
 strokeWeight(1.6);
 line (800,800,x,y);

 push();
 strokeWeight(1);
 stroke('rgba(243, 136, 168, 0.5)');
 line(0,800,x,y);

 pop();

 push();
 strokeWeight(1);
 stroke('rgba(28, 12, 3, 0.5)');
 line(800,0,x,y);
 pop();
 
 
 
}





class recta{

  constructor(startX,startY,startSize){
    this.transX= startX;
    this.transY= startY;
    this.size = startSize;
    this.angle = random(0.5,4);
   

  }

  display(){
    background(0,0);
    rotate(PI*this.angle);

    randColy = random(yellow.length);
    randColy = floor(randColy);

    fill(yellow[randColy]);
    noStroke();
    ellipse(this.transX,this.transY,this.size,this.size);

    
     
  }

}




//ANToNY 2

function gradient(){
}


class gradientLine{
  constructor(x1,y1,size){
    
   randColb = random(blue.length);
   randColb = floor(randColb);

   randColy2 = random(yellow2.length);
   randColy2 = floor(randColy2);

    this.x1 = x1;
    this.y1= y1;
    this.x2 = x1 + -50|50;
    this.y2 = y1 + -50|50;


    this.c1 = color(blue[randColb]);
    this.c2 = color(yellow2[randColy2]);
    this.size = size;
    

   
  }

  gradient(){

   let d = dist(this.x1,this.y1,this.x2,this.y2);




    for (let i = 0; i < d; i++){
    

     let step = map(i, 0, d, 0, 1);
     let x = lerp(this.x1, this.x2, step);
     let y = lerp(this.y1, this.y2, step);
     let c = lerpColor(this.c1, this.c2, step);
     fill(c);
     noStroke();
     ellipse(x,y,this.size,this.size);
    

    }
  }
}





