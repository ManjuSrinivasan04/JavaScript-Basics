//Single Element
/*console.log(document.getElementById('my-form'));
//console.log(window.alert('Hi'));
console.log(document.querySelector('.container'));

//Multiple Element

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items=document.querySelectorAll('.item');
items.forEach((item)=>console.log(item));

const ul=document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Manju';
//ul.lastElementChild.innerHTML='<h1>Welcome</h1>';

const btn=document.querySelector('.btn');
btn.style.background='blue';

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log('click');
   // console.log(e);
    console.log(e.target.id);

    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
   // document.querySelector('.items').lastElementChild.innerHTML='<h1>Hi</h1>';
});
*/



const myform=document.querySelector('#my-form');
const name=document.querySelector('#name');
const emails=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
    e.preventDefault();
    console.log(name);
if(name.value===''|| emails.value==='')
{
    //alert('Enter name and email');
    msg.classList.add('error');
    msg.innerHTML='plese enter all fields';
    setTimeout(()=>msg.remove(), 3000);
}
else{
    
    console.log('sucess');
}
}