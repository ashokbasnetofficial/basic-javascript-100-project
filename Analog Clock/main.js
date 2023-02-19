<<<<<<< HEAD
console.log("analog time!");
const hour = document.querySelector('.hour');
const minute =document.querySelector('.minute');
const second = document.querySelector('.second');

setInterval(
()=>{
  fullDate = new Date();
  hr =fullDate.getHours();
  min =fullDate.getMinutes();
  hr_rotation = 30*hr+min/2;
  min_rotation = 6*min;
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  
},
1000
);
 fullDate = new Date();
function sec(){
   
  const   sec= fullDate.getSeconds();
    console.log(sec)
    second.style.animationDelay = '-' +  sec + 's';
   
  }
  sec();
  
  
=======
console.log("analog time!");
const hour = document.querySelector('.hour');
const minute =document.querySelector('.minute');
const second = document.querySelector('.second');

setInterval(
()=>{
  fullDate = new Date();
  hr =fullDate.getHours();
  min =fullDate.getMinutes();
  hr_rotation = 30*hr+min/2;
  min_rotation = 6*min;
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  
},
1000
);
 fullDate = new Date();
function sec(){
   
  const   sec= fullDate.getSeconds();
    console.log(sec)
    second.style.animationDelay = '-' +  sec + 's';
   
  }
  sec();
  
  
>>>>>>> 8f8693f55f56302fa69265b972888d2ee3bf5b46
