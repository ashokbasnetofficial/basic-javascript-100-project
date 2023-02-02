const btn1= document.querySelector('.btn1');
const btn2= document.querySelector('.btn2');
const counter= document.querySelector('#count');
let count =0;

btn1.addEventListener('click',Decrement);
btn2.addEventListener('click',Increment);
function Decrement(){
  count--;
  counter.innerHTML=count;
 console.log(count);
  if(count<0){
     counter.style.color='red';
  
  }
 else  if(count==0){
  counter.style.color='white';
 }
 
}
function Increment(){
  count++;
counter.innerHTML=count;
console.log(count)
  if(count>0){
   counter.style.color="green";
   
    }
    else if(count==0){
      counter.style.color='white';
     }
  
   
}



