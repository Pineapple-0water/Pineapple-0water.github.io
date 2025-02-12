// 点击3次触发爱心雨
let clickCount = 0;
document.addEventListener('click', () => {
  clickCount++;

  if(clickCount === 3) {
    createHearts();
    clickCount = 0; // 重置计数
  }

  // 1秒内不连续点击则重置
  setTimeout(() => { clickCount = 0 }, 1000);
});

function createHearts() {
  const colors = ['#ff0077', '#ff3399', '#ff66b3']; // 粉色系

  // 创建50个爱心
  for(let i=0; i<50; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'fixed';
    heart.style.left = Math.random()*95 + 'vw'; // 随机水平位置
    heart.style.fontSize = Math.random()*30 + 20 + 'px'; // 随机大小
    heart.style.color = colors[Math.floor(Math.random()*3)]; // 随机颜色
    heart.style.animation = `fall ${Math.random()*3+2}s linear`; // 随机下落速度
    document.body.appendChild(heart);

    // 动画结束后移除元素
    heart.addEventListener('animationend', () => heart.remove());
  }
}

// 添加动画关键帧
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
  to { 
    transform: translateY(110vh) rotate(360deg); /* 下落+旋转 */
  }
}`;
document.head.appendChild(style);