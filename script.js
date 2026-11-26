let next = document.querySelector('.next');
console.log(next);
let prev = document.querySelector('.prev');


//ORIGINAL CODE
next.addEventListener('click', ()=>{
  let items = document.querySelectorAll('.item');
  let slide = document.querySelector('.slide');
  // console.log("slide before move:", [...items].map(i => i.textContent));
  slide.appendChild(items[0]);
  // console.log("slide after move:",[...document.querySelectorAll('.item')].map(i => i.textContent));
});

prev.addEventListener('click', ()=>{
   let items = document.querySelectorAll('.item');
  let slide = document.querySelector('.slide');
  slide.prepend(items[items.length - 1]);
});
