const three = document.querySelector('.three');
const cut = document.querySelector('.cut');
const nav = document.querySelector('.nav');


three.addEventListener("click",()=>{
    cut.classList.toggle('show');
    nav.classList.toggle('show');
    three.classList.toggle('hide');
})

cut.addEventListener("click",()=>{
    cut.classList.remove('show');
    nav.classList.remove('show');
    three.classList.remove('hide');
})



// const threeDots = document.querySelector('.three-dots')
// const container = document.querySelector('.container')

// const cut = document.querySelector(".cut");

// threeDots.addEventListener('click',()=>{
//     container.Style.width = '50vw';
// });

// cut.addEventListener('click',()=>{
//     container.Style.width = '0vw';
// });