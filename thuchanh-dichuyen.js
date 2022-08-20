const xPosition = 20;
let yPosition = 20;
const width = 150;
const height = 100;
let gameContext = document.getElementById("game").getContext("2d");
gameContext.beginPath();
gameContext.fillStyle="#fa4b2a";
gameContext.fillRect(xPosition, yPosition, width, height);


// setInterval: lặp đi lặp lại 1 việc nào đó trong khoảng thời gian x;
// setInterval(hàm cần lặp, thời gian, ...ds tham số cần lặp )

function drawCar() {
    gameContext.beginPath();
    gameContext.fillStyle='#fa4b2a';
    gameContext.fillRect(xPosition, yPosition, width, height);
  }

// setInterval(moveCarUp, 10); // 10ms
function moveCarUp() {

    // Xoá hình chữ nhật đã vẽ trước đó
    gameContext.clearRect(xPosition, yPosition, width, height);
    if (yPosition > 0) {
        yPosition--;
    }
    
    drawCar();
  
}
function moveCarDown() {

    // Xoá hình chữ nhật đã vẽ trước đó
    gameContext.clearRect(xPosition, yPosition, width, height);
  
    if (yPosition + height < 600) {
        yPosition++;
    }
        
        drawCar();
    
  
    
  
}
let yDistance = 1;
let gameTopPosition = 0;
let gameBottomPosition = 600;
let timeLoop = 10;
function moveCar() {
  gameContext.clearRect(xPosition, yPosition, width, height);

  let isTouchTop = yPosition < gameTopPosition;
  let isTouchBottom = yPosition + height > gameBottomPosition;
  if (isTouchTop || isTouchBottom) {
  	yDistance = -yDistance;
  }

  yPosition += yDistance;
  drawCar();
}
setInterval(moveCar, timeLoop);
