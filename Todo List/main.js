const itemInput =document.querySelector('#itemInput');
const formSubmit =document.querySelector('#itemForm')
const clearlist = document.querySelector('#clear-list');
const alerttext =document.querySelector('.error');
console.log(formSubmit+" "+alerttext+itemInput)
let todoList =[];


const inputValidate =(input)=>{
    let flag=false;
      console.log(input);
      alerttext.classList.remove('alert','alert-danger')
      alerttext.textContent="";
    if(input==''){
        alerttext.classList.add('alert', 'alert-danger')
      alerttext.textContent="empty text field please add any value in text field!";
      flag =true;
    }
    return flag;

}


const formHandle =()=>{
    const todoItems =document.querySelector('.todo-item');
    todoItems.forEach(todoitem => {
        if(todoitem.querySelector('.todo-content').textContent==value){
            document.querySelector('.complete').addEventListener('click',(e)=>{
                todoitem.querySelector('.todo-content').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            
          todoitem.querySelector('.edit').addEventListener('click',()=>{
            itemInput.textContent=vlaue;
          })
        }
        
    });
}
formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    inputValidate(itemInput.value);
})
