let canvas =document.querySelector("canvas");
let pen=canvas.getContext("2d");
pen.fillStyle= "red";
let snakeCells = [[0,0],[50,50],[100,100],[150,150],[200,200],[250,250],[300,300],[350,350]]
let Cell = 50
function draw(){
    for(let i of snakeCells){
        pen.fillRect(i[0],i[1],Cell,Cell)
    }
}
draw()