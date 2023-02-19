const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.img');
let flag =0;
slides.forEach((slide,index)=>{
     slide.style.left=`${index*100}%`;
     console.log(index)
});
function prevShow()
{
  
flag=(flag-1+slides.length)%slides.length;
console.log(flag)
slidesShow();



}
function nextShow()
{
    
flag=(flag+1)%slides.length;
slidesShow();

}
function slidesShow(){
    slides.forEach((slide)=>{
       
       
 slide.style.transform=`translateX(-${flag*100}%)`;


    })
   
}
prev.addEventListener('click',prevShow);
next.addEventListener('click',nextShow);
