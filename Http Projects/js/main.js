const select = document.querySelector('.select-form');
const sumbit =document.querySelector('.submit');
const userprofile =document.querySelector('.api-show');
(function(){
    const select_dataset=[
        {
            value:1,
            option:"XMLHttp Request"
        },
        {
            value:2,
            option:"Fetch"
        },
        {
            value:3,
            option:"Axios"
        },
        {
            value:4,
            option:"Jquery"
        },
    
    
    ];
     select_dataset.forEach((op)=>{
    const option = document.createElement('option');
    option.value=op.value;
    option.innerText=op.option;
    console.log(option);
    select.appendChild(option);
    
    });
    sumbit.addEventListener('submit',(e)=>{
       e.preventDefault();
       userprofile.classList.add('display');
       userprofile.classList.remove('api-show');
      
    })

})();
// method type 1 
// http request 
const requestApi = new XMLHttpRequest
requestApi.open("GET","https://dummyjson.com/users");
requestApi.send();
requestApi.onload=()=>{
console.log(requestApi);
if(requestApi.status===200){
    console.log('request is successful');
    let response = JSON.parse(requestApi.response);
    console.log(response)
    console.log(requestApi.response);
}
else{
    console.log('request is failed!!');
}
}
// method type 2 
// fetch 
// method 1 
fetch('https://dummyjson.com/users').
then(response=>{
   return response.json();
})
.then(json=>{
    console.log(json)
})
// method 2 
const  getUsers= async ()=>{
 let response = await fetch('https://dummyjson.com/users');
 let data = await response.json();
 return data; 
}
getUsers().then(response=>{
  console.log(response);
});
// method type 3 
// axios data fetch 
axios.get('https://dummyjson.com/users')
.then(response=>{
    console.log(response.data);
},fetchError=>{
    console.log(fetchError);
});
// method type 4 
//jquery method to fetch api 
$(document).ready(function(){
$.ajax({
    url:'https://dummyjson.com/users',
    type:"GET",
    success:response=>{
            console.log(response)
    },
    error:error=>{
        console.log(error)
    }
})
})