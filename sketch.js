var captureGraphics
var capture_width = 640
var capture_height = 480
var span = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO) //啟動攝影機
  capture.size(capture_width,capture_height); //設定顯示畫面大小

  captureGraphics = createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  // captureGraphics.hide()
  capture.hide()
  // ---旋鈕的介面
  var radioElement = createRadio();
  radioElement.position(width/2-300,20)
  radioElement.option("方塊")
  radioElement.option("圓圈")
  radioElement.style("color","#fff")
  // radioElement.style("font-size","30")
}

function draw() {
  background(220);
  noStroke()
  span = 5 + map(mouseX,0,width,0,20) //滑鼠左右改變格子大小(像素)
  //法一：image(capture,width/2-160, height/2-120) //減畫面大小一半
  //法二：
  push()
    translate(width/2-capture_width, height/2-capture_height) //原點設定在畫面中間
    captureGraphics.image(capture,0,0)
    for(var x=0 ; x<captureGraphics.width; x=x+10){
      for(var y=0 ; y<captureGraphics.height; y=y+10){
        var pixel = captureGraphics.get(x,y);
        fill(pixel)
        if(radioElement.value()=="方塊"){
          rect(x,y,span)
        }
        if(radioElement.value()=="圓圈"){
          ellipse(x,y,span)
        }

      
      }
    }
  pop()
}
