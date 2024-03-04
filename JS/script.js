const containerImg = document.querySelector('.container-img');
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
let counterImg = 0;
const containerPreview = document.querySelector('.container-preview');
const carosel = document.querySelector('.carosel');
let allowNext = true;

for (i = 0; i < images.length; i++){
  const img = images[i];
  console.log(img);
  containerImg.innerHTML += `<img class="img d-none" src="${img}">`
  containerPreview.innerHTML += `<img class="preview dark" src="${img}">`
}

setInterval(goNext, 3000);

carosel.addEventListener('mouseover', () => {
  allowNext = false;
});

carosel.addEventListener('mouseout', () => {
  allowNext = true;
});

const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const itemCollection = document.getElementsByClassName('img');
itemCollection[counterImg].classList.remove('d-none');
const previewCollection = document.getElementsByClassName('preview');
previewCollection[counterImg].classList.remove('dark');


btnUp.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  counterImg--
  if (counterImg < 0) {
    counterImg = images.length - 1;
  } 

    itemCollection[counterImg].classList.remove('d-none');
    previewCollection[counterImg].classList.remove('dark');

  
} )
btnDown.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  counterImg++
  if (counterImg > images.length -1 ) {
    counterImg = 0;
  } 
  itemCollection[counterImg].classList.remove('d-none');
  previewCollection[counterImg].classList.remove('dark');

} )

function goNext() {
  if (!allowNext) return;
  itemCollection[counterImg].classList.add('d-none');
  previewCollection[counterImg].classList.add('dark');
  counterImg++
  if (counterImg > images.length -1 ) {
    counterImg = 0;
  } 
  itemCollection[counterImg].classList.remove('d-none');
  previewCollection[counterImg].classList.remove('dark');

}
