const filterbtn  = document.querySelectorAll('.filterbtn');
const storeitems = document.querySelector('#store-items');
const phonelist = document.querySelectorAll('.phone-list');
const forminput = document.querySelector('.form-input');
(function(){

  
  console.log(filterbtn);
  console.log(storeitems);
  
  console.log(phonelist);
  
  
  // for filtering items 
  filterbtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      e.preventDefault();
      const filter =e.target.dataset.filter;
      
        phonelist.forEach((phones)=>{
  
          if(filter=='all'){
            phones.style.display='block';
          }
          else if(phones.classList.contains(filter)){
            phones.style.display='block';

          }
          else{
            phones.style.display='none';
          }
        })
      
    })
  })
  
})();
// searching item according to the filter 
(function(){
  forminput.addEventListener('keyup',(e)=>{
    
     const searchkey = e.target.value.toLowerCase().trim();
     console.log(searchkey)
     phonelist.forEach(phones=>{
      if(  phones.textContent.includes(searchkey) ||phones.classList.contains(searchkey)){
        phones.style.display="block";
      }
      else{
        phones.style.display="none";
      }
     })
  })
})();