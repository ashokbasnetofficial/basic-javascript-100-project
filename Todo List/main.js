(function(){
    // form set 
    // array object for select item
const select = [
    {
    value:1,
    select_title:"Great- 20%",

    },
    {
        value:2,
        select_title:"Good -10%",
        
    },
    {
        value:3,
        select_title:"Bad -5%",
        
    }
  
];

select.forEach(select => {
    // create option element 
    const option = document.createElement('option');
    // set the array object value to the option 
    option.value=select.value;
    option.textContent=select.select_title;
    const selectbox = document.getElementById('selectbox');
    selectbox.appendChild(option);
});

// ---------------form setup dyanmically --------------
 

// form validate 
const select_input =document.querySelectorAll('.totalbill');

const formValidate=(total_bill,bill_share,select_option)=>{
    // create paragraph tag

  
 
    // function insertAfter(reference_element,new_element){
    //     reference_element.parentNode.insertBefore(new_element,reference_element.nextSibling);
    
    // }
  
    
    let flag =false;
    const erorr_message =document.querySelectorAll('.error_message');
console.log(erorr_message);
erorr_message.forEach((error_message)=>{
    error_message.style.color="red";
    error_message.innerHTML="";
})
    //   bill validate 
    if(total_bill==''||total_bill<0){
         erorr_message[0].innerHTML="field blank or <0!";
        flag =true;

    }
    // number of bill share validate 
    if(bill_share<0 || bill_share==''){
        erorr_message[1].innerHTML="field blank or <0!"
        flag =true;
    }
    // select field validate 
    
    if(select_option<1||select_option>3){
        erorr_message[2].innerHTML="please choose your service!"
        flag =true;
    }
   
  return flag  ;
}
// calcuate the tip amount 
const results =(total_bill,bill_share,select_option)=>{
    let tip_percent='';

    if(select_option==1){
        tip_percent=.2;
    }
    if(select_option==2){
        tip_percent=.1;
    }
    if(select_option==3){
        tip_percent=.02;
    }
    const tip_amount = Number(total_bill)*tip_percent;
    const total_amount = Number(total_bill)+Number(tip_amount);
    const per_person = Number(tip_amount)/Number(bill_share);
return [tip_amount,total_amount,per_person];
    
}
// form sumbit
const tip_form = document.querySelector('.tip-form');
tip_form.addEventListener('submit',(e)=>{
e.preventDefault();
let total_bill= select_input[0].value;
let bill_share =select_input[1].value;
let select_option=select_input[2].value;
let result = document.querySelector('.result');
console.log(total_bill+" "+bill_share+" "+select_option)
const isTrue =formValidate(total_bill,bill_share,select_option)
if(!isTrue){
    const finalResult = results(total_bill,bill_share,select_option);
    const loader = document.querySelector('.loader');
       loader.classList.add('showloader');
      
  setTimeout(()=>{   

    loader.classList.remove('showloader');
    const resultsshow = document.querySelectorAll('.results');
    resultsshow[0].textContent=`Total Tip:रु${finalResult[0].toFixed(2)}`;
    resultsshow[1].textContent=`Total Bill Amount:रु${finalResult[1].toFixed(2)}`;
    resultsshow[2].textContent=`Per Person:रु${finalResult[2].toFixed(2)}`;
    result.classList.add('showloader');
},2000);

}
});
})();