var menu=document.getElementById("menu");

ScrollReveal().reveal('.animate', {delay:0,easing:"ease-in",interval:50,scale:0.9,reset:true});
bars.addEventListener("click",()=>
{
    menu.classList.toggle("opacity-100");
    if (bars.classList.contains("fa-bars"))
    {
        bars.classList.replace("fa-bars","fa-times");
        menu.classList.replace("-top-60","top-12");
    }
    else
    {
        bars.classList.replace("fa-times","fa-bars");
        menu.classList.replace("top-12","-top-60");
    }
})

var project=document.getElementById("projects");
var photography=document.getElementById("photography");
var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var bar1=document.getElementById("bar1");
var bar2=document.getElementById("bar2");
project.addEventListener("click",()=>
{
    block1.classList.replace("hidden","block");
    block2.classList.replace("block","hidden");
    bar2.classList.replace("block","hidden");
    bar1.classList.replace("hidden","block");
})
photography.addEventListener("click",()=>
{
    block2.classList.replace("hidden","block");
    block1.classList.replace("block","hidden");
    bar1.classList.replace("block","hidden");
    bar2.classList.replace("hidden","block");
})