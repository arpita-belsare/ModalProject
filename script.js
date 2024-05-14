const button=document.querySelector('.model-btn');
const wrap=document.querySelector('.wrapper');
const  modaloverlay=document.querySelector('.model-overlay');
const closed=document.querySelector('.closed');

button.addEventListener('click',function(){
    modaloverlay.classList.add("open-modal");

});
closed.addEventListener("click",function(){
    modaloverlay.classList.remove("open-modal");
})
