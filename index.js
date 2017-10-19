//이미지 교체
function bigImg(x) {
  x.src = "image\\openbox.png";
}

function normalImg(x) {
  x.src="image\\closebox.png";
}

//랜덤 게임
function start()
{
  var x=Math.floor(Math.random() * 2) + 1;
  switch (x) {
    case 1:
        console.log("princess");
        location.replace("princess.html");
      break;
    case 2:
        console.log("prince");
        location.replace("prince_Game.html");
      break;
    default:

  }
}
