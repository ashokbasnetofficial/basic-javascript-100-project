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
const select_input=document.querySelectorAll('.totalbill');
const formValidate=(total_bill,bill_share,select_option)=>{
    // create paragraph tag

    const p= document.createElement('p');
    // function for erorr_message
    function textContent(erorr_message){
        p.style.color='red';
        p.textContent=erorr_message;
    }
 
    function insertAfter(reference_element,new_element){
        reference_element.parentNode.insertBefore(new_element,reference_element.nextSibling);
    
    }

    
    let flag =false;
    //   bill validate 
    if(total_bill==''||total_bill<0){
        insertAfter(select_input[0],p);
        textContent('bill field cannot be empty or <0!');
        flag =true;

    }
    // number of bill share validate 
    if(bill_share<0 || bill_share==''){
        insertAfter(select_input[1],p);
        textContent('error!cannot be <0')
        flag =true;
    }
    // select field validate 
    
    if(select_option<1||select_option>3){
        insertAfter(select_input[2],p);
        textContent('please select the service!');
        flag =true;
    }
  return flag  ;
}
// form sumbit
const tip_form = document.querySelector('.tip-form');
tip_form.addEventListener('submit',(e)=>{
e.preventDefault();
let total_bill= select_input[0].value;
let bill_share =select_input[1].value;
let select_option=select_input[2].value;
console.log(total_bill+" "+bill_share+" "+select_option)
if(formValidate(total_bill,bill_share,select_option)){
  console.log("please validate form!")
}
});
})();