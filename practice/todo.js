let inp=   document.querySelector("input")
let btn=   document.querySelector("button")
let ul=   document.querySelector("ol")
let btnDel=   document.querySelector("#deleteAll")

btn.addEventListener("click" , ()=>{
    let data = inp.value;

    let li = document.createElement("li")

    li.innerText =data
    ul.append(li)
    inp.value = ""
    li.addEventListener("click",()=>{
        li.remove()
    })

    let obj = {}
    obj.append(li)
    console.log(arr)

    localStorage.setItem("formdata", JSON.stringify(arr));
    alert("Signup Successful");

    btnDel.addEventListener("click",()=>{
        li.remove()
    })
})

