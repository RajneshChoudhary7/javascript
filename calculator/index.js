// let res = eval(23-23-234-234-234-324234);
// console.log(res)


let inp = document.querySelector("input")
let buttton = document.querySelectorAll("button")


for(let btn of buttton){
        btn.addEventListener("click" ,()=>{
            let txt = btn.innerText;
            if(txt == "C"){
                inp.value = "";
            }
            else if(txt == "=")
            {
                inp.value = eval(inp.value);
            }
            else{
                inp.value = inp.value+txt
            }
        })
}