'use strict';

const modal= document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal =document.querySelector('.close-modal');
const btnsOpenModal =document.querySelectorAll('.show-modal');
const btnsOpenModal2 =document.querySelectorAll('.show-modal2');
const btnsOpenModal3 =document.querySelectorAll('.show-modal3');
console.log(btnsOpenModal);
var active=0;
const openModal =function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    active=1;
}
const openModal2 =function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    active=2;
}
const openModal3 =function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    active=3;  
}

for(let i=0;i<btnsOpenModal.length;i++) { 
    btnsOpenModal[i].addEventListener('click',openModal)
}
for(let i=0;i<btnsOpenModal2.length;i++) { 
    btnsOpenModal2[i].addEventListener('click',openModal2)
}
for(let i=0;i<btnsOpenModal3.length;i++) { 
    btnsOpenModal3[i].addEventListener('click',openModal3)
}
const CloseModal = function(){
    if(active==1){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');}
}
const CloseModal3 = function(){
    if(active==3){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');}
}
const CloseModal2 = function(){
    if(active==2){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');}
}
btnCloseModal.addEventListener('click',CloseModal)

overlay.addEventListener('click',CloseModal3)

document.addEventListener('keydown', function (e){
    console.log(e.key);
        if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            CloseModal2();
        }
       
});