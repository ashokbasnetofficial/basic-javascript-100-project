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
      setTimeout(()=>{
        alerttext.classList.remove('hide');
        },
        2000
        );
    }
    return flag;


}


const formHandle =(value)=>{
    const todoItems =document.querySelector('.todo-item');
    todoItems.forEach(todoitem => {
        if(todoitem.querySelector('.todo-content').textContent==value){
            // complete 
            document.querySelector('.complete').addEventListener('click',(e)=>{
                todoitem.querySelector('.todo-content').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            //edit
          todoitem.querySelector('.edit').addEventListener('click',()=>{
            itemInput.textContent=value;
           todoList= todoList.filter((item)=>{
              return   item!=value;
            });

          });
        //   delete 
   
        todoitem.querySelector('.delete').addEventListener('click',()=>{
            
          todoList= todoList.filter((item)=>{
            return   item!=value;
          })
          });
        }
    });
}
const removeItem=(item)=>{
  const itemIndex = itemList.indexOf(item);
  //splice method used to remove item which use parameter first indexOf array 2nd index no. of item that are remove 
  itemList.splice(itemIndex,1);
}
const getList =(itemList)=>{
  itemList.innerHTML='';
  itemList.forEach((item)=>{
     item.insertAdjacentHTML('beforeend', ` <div class="todo-item d-flex justify-content-between d-none mb-3">
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
  const todoStore = localStorage.getItem(todoList);
  if(todoStore=='undefined'||todoStore===null){
    todoList=[];
  }
  else{
    todoList=JSON.parse(todoStore);
  }
  getList(todoList);
}
const postLocalStore=(todoList)=>{
localStorage.setItem('todoList',JSON.stringify(todoList));
}
getLocalStore();
formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue = itemInput.value;
    const isTrue =inputValidate(inputValue);
   if(!isTrue){
    

   }



})
