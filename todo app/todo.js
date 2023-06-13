const inputbox=document.getElementById('input');
const listcont=document.getElementById('list-cont');
 

function addtask()
{
    if(inputbox.value==='')
    {
        alert("write something into list");
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcont.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';

    
}
listcont.addEventListener("click",function(e)
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
    }
},false)
