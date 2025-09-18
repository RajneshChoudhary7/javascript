let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ol") 

btn.addEventListener("click",()=>{
    let searchText = inp.value

    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res)
    show(res)
})
})



function show(res) {
    ul.innerHTML = ""  // purane results clear karne ke liye
    for (let i of res) {
        let img = document.createElement('img')
        let li = document.createElement('li')
        let h3 = document.createElement('h3')

        li.innerText = i.show.url
        h3.innerText = i.show.name

        // image ke liye innerHTML nahi, src use karo
        if (i.show.image) {
            img.src = i.show.image.medium
        }

        ul.append(li, h3, img)
    }
}
