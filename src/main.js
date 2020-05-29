// console.log("hi");
// document.getElementById("B").innerHTML = "";
// document.getElementById("L").innerHTML = "";
// document.getElementById("R").innerHTML = "";

let left = document.querySelector("#left");
let style = document.querySelector("#style");
let n = 0;
let showCode = `/**HLZ,我要在线给你制作一个爱心！睁大你的眼睛看好了!**/

/*将容器左右分开，左边放代码展示，右边放效果*/  
#container #left {
    border: 1px solid blue;
    width: 50%;
    height: 60%;
    overflow: hidden;
}
#container #right {
    border: 1px solid black;
    width: 50%;
    height: 60%;
    overflow: hidden;
}
/*设置左边代码展示区的样式*/
#container #left {
  border:none;
  background-color: #0e9aa7;
}
/*设置右边效果展示区的样式*/
#container #right {
    border: 1px solid black;
    width: 50%;
    height: 60%;   
}
/*右边再创建一个div用来容纳爱心*/
#container #right #love-box {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*开始画爱心，首先创建三个正方形*/
#container #right #love-box #L {
    border: 1px solid black;
    background-color: #e84a5f;
    width: 50px;
    height: 50px;
  }
#container #right #love-box #R {
    border: 1px solid black;
    background-color: #e84a5f;
    width: 50px;
    height: 50px;
    
  }
#container #right #love-box #B {
    border: 1px solid black;
    background-color: #e84a5f;
    width: 50px;
    height: 50px;
}
/*使三个正方形居中*/

#container #right{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#container #right #love-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/*将底部正方形旋转45deg*/
#container #right #love-box #B {
  transform: rotate(45deg);
  border:none;
}
/*移动爱心左右两边到正确位置并改成圆弧状,除去边框*/
#container #right #love-box #L {
  position: absolute;
  transform: rotate(45deg) translate(-13%, 35.5%);
  border-radius: 60%;
  border:none;
}
#container #right #love-box #R {
  transform: rotate(45deg) translate(71%, 25%);
  border-radius: 60%;
  border:none;
}
#container{
  border:none;
}
#container #right{
  border:none;
}
#container #right #love-box{
  border:none;
}

/*永不停止跳动的心*/
@keyframes beat {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
} 
#container #right #love-box{
  animation: beat infinite 3s;
}


`;

let showCodeAdd = "";

let step = () => {
  setInterval(() => {
    if (showCode[n] === "\n") {
      showCodeAdd += "<br>";
    } else if (showCode[n] === " ") {
      showCodeAdd += "&nbsp;";
    } else {
      showCodeAdd += showCode[n];
    }
    left.scrollTo(0, 9999);
    if (n < showCode.length) {
      n += 1;
      left.innerHTML = showCodeAdd;
      style.innerHTML = showCode.substring(0, n);
    } else {
      return false;
    }
  }, 50);
};

step();
