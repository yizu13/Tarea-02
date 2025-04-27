const foto = document.getElementById("foto");
const myName = document.getElementById("h1");

foto.addEventListener("mouseenter", ()=>{
    foto.classList.add("imgBig");
    myName.classList.add("h1");
})

foto.addEventListener("mouseleave", () =>{
    foto.classList.remove("imgBig");
    myName.classList.remove("h1");
})