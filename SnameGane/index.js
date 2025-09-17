let canvas =document.querySelector("canvas");
let pen=canvas.getContext("2d");

direction = "right"
let snakeCells = [[0,0]]
let Cell = 50
let gameOver = false
let score =0
let random = generateRandon()
let id = setInterval(()=>{
    draw()
    update()

},200)
document.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowUp")
    {
        direction = "up"
    }
    else if(e.key=="ArrowDown")
    {
        direction = "down"
    }
    else if(e.key == "ArrowLeft")
    {
        direction = "left"
    }
    else {
        direction = "right"
    }
})

function draw(){
    if(gameOver==true){
        clearInterval(id)
        pen.font = '40px sans-serif';
            pen.fillText('Game over', 50, 150)
        return
    }
    pen.clearRect(0,0,1200,600)
        for(let i of snakeCells){
        pen.fillStyle="yellow"
        pen.fillRect(i[0],i[1],Cell,Cell)
    }

    pen.font = '40px sans-serif';
        pen.fillText(`${score}`,150,50);
               pen.fillStyle="white"
        pen.fillRect(random[0],random[1],Cell,Cell)
}


function update(){
    let headX = snakeCells[snakeCells.length-1][0]
    let headY = snakeCells[snakeCells.length-1][1]
    let newX 
    let newY
    if(direction == "right")
    {
     newX = headX+Cell
     newY = headY
    if(newX>=1200)
    {
        gameOver=true
    }
    }
    else if(direction == "left")
    {
    newX = headX-Cell
    newY = headY
    if(newX <0)
    {
        gameOver=true
    }
    }
    else if(direction == "up")
    {
     newX = headX
     newY = headY-Cell
    if(newY<0)
    {
        gameOver=true
    }
    }
    else {
         newX = headX
         newY = headY+Cell
        if(newY>=600)
    {
        gameOver=true
    }
    }

    snakeCells.push([newX,newY])
    if(newX==random[0] && newY==random[1])
    {
        random = generateRandon()
        score+=1
    }
    else{
        snakeCells.shift()
    }

}



function generateRandon() {
    return [
        Math.round((Math.random() * 1150) / Cell) * Cell,
        Math.round((Math.random() * 550) / Cell) * Cell
    ];
}