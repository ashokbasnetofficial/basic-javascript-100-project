const itemInput =document.querySelector('#itemInput');
const formSubmit =document.querySelector('#itemForm')
const clearlist = document.querySelector('#clear-list');
const alerttext =document.querySelector('.error');

const todoDiv = document.querySelector('.todo-list');
console.log(formSubmit+" "+alerttext+" "+itemInput+" "+todoDiv)
let todoList =[];

//input form validation 
const inputValidate =(input)=>{
  // flag for validation 
    let flag=false;
      console.log(input);
      alerttext.classList.remove('alert','alert-danger')
      alerttext.textContent="";
    if(input==''){
        alerttext.classList.add('alert', 'alert-danger')
      alerttext.textContent="empty text field please add any value in text field!";
      flag =true;
      alerttext.classList.remove('hide');
      setTimeout(()=>{
        alerttext.classList.add('hide');
        },
        2000
        );
    }
    return flag;


}


const formHandle =(value)=>{
   console.log(value);
    const todoItems =todoDiv.querySelectorAll('.todo-item');
  console.log(todoItems);
    todoItems.forEach(todoitem => {
        if(todoitem.querySelector('.todo-content').textContent===value){
            // complete 
                todoitem.querySelector('.complete').addEventListener('click',(e)=>{
                todoitem.querySelector('.todo-content').classList.toggle('completed');
                todoitem.querySelector('.todo-content').classList.toggle('visibility');
            });
            //edit
                todoitem.querySelector('.edit').addEventListener('click',()=>{
                itemInput.value=value;
                todoDiv.removeChild(todoitem);
           todoList= todoList.filter((item)=>{
              return   item!==value;
            });

          });
        //   delete 
      
        todoitem.querySelector('.delete').addEventListener('click',()=>{
         
          todoDiv.removeChild(todoitem);  
          todoList= todoList.filter((item)=>{
            return   item!==value;
          })
          
          });
        }
    });
}
const removeItem=(item)=>{
  console.log(item);
  const itemIndex = (todoList.indexOf(item));
  //splice method used to remove item which use parameter first indexOf array 2nd index no. of item that are remove 
  todoList.splice(itemIndex,1);
}
const getList =(todoList)=>{
  todoDiv.innerHTML='';
  todoList.forEach((item)=>{
     todoDiv.insertAdjacentHTML('beforeend', ` 
     <div class="todo-item d-flex justify-content-between mb-3">
     <p class="todo-content">${item}</p>
      <div class="editor">
       <a href="#" class="complete mx-2 item-icon text-success"><i class="bi bi-check-circle"></i></a>
       <a href="#" class="edit mx-2 item-icon text-primary"><i class="bi bi-pencil-square"></i></a>
       <a href="#" class="delete mx-2 item-icon text-danger"><i class="bi bi-archive"></i></a>
      </div>
      </div>` );
    formHandle(item);
  })
  
}
const getLocalStore =()=>{
  const todoStore = localStorage.getItem('todoList');
  if(todoStore=='undefined'||todoStore===null){
    todoList=[];
  }
  else{
    todoList=JSON.parse(todoStore);
    console.log('get all iitem local storage:'+todoList);
    getList(todoList);

  }

}
const postLocalStore=(todoList)=>{
localStorage.setItem('todoList',JSON.stringify(todoList));
}
getLocalStore();
formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputValue = itemInput.value;
    const isTrue =inputValidate(inputValue);
   if(!isTrue){
    todoList.push(inputValue);
    postLocalStore(todoList);
    getList(todoList);
    console.log(todoList)
   }

itemInput.value='';

});
clearlist.addEventListener('click',()=>{
  todoList =[];
  localStorage.clear();
  getList(todoList);
 getLocalStore.clear();

});
