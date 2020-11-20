//Create variables here
var dog, happydog, dogImage, treats, treatStock
var database
function preload(){
  //load images here
  dog = loadImage("images/dogImg.png")
  happydog = loadImage("images/dogImg1.png")
}
function setup() {
  createCanvas(800, 700);
  database = firebase.database()
  dog=createSprite(250,300,50,50)
  dog.addImage(dogImage)
  dog.scale = 0.3
  treatStock = database.ref('food')
  treatStock.on("value",readStock)
}
function draw() {  
background(46,139,87)
if(treats !=undefined){
  if(keyWentDown(UP_ARROW)){
    console.log(treats)
    writeStock()
dog.addImage(happydog)
console.log(treats)
  }
}
drawsprites();

textSize(20)
fill("blue")
text("milk left ",+treats,200,100)
text("press UP_ARROW to feed Dog",100,50)
}
  //add styles here
function readStock(data){
  treats = data.val()
}
function writeStock(){
  if(treats<=0){
    treats = 0;
  }
  else{
    treats -=1
  }
  database.ref('/').update({food:treats})
}