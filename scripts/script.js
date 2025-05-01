const link_list = document.getElementById('links_page')
const currentWindow = window.location.pathname;


const list_button_li = [{text: "Inicio", link: "/"}, 
    {text: "Datos personales", link: "/Datos_personales.html"},
    {text: "Pasatiempos", link: "/Pasatiempos.html"},
    {text: "Contactos", link: "/Contactos.html"},
    ];

list_button_li.map((element) => {

    // li element
    const new_button = document.createElement('li');
    new_button.textContent = element.text;
    new_button.classList.add('li_style');

    // a element
    const anchor_link = document.createElement('a');
    anchor_link.classList.add('li_color')
    anchor_link.setAttribute('href', element.link);
    anchor_link.classList.add('a_text')
    anchor_link.addEventListener('mouseenter', ()=>{
        anchor_link.classList.remove('li_color');
        anchor_link.classList.add('li_mod');
        
    })
    if(currentWindow !== element.link){
    anchor_link.addEventListener('mouseleave', ()=>{
        anchor_link.classList.add('li_color');
        anchor_link.classList.remove('li_mod');
    })
    }else{
        anchor_link.classList.add('li_mod');
    }
    anchor_link.appendChild(new_button);
    link_list.appendChild(anchor_link);
})

