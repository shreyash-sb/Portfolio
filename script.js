const words=["Full Stack Developer","Problem Solver","Tech Enthusiast"];
let i=0,j=0,current="",deleting=false;

function type(){
current=words[i];
document.querySelector(".typing").textContent=current.substring(0,j);

if(!deleting){
j++;
if(j>current.length){
deleting=true;
setTimeout(type,1000);
return;
}
}else{
j--;
if(j===0){
deleting=false;
i=(i+1)%words.length;
}
}

setTimeout(type,deleting?50:100);
}

type();

document.getElementById("form").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent");
});
