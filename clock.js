function setup() {
   createCanvas(window.innerWidth, window.innerHeight);
   angleMode(DEGREES);
 }

 function draw() {

   background(0);
   translate(window.innerWidth/2, window.innerHeight/2);
   rotate(-90);

   let hrs = hour();
   let mins = minute();
   let secs = second();
   let mils = millis();

   let err = 0.01;

   noFill();
   strokeWeight(20);

   stroke(150, 255, 100);
   let hourAngle = map(hrs % 12, 0, 12, 0, 360) + err;
   arc(0, 0, 100, 100, 0, hourAngle);
   rotate(hourAngle);
   line(0, 0, 50, 0);

   stroke(150, 100, 255);
   startAngle = -hourAngle;
   let minuteAngle = map(mins, 0, 60, 0, 360) + startAngle + err;
   arc(0, 0, 150, 150, startAngle, minuteAngle);
   rotate(minuteAngle);
   line(0, 0, 75, 0);

   stroke(255, 100, 150);
   startAngle = -minuteAngle-hourAngle;
   let secondAngle = map(secs, 0, 60, 0, 360) + startAngle + err;
   arc(0, 0, 200, 200, startAngle, secondAngle);
   rotate(secondAngle);
   stroke(255, 100, 150);
   line(0, 0, 100, 0);
 
   stroke(255, 100, 0);
   startAngle= -secondAngle-minuteAngle-hourAngle;
   let miliAngle = map(mils, 0, 900, 0, 360) + startAngle + err;
   arc(0, 0, 250, 250, startAngle, miliAngle);
   rotate(miliAngle);
   line(0, 0, 125, 0);

   stroke(255);
   point(0, 0);

 }
