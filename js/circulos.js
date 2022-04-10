"use strict";
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

for (let index = 0; index < 20; index++ ){
    ctx.fillStyle = randomRGBA();
    ctx.beginPath();
    ctx.arc(Math.round(Math.random() * canvasWidth), Math.round(Math.random() * canvasHeight), 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function randomRGBA(){
    let r= Math.round(Math.random() * 255);
    let g= Math.round(Math.random() * 255);
    let b= Math.round(Math.random() * 255);
    let a= 255;
    return `rgba(${r},${b},${b},${a})`;
}