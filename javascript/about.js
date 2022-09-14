let name_text = document.getElementById('name')
let usn = document.getElementById('USN');
let dept = document.getElementById('Dept')
let College = document.getElementById('College');
let Address = document.getElementById('Address');



name_text.addEventListener('mouseover',()=>{
    name_text.innerHTML="Anirudh Madhav Kulkarni";
})
name_text.addEventListener('mouseout',()=>{
    name_text.innerHTML="Name";
})

usn.addEventListener('mouseenter',()=>{
    usn.innerHTML="1BI19EI006";
})
usn.addEventListener('mouseout',()=>{
    usn.innerHTML = "USN";
})

dept.addEventListener('mouseenter',()=>{
    dept.innerHTML="Electronics and Instrumentation";
})
dept.addEventListener('mouseout',()=>{
    dept.innerHTML="Departement";
})

College.addEventListener('mouseenter',()=>{
    College.innerHTML="Bangalore Institute Of Technology";
})
College.addEventListener('mouseout',()=>{
    College.innerHTML="College";
})


Address.addEventListener('mouseenter',()=>{
    Address.innerHTML = "No. 14, 1st B main 11th cross"
})
Address.addEventListener('mouseout',()=>{
    Address.innerHTML="Address";
})