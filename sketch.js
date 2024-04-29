function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(320,240); //設定顯示畫面大小
}

function draw() {
  background(220);
  //法一：image(capture,width/2-160, height/2-120) //減畫面大小一半
  //法二：
  push()
    translate(width/2-160, height/2-120) //原點設定在畫面中間
    image(capture,0,0)
  pop()
}