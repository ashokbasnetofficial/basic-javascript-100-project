const btn = document.getElementById('btn');
const input = document.getElementById('text');
const output = document.getElementById('msgoutput');
function getMessage(){
  let msg = input.value.trim();
  
 return msg;
}
function showMessage(){
  
  let msg = getMessage();
  console.log(msg.length)
  if(msg.length===0){
    output.innerHTML="Hello!"
  }
  else{
  output.innerHTML=getMessage();

  } 

}

btn.addEventListener('click',showMessage);
input.addEventListener('input',getMessage)


