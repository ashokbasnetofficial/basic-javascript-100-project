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
// form sumbit 
const tip_form = document.querySelector('.tip-form');
tip_form.addEventListener('submit',(e)=>{
e.preventDefault();
});
const select_input=document.querySelectorAll('.totalbill');
const p= document.createElement('p');
function textContent(text){
    p.style.color='red';
    p.textContent=text;
}
textContent('hello my friend')
function insertAfter(reference_element,new_element){
    reference_element.parentNode.insertBefore(new_element,reference_element.nextSibling);

}
insertAfter(select_input[0],p);

const formValidate=(total_bill,bill_share,select_option)=>{
  
    let flag =false;
 
    if(total_bill==''||total_bill<0){
           
        flag =true;

    }
    
}
})();