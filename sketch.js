let x2, y2 = 0, x3, y3 = 0, x4, y4 = 0, x5, y5 = 0, x6, y6 = 0, x7, y7 = 0, x8, y8 = 0, y9 = -5000, bubble1 = 0, bubble2 = 0, bubble3 = 0, bubble4 = 0, bubble5, bubble6, hour, min, sec, startSec, lemonMin, cupMin, lemonCount = 24;
let r1, r2, r3, r4, r5, r6, x = -4, y = 0, x10 = 0, y10, strawX, strawY, waterY;



function setup(){
  createCanvas(500, 800);
  background(255);
  frameRate(40);
  let date = new Date();
  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  if(sec >= 50){ //コップのアニメーション開始位置調整
    startSec = sec - 50;
  }
  else if(sec >= 40){
    startSec = sec - 40;
  }
  else if(sec >= 30){
    startSec = sec - 30;
  }
  else if(sec >= 20){
    startSec = sec - 20;
  }
  else if(sec >= 10){
    startSec = sec - 10;
  }
  else{
    startSec = sec;
  }
}



function draw(){
  let date = new Date();
  background(255);
  if(startSec != 0){
    y2 = 40 * startSec;
    startSec = 0;
  }
  y2 ++;
  y9 -= 9;
  x += 0.2;
  x10 += 0.15;
  y = x * x * (-1);
  y10 = x10 * x10 * (-1);
  if(y2 == 380){
    waterY = 0;
    strawY = 631;
    strawX = 172;
  }
  if(y2 == 400){ //１０秒経ったのでリセット
    y2 = 0;
    y9 = -850;
    hour = date.getHours();
    min = date.getMinutes();
    waterY = -1010;
    strawY = 631;
    strawX = 172;
  }
  if(min >= 50){
    lemonMin = min - 50;
    cupMin = 5;
    fill(0, 200, 255);
    ellipse(385, 768, 10, 10);
  }
  else if(min >= 40){
    lemonMin = min - 40;
    cupMin = 4;
    fill(0, 200, 255);
    ellipse(331, 768, 10, 10);
  }
  else if(min >= 30){
    lemonMin = min - 30;
    cupMin = 3;
    fill(0, 200, 255);
    ellipse(278, 768, 10, 10);
  }
  else if(min >= 20){
    lemonMin = min - 20;
    cupMin = 2;
    fill(0, 200, 255);
    ellipse(224.3, 768, 10, 10);
  }
  else if(min >= 10){
    lemonMin = min - 10;
    cupMin = 1;
    fill(0, 200, 255);
    ellipse(170.5, 768, 10, 10);
  }
  else{
    lemonMin = min;
    cupMin = 0;
    fill(0, 200, 255);
    ellipse(118, 768, 10, 10);
  }
  fill(255);
  push();
  for(let i = 0; i < 6; i ++){ //下のコップたちの水部分
    noStroke();
    if(i < cupMin){
      fill(0, 75, 255, 100);
      quad(100, y10 + 708, 104, 750, 130, 750, 134, y + 712);
      translate(53.4, 0);
    }
    else if(i == cupMin){
      fill(0, 200 - (lemonMin * 12.5), 255, 100);
      quad(100, y10 + 708 + (4.2 * (10 - lemonMin)), 104, 750, 130, 750, 134, y + 712 + (3.8 * (10 - lemonMin)));
      translate(53.4, 0);
    }
    else{}
  }
  pop();
  push();
  for(let i = 0; i < 6; i ++){ //下のコップたちのコップ部分
    strokeWeight(7);
    stroke(200);
    line(100, 700, 104, 750);
    line(104, 750, 130, 750);
    line(130, 750, 134, 700);
    translate(53.4, 0);
  }
  pop();
  lemonCount ++;
  if(lemonCount == 40){
    x10 = -3;
    lemonCount = 0;
  }
  if((y2 % 40) == 0){
    x = -4;
    sec = second();
    let rand = random(200);
    let rand2 = random(13, 37);
    if(bubble1 == 0){
      bubble1 = 1;
      x3 = int(rand) + 150;
      r1 = rand2;
    }
    else if(bubble2 == 0){
      bubble2 = 1;
      x4 = int(rand) + 150;
      r2 = rand2;
    }
    else if(bubble3 == 0){
      bubble3 = 1;
      x5 = int(rand) + 150;
      r3 = rand2;
    }
    else if(bubble4 == 0){
      bubble4 = 1;
      x6 = int(rand) + 150;
      r4 = rand2;
    }
    else if(bubble5 == 0){
      bubble5 = 1;
      x7 = int(rand) + 150;
      r5 = rand2;
    }
    else if(bubble6 == 0){
      bubble6 = 1;
      x8 = int(rand) + 150;
      r6 = rand2;
    }
    else{}
  }
  strokeWeight(9); //ストロー
  stroke(0, 200 - (y2 / 3), 250, 100);
  if(y2 >= 380){
    strawY -= 21.1;
    strawX += 10.3;
    line(378, y + 209, strawX, y + strawY);
  }
  else if(y2 < 20){}
  else if(y2 < 40){
    strawY -= 21.1;
    strawX += 10.3;
    line(strawX, y + strawY, 172, y + 631);
  }
  else{
    line(378, y + 209, 172, y + 631);
  }
  strokeWeight(7);
  stroke(200);
  fill(0, 0, 0, 0);
  quad(370, y + 200, 390, y + 210, 180, y + 640, 160, y + 630);
  noStroke();
  fill(255, 220, 0);
  ellipse(278, y10 + 570, 140, 140);
  fill(255);
  ellipse(278, y10 + 570, 121, 121);
  push();
  translate(278, y10 + 570);
  stroke(255, 220, 0);
  strokeWeight(3);
  for(let i = 0; i < 9; i ++){
    if(i < lemonMin){
      fill(255, 220, 0);
    }
    else{
      fill(255);
    }
    triangle(0, -12, -14.5, -52, 14.5, -52);
    rotate(radians(40));
  }
  pop();
  noStroke();
  fill(0, 200 - (y2 / 3), 250, 100);
  if(((y2 + 250) < (y9 + 1500)) && (y9 + 1500) < 650){
    x2 = ((3 * y9) / 40) + 215;
    quad(x2, y9 + 1500, 500 - x2, y9 + 1500, 350, 650, 150, 650);
  }
  else if((y2 + 250) >= (y9 + 1500)){
    x2 = ((3 * y2) / 40) + 120;
    quad(x2, y2 + 250, 500 - x2, y2 + 250, 350, 650, 150, 650);
  }
  else{}
  strokeWeight(40);
  if(y2 >= 380){
    waterY += 32.5;
    fill(0, 200, 250, 100);
    quad(228, 0, 272, 0, 272, waterY, 228, waterY);
  }
  else if(y2 < 40){
    waterY += 32.5;
    fill(0, 200 - (y2 / 3), 250, 100);
    quad(228, y9 + 1500, 272, y9 + 1500, 272, waterY, 228, waterY);
  }
  noStroke();
  fill(255);
  if(bubble1 == 1){
    y3 --;
    ellipse(x3, y3 + 650, r1, r1);
    if((y3 + 650) < (y2 + 250)){
      bubble1 = 0;
      y3 = 0;
    }
  }
  if(bubble2 == 1){
    y4 --;
    ellipse(x4, y4 + 650, r2, r2);
    if((y4 + 650) < (y2 + 250)){
      bubble2 = 0;
      y4 = 0;
    }
  }
  if(bubble3 == 1){
    y5 --;
    ellipse(x5, y5 + 650, r3, r3);
    if((y5 + 650) < (y2 + 250)){
      bubble3 = 0;
      y5 = 0;
    }
  }
  if(bubble4 == 1){
    y6 --;
    ellipse(x6, y6 + 650, r4, r4);
    if((y6 + 650) < (y2 + 250)){
      bubble4 = 0;
      y6 = 0;
    }
  }
  if(bubble5 == 1){
    y7 --;
    ellipse(x7, y7 + 650, r5, r5);
    if((y7 + 650) < (y2 + 250)){
      bubble5 = 0;
      y7 = 0;
    }
  }
  if(bubble6 == 1){
    y8 --;
    ellipse(x8, y8 + 650, r6, r6);
    if((y8 + 650) < (y2 + 250)){
      bubble6 = 0;
      y8 = 0;
    }
  }
  stroke(200);
  strokeWeight(7);
  line(120, 250, 150, 650);
  line(150, 650, 350, 650);
  line(380, 250, 350, 650);
  noStroke();
  fill(0, 200, 255);
  quad(0, 0, 500, 0, 500, (y10 * 2.2) + 160, 0, (y * 2.2) + 160);
  fill(255, 220, 0);
  ellipse(47, 32, 30, 30);
  ellipse(250, 32, 30, 30);
  ellipse(453, 32, 30, 30);
  fill(0, 200, 255);
  ellipse(62, 32, 25, 25);
  ellipse(438, 32, 25, 25);
  fill(255);
  push();
  for(let i = 0; i < 9; i ++){
    ellipse(45, 82, 10, 10);
    translate(51.35, 0);
  }
  pop();
  let zureTime;
  zureTime = ((hour * 17.084) + (min * 0.285));
  ellipse(zureTime + 45, 82, 30, 30);
  fill(0, 200, 255);
  ellipse(zureTime + 45, 82, 17.5, 17.5);
  
  //ここから時計テキスト
  /*
  PFont font = loadFont("HelveticaNeue-Medium-48.vlw");
  textFont(font);
  */
  textSize(14);
  fill(255);
  if(hour < 10){
    if(min < 10){
      text(hour + ":0" + min, zureTime + 31.7, 116);
    }
    else{
      text(hour + ":" + min, zureTime + 31.7, 116);
    }
  }
  else{
    if(min < 10){
      text(hour + ":0" + min, zureTime + 27.7, 116);
    }
    else{
      text(hour + ":" + min, zureTime + 27.7, 116);
    }
  }
}