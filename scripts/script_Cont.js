const container = document.getElementById("contacts");

const list_contact = [
    {text: "Github", icon: "octicon:mark-github-24", href: "https://github.com/yizu13?tab=repositories", id: "git"}, 
    {text: "Instagram", icon: "entypo-social:instagram-with-circle", href: "https://www.instagram.com/0jesus_hernandez/", id: "insta"}, 
    {text: "Linkedin", icon: "entypo-social:linkedin-with-circle", href: "https://www.linkedin.com/in/jes%C3%BAs-alexander-hern%C3%A1ndez-de-los-santos-698ba81b4/", id: "link"},
    {text: "Gmail", icon: "entypo-social:google-with-circle", href: "mailto:jesushdez1303@gmail.com", id: "gmail"},
    {text: "809-284-5356", icon: "ph:phone-fill", href: "", id: "num"},
]

list_contact.map((element)=>{
    const new_div = document.createElement("div");
    const link = document.createElement("a");
    new_div.classList.add("Contact");
    const icon = document.createElement("iconify-icon");
    icon.setAttribute("icon", element.icon);
    icon.classList.add("icon_style")
    new_div.addEventListener("mouseenter", ()=>{
        new_div.classList.add("Contact_open");
        const new_p = document.createElement("p");
        new_p.setAttribute("id", element.id);
        new_p.classList.add("p_syle")
        new_p.textContent = element.text;

        new_div.appendChild(new_p);
        if(element.href){
        link.setAttribute("href", element.href);
        link.setAttribute("target", "_blank");
    }else if(!element.href){
        new_div.classList.add("removeCursor")
    }
        link.classList.add("style_link");
    })
    new_div.addEventListener("mouseleave", ()=>{
        new_div.classList.remove("Contact_open");
        link.classList.remove("style_link");
        link.removeAttribute("href", element.href);
        link.removeAttribute("target", "_blank");
        new_div.removeChild(document.getElementById(element.id));
    })
    new_div.appendChild(icon);
    link.appendChild(new_div);
    container.appendChild(link);
});