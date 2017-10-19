window.addEventListener("keydown", onkeydown, false);


var imgBackground = new Image();
imgBackground.src = "image\\background.jpg";
imgBackground.addEventListener("load", count, false);

var imgPlayer = new Image();
imgPlayer.src = "image\\character.png";
imgPlayer.addEventListener("load", count, false);

var clothes1 = new Image();
clothes1.src="image\\jacket.png";
clothes1.addEventListener("load", count, false);

var clothes2 = new Image();
clothes2.src="image\\shirt.png";
clothes2.addEventListener("load", count, false);

var clothes3 = new Image();
clothes3.src="image\\pants.png";
clothes3.addEventListener("load", count, false);

var clothes4 = new Image();
clothes4.src="image\\tie.png";
clothes4.addEventListener("load", count, false);

var clothes5 = new Image();
clothes5.src="image\\socks.png";
clothes5.addEventListener("load", count, false);

var step1 = new Image();
step1.src = "image\\big_clothes1.png";
step1.addEventListener("load", count, false);

var step2 = new Image();
step2.src = "image\\big_clothes2.png";
step2.addEventListener("load", count, false);

var step3 = new Image();
step3.src = "image\\big_clothes3.png";
step3.addEventListener("load", count, false);

var step4 = new Image();
step4.src = "image\\big_clothes4.png";
step4.addEventListener("load", count, false);

var step5 = new Image();
step5.src = "image\\big_clothes5.png";
step5.addEventListener("load", count, false);

var life = new Image();
life.src="image\\life.png";
life.addEventListener("load", count, false);

// var countdown = 30;

//캐릭터 초기 위치
var playerX = 513;
var playerY = 540;

//게임상태
var GAME_STATE_READY = 0; //게임 준비
var GAME_STATE_GAME = 1; //게임중
var GAME_STATE_OVER = 2; //게임 오버
var GameState = GAME_STATE_READY; //초깃값

//스페이스바 다운 횟수
var keycount = 0;

//로딩 이미지 카운트
var count = 0;

//생명
var lifeFor = 3;

// 랜덤 옷
var clothesX = 30;
var clothesY = 20;

//보이는 옷
var chooseX = 30;
var chooseY = 120;

//하트 좌표
var lifeX = 970;
var lifeY = 10;

//맞춘 횟수
var clearcount = 0;
var array = new Array(10);

//타이머 변수
var duration = 30;
var timer = duration;
var timerX = 950;
var timerY = 80;

//캔버스 이미지 출력
function count()
{
  count++;
  if(count == 13)
  screen();
}

if(lifeFor < 0)
Gameover();

// 문제 초기화
function screen()
{
  clothesX = 30;
  clothesY = 20;
  lifeX = 970;
  lifeY = 10;

  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.drawImage(imgBackground, 0, 0);
  Context.drawImage(imgPlayer, playerX, playerY);

  Context.font = '20px Arial';

//게임 준비 상태시
  if(GameState == GAME_STATE_READY)
      Context.fillText("Press the Enter", 430, 200);

  for(var i = 0; i<lifeFor ; i++)
  {
    Context.drawImage(life, lifeX, lifeY);
    lifeX -= 50;
  }

  //문제용 이미지 랜덤
  for(var i = 0; i<10; i++)
  {
    console.log("image");
    var n = Math.floor(Math.random() * 5)+1;
    array[i] = n;
    console.log("array["+i+"] : "+array[i]);
    // var n = 2;
    switch (n) {
      case 1:
      Context.drawImage(clothes1, clothesX, clothesY);
        break;
        case 2:
        Context.drawImage(clothes2, clothesX, clothesY);
        break;
        case 3:
        Context.drawImage(clothes3, clothesX, clothesY);
        break;
        case 4:
        Context.drawImage(clothes4, clothesX, clothesY);
        break;
        case 5:
        Context.drawImage(clothes5, clothesX, clothesY);
        break;
    }
    clothesX+=70;
  }
  Context.drawImage(step1, 23, 300);
  Context.drawImage(step2, 223, 300);
  Context.drawImage(step3, 423, 300);
  Context.drawImage(step4, 623, 300);
  Context.drawImage(step5, 823, 300);

}

// 캐릭터 단순 이동
function Move()
{
  clothesX = 30;
  clothesY = 20;
  lifeX = 970;
  lifeY = 10;

  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.drawImage(imgBackground, 0, 0);
  Context.drawImage(imgPlayer, playerX, playerY);

  if(lifeFor < 0)
    Gameover();

    chooseX = 30;
      for(var j = 0; j<keycount; j++)
      {
        switch (array[j]) {
            case 1:
            Context.drawImage(clothes1, chooseX, chooseY);
            // Context.fillText(array[j], clothesX, 40);
            break;
            case 2:
            Context.drawImage(clothes2, chooseX, chooseY);
            break;
            case 3:
            Context.drawImage(clothes3, chooseX, chooseY);
            break;
            case 4:
            Context.drawImage(clothes4, chooseX, chooseY);
            break;
            case 5:
            Context.drawImage(clothes5, chooseX, chooseY);
            break;
      }
      chooseX+=70;
    }

  for(var i = 0; i<lifeFor ; i++)
  {
    Context.drawImage(life, lifeX, lifeY);
    lifeX -= 50;
  }

  for(var i = 0; i<10; i++)
  {
    console.log("image");
    console.log(array[i]);
    // var n = 2;
    switch (array[i]) {
        case 1:
        Context.drawImage(clothes1, clothesX, clothesY);
        break;
        case 2:
        Context.drawImage(clothes2, clothesX, clothesY);
        break;
        case 3:
        Context.drawImage(clothes3, clothesX, clothesY);
        break;
        case 4:
        Context.drawImage(clothes4, clothesX, clothesY);
        break;
        case 5:
        Context.drawImage(clothes5, clothesX, clothesY);
        break;
    }
    clothesX+=70;
  }
  Context.drawImage(step1, 23, 300);
  Context.drawImage(step2, 223, 300);
  Context.drawImage(step3, 423, 300);
  Context.drawImage(step4, 623, 300);
  Context.drawImage(step5, 823, 300);

  Context.fillText( minutes + ":" + seconds, timerX, timerY);

}

//맞았을 경우
function okay()
{
  //스페이스 횟수 증가
  keycount++;

//스페이스 열 번 누를 경우 문제 초기화
  if(keycount == 10)
    {
      keycount = 0;
      clearcount++;
      if(clearcount == 5)
        location.replace("GameClear.html");
      screen();
    }

  clothesX = 30;
  clothesY = 20;
  lifeX = 970;
  lifeY = 10;

  var theCanvas = document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.drawImage(imgBackground, 0, 0);
  Context.drawImage(imgPlayer, playerX, playerY);

  for(var i = 0; i<lifeFor ; i++)
  {
    Context.drawImage(life, lifeX, lifeY);
    lifeX -= 50;
  }

chooseX = 30;
  for(var j = 0; j<keycount; j++)
  {
    switch (array[j]) {
        case 1:
        Context.drawImage(clothes1, chooseX, chooseY);
        // Context.fillText(array[j], clothesX, 40);
        break;
        case 2:
        Context.drawImage(clothes2, chooseX, chooseY);
        break;
        case 3:
        Context.drawImage(clothes3, chooseX, chooseY);
        break;
        case 4:
        Context.drawImage(clothes4, chooseX, chooseY);
        break;
        case 5:
        Context.drawImage(clothes5, chooseX, chooseY);
        break;
  }
  chooseX+=70;
}
  for(var i = 0; i<10; i++)
  {
    console.log("image");
    console.log(array[i]);
    // var n = 2;
    switch (array[i]) {
        case 1:
        Context.drawImage(clothes1, clothesX, clothesY);
        break;
        case 2:
        Context.drawImage(clothes2, clothesX, clothesY);
        break;
        case 3:
        Context.drawImage(clothes3, clothesX, clothesY);
        break;
        case 4:
        Context.drawImage(clothes4, clothesX, clothesY);
        break;
        case 5:
        Context.drawImage(clothes5, clothesX, clothesY);
        break;
    }
    clothesX+=70;
  }
  Context.drawImage(step1, 23, 300);
  Context.drawImage(step2, 223, 300);
  Context.drawImage(step3, 423, 300);
  Context.drawImage(step4, 623, 300);
  Context.drawImage(step5, 823, 300);
  Context.fillText( minutes + ":" + seconds, timerX, timerY);

}

//키보드 입력 처리
function onkeydown(e)
{
  // keycount = 0;

if(GameState == GAME_STATE_READY)
{
  switch (e.keyCode) {
    case 13:
    case 32:
    GameState = GAME_STATE_GAME;
    refreshIntervalId = setInterval(function () {
      clothesX = 30;
      clothesY = 20;
      lifeX = 970;
      lifeY = 10;


      var theCanvas = document.getElementById("GameCanvas");
      var Context = theCanvas.getContext("2d");
      Context.drawImage(imgBackground, 0, 0);
      Context.drawImage(imgPlayer, playerX, playerY);

      if(lifeFor < 0)
        Gameover();

        chooseX = 30;
          for(var j = 0; j<keycount; j++)
          {
            switch (array[j]) {
                case 1:
                Context.drawImage(clothes1, chooseX, chooseY);
                // Context.fillText(array[j], clothesX, 40);
                break;
                case 2:
                Context.drawImage(clothes2, chooseX, chooseY);
                break;
                case 3:
                Context.drawImage(clothes3, chooseX, chooseY);
                break;
                case 4:
                Context.drawImage(clothes4, chooseX, chooseY);
                break;
                case 5:
                Context.drawImage(clothes5, chooseX, chooseY);
                break;
          }
          chooseX+=70;
        }

      for(var i = 0; i<lifeFor ; i++)
      {
        Context.drawImage(life, lifeX, lifeY);
        lifeX -= 50;
      }

      for(var i = 0; i<10; i++)
      {
        console.log("image");
        console.log(array[i]);
        // var n = 2;
        switch (array[i]) {
            case 1:
            Context.drawImage(clothes1, clothesX, clothesY);
            // Context.fillText(array[i], clothesX, 40);
            break;
            case 2:
            Context.drawImage(clothes2, clothesX, clothesY);
            break;
            case 3:
            Context.drawImage(clothes3, clothesX, clothesY);
            break;
            case 4:
            Context.drawImage(clothes4, clothesX, clothesY);
            break;
            case 5:
            Context.drawImage(clothes5, clothesX, clothesY);
            break;
        }
        clothesX+=70;
      }
      Context.drawImage(step1, 23, 300);
      Context.drawImage(step2, 223, 300);
      Context.drawImage(step3, 423, 300);
      Context.drawImage(step4, 623, 300);
      Context.drawImage(step5, 823, 300);

      // Context.fillText(keycount, 0, 40);

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //남은 시간 출력

    Context.fillText( minutes + ":" + seconds, timerX, timerY);
      // Context.fillText(keycount, 0, 40);
    if (--timer < 0) {
      timer = duration;
    }
    if(minutes==0 && seconds ==0)
    {
      //게임오버
      Gameover();
    }
    }, 1000);

      break;

  }
}
else if(GameState == GAME_STATE_GAME){

  switch (e.keyCode) {
    case 13:
    case 32:
    // Context.fillText( minutes + ":" + seconds, 50, 50);
    // Move();
      if(playerX == 113 && array[keycount] == 1)
      {
        okay();
      }
      else if(playerX == 313 && array[keycount] == 2)
      {
        okay();
      }
      else if(playerX == 513 && array[keycount] ==3)
      {
        okay();
      }
      else if(playerX == 713 && array[keycount] == 4)
      {
        okay();
      }
      else if(playerX == 913 && array[keycount]==5)
      {
        okay();
      }
      else wrong();

      console.log("키카운트"+keycount);
      break;
    case 37:
      playerX -= 200;
      if(playerX < 113)
        playerX = 113;
      Move();
      break;
    case 39:
      playerX += 200;
      if(playerX > 913)
        playerX = 913;
      Move();
    break;
  }
  }
}


//틀렸을 때
function wrong()
{
  keycount = 0;
  // alert("onkeydown");
  lifeFor--;
  if(lifeFor == 0)
    Gameover();
  else {
    screen();
  }
}

//게임오버
function Gameover()
{
    location.replace("Gameover.html");
}
