const a_link = document.getElementById("a_link");

a_link.addEventListener("mouseenter",  ()=>{
    a_link.classList.add("a_link_mod")
});

a_link.addEventListener("mouseleave", ()=>{
    a_link.classList.remove("a_link_mod")
});