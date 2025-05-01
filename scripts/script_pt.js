const pasatiempos = document.getElementById("ContentBody")

const list_pasatiempo = [
    {title: "Jugar", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}, 
    {title: "Leer", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry '}, 
    {title: "Chatear", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}, 
    {title: "Programar", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}, 
    {title: "Ver series", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}, 
    {title: "Estudiar", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
];

list_pasatiempo.map((element)=>{
    const new_div = document.createElement("div");
    new_div.classList.add("card");
    const text_div = document.createElement("div");
    text_div.classList.add("gradientText");
    text_div.classList.add("textDefault");
    text_div.textContent = element.title;
    const des_div = document.createElement("div");
    des_div.classList.add("desDiv");
    const des_divtxt = document.createElement("p");
    des_divtxt.classList.add("text");
    des_divtxt.textContent = element.description;

    des_div.appendChild(des_divtxt)
    new_div.appendChild(text_div);
    new_div.appendChild(des_div);
    new_div.addEventListener("mouseenter", ()=>{
        new_div.classList.add("card_big");
        text_div.classList.add("changeText");
        des_div.classList.add("desDivMod");
        des_divtxt.classList.add("textMod");
    });
    new_div.addEventListener("mouseleave",()=>{
        new_div.classList.remove("card_big");
        text_div.classList.remove("changeText");
        des_div.classList.remove("desDivMod");
        des_divtxt.classList.remove("textMod");
    });
    pasatiempos.appendChild(new_div);
})