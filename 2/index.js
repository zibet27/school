const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

// 60 degrees angle
const angle = (Math.PI / 3) * 2;
const sin = Math.sin(angle);
const cos = Math.cos(angle);

const drawTriangle = (startX, startY, width) => {
  let x = startX;
  let y = startY;
  const sinW = sin * width;
  const cosW = cos * width;
  const line = (nextX, nextY) => {
    x = nextX;
    y = nextY;
    ctx.lineTo(x, y);
  };
  ctx.moveTo(startX, startY);
  line(x + width, y);
  line(x + cosW, y + sinW);
  line(x + cosW, startY);
};

const count = 10;
const width = 50;

ctx.beginPath();

for (let x = width; x < width * count; x += width) {
  drawTriangle(x, 50, width);
}

ctx.closePath();
ctx.stroke();
