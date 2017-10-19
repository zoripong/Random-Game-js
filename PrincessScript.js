var count=0;
var i, x, y;

//화면 클릭시 이미지 전환
function touch(){
      count++;
      if(count<5){
        //대화상자 변화
      document.getElementById("click").innerHTML="";
      document.getElementById("title").innerHTML="<img src='image\\"+count+".png'>";
      document.getElementById("title").style="left:-10px; top:10px;";
      }
      else if(count == 5)
      {
        document.getElementById("title").innerHTML="<img src='image\\"+count+".png'>";
        document.getElementById("title").style="left:125px; top:-30px;";
        document.getElementById("click").innerHTML="<img src='image\\click.png'>";
        document.getElementById("click").style="top:145px;";
      }
      else if(count == 6)
      {
        //게임시작
        //제한 시간 & 타이머
        var duration = 30;
        var timer = duration;
        var display = document.querySelector('#timer');
          refreshIntervalId = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          //남은 시간 출력
          display.textContent = minutes + ":" + seconds;

          if (--timer < 0) {
            timer = duration;
          }
          if(minutes==0 && seconds ==0)
          {
            //게임오버
            failed();
          }
        }, 1000);

        //게임 화면 배치
        document.getElementById("title").innerHTML="";
        document.getElementById("click").innerHTML="";
        document.getElementById("bg").style="background-image: url('game.jpg');";
        document.getElementById("character").innerHTML="<img src='image\\princess.png'>";
        document.getElementById("character").style="left:-120px;";
        document.getElementById("board").innerHTML="<img src='image\\board.png'>";

        // 반지 랜덤 배치
              for(i = 0; i<200; i++){
                x=Math.floor(Math.random() * 410) + 20;
                y=Math.floor(Math.random() * 410) + 20;
                if(i==50)
                {
                document.getElementById("board").innerHTML+="<img src='image\\diaRec.png' onclick='finish();' style='position:absolute; top:"+x+"px; left:"+y+"px;'>"
              }
                document.getElementById("board").innerHTML +="<img id='stoneRing'src='image\\stoneRec.png' onclick='this.style.display=\"none\";' style='position:absolute; top:"+x+"px; left:"+y+"px;'>"

      }
}
}

//다이아 반지를 찾았을 때
function finish()
{
 clearInterval(refreshIntervalId);
  document.getElementById("delete").innerHTML="<b><font size='7' color='#f46565'><p>"+minutes+":"+seconds+"</p></font><b>";
  document.getElementById("delete").style="top:100px; left:400px;"
  document.getElementById("bg").style="background-image:url('last.jpg')";
  document.getElementById("character").innerHTML="<img src='image\\smileprincess.png'>";
  document.getElementById("character").style="left:190px;";
  document.getElementById("board").innerHTML="";
  document.getElementById("title").innerHTML="<img src='image\\clear.png'>";
  document.getElementById("title").style="left:100px; top:30px";
  document.getElementById("bgm").innerHTML="<embed src='audio\\stageClear.mp3' autostart='true' loop='false' width='280' height='45' hidden='true'>";
  document.getElementById("replay").innerHTML="<img src='image\\replay.png' onclick='location.replace(\"index.html\");'>";

}


//시간이 끝나서 게임 오버 했을 때
function failed()
{
  document.getElementById("delete").innerHTML="";
  document.getElementById("bg").style="background-image:url('last.jpg')";
  document.getElementById("character").innerHTML="<img src='image\\cryprincess.png'>";
  document.getElementById("character").style="left:190px;";
  document.getElementById("board").innerHTML="";
  document.getElementById("title").innerHTML="<img src='image\\fail.png'>";
  document.getElementById("title").style="left:100px; top:30px";
  document.getElementById("bgm").innerHTML="<embed src='audio\\fail.mp3' autostart='true' loop='false' width='280' height='45' hidden='true'>";
  document.getElementById("replay").innerHTML="<img src='image\\replay.png' onclick='location.replace(\"index.html\");'>";


}
