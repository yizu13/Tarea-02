const pasatiempos = document.getElementById("ContentBody")

const list_pasatiempo = ["Jugar", "Leer", "Chatear", "Programar", "Ver series", "Estudiar"];

list_pasatiempo.map((element)=>{
    const new_div = document.createElement("div");
    new_div.classList.add("card");
    const text_div = document.createElement("div");
    text_div.classList.add("gradientText");
    text_div.textContent = element;
    new_div.appendChild(text_div);
    new_div.addEventListener("mouseenter", ()=>{
        new_div.classList.add("card_big");
    });
    new_div.addEventListener("mouseleave",()=>{
        new_div.classList.remove("card_big");
    });
    pasatiempos.appendChild(new_div);
})