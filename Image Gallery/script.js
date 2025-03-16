let natureBtn = document.querySelector(".nature");
let natureDiv = document.querySelector(".nature-box");

let archBtn = document.querySelector(".arch");
let archDiv = document.querySelector(".arch-box");

let sciFiBtn = document.querySelector(".sci-fi");
let sciFiDiv = document.querySelector(".sci-box");

let animeBtn = document.querySelector(".anime");
let animeDiv = document.querySelector(".anime-box");

function hideAll(){
    natureDiv.classList.remove("show");
    archDiv.classList.remove("show");
    sciFiDiv.classList.remove("show");
    animeDiv.classList.remove("show");
}

function toggle(div){
    if(div.classList.contains("show"))
        div.classList.remove("show");
    else{
        hideAll();
        div.classList.add("show");
    }
}

natureBtn.addEventListener("click", function(){
    toggle(natureDiv);
    
})

archBtn.addEventListener("click", function(){
    toggle(archDiv);
})

sciFiBtn.addEventListener("click", function(){
    toggle(sciFiDiv);
})

animeBtn.addEventListener("click", function(){
    toggle(animeDiv);
})

let modal=document.querySelector(".modal");
let modalContent=document.querySelector(".modal-content");
let closeBtn=document.querySelector(".close");
let images=document.querySelectorAll(".images img");

images.forEach(img => {
    img.addEventListener("click",()=>{
        modal.style.display="flex";
        modalContent.src=img.src;
    })
});
closeBtn.addEventListener("click",()=>{
    modal.style.display="none";
});
modal.addEventListener("click",(e)=>{
    if(e.target===modal)
        modal.style.display="none";
});