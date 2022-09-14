let short =document.getElementById('short');
let medium = document.getElementById('medium');
let long = document.getElementById('large');
let detail = document.getElementById('detail');
let detail_box = document.getElementById('detail-box')


short.addEventListener('mouseenter',()=>{
    short.innerHTML = "Short";
})
short.addEventListener('mouseout',()=>{
    short.innerHTML = "S";
})

medium.addEventListener('mouseenter',()=>{
    medium.innerHTML = "Medium";
})
medium.addEventListener('mouseout',()=>{
    medium.innerHTML = "M";
})

long.addEventListener('mouseenter',()=>{
    long.innerHTML = "Long";
})
long.addEventListener('mouseout',()=>{
   long.innerHTML = "L";
})




short.addEventListener('mouseenter',()=>{
    detail.textContent = 'I\'m a programmer and I\'m learning Web Developement';  
    detail_box.style.display = 'block';  
})
short.addEventListener('mouseout',()=>{
    detail_box.style.display = 'none';  
})
medium.addEventListener('mouseover',()=>{
    detail.textContent = 'I\'m Anirudh Madhav kulkarni, I\'m Pursuing B.E From Bangalore Institute of Technology';
    detail_box.style.display = 'block';  
})
medium.addEventListener('mouseout',()=>{
    detail_box.style.display = 'none';  
})

long.addEventListener('mouseover',()=>{
    detail.textContent = 'I\'m Anirudh Madhav kulkarni, I\'m Pursuing B.E From Bangalore Institute of Technology in the field of Electronics and Instrumentation, I\'m currently learning React.js, I aspire to become a Full-Stack Developer, My key-skills are HTML5, CSS3, JavaScript ES6, MySQL, C programming, Java Programming, Python 3.6';
    detail_box.style.display = 'block';  
})
long.addEventListener('mouseout',()=>{
    detail_box.style.display = 'none';  
})


// creating image and appending it in html



let image = document.createElement('img');
image.setAttribute('class','blank');
image.setAttribute('src','./images/project/guess-my-num.png');
image.style.opacity = "0"



let project_image = document.getElementById('project-img');
project_image.appendChild(image)

let proj_1 = document.getElementById('first-project');
proj_1.addEventListener('mouseenter',()=>{
    image.src='./images/project/guess-my-num.png';
    image.style.opacity = "1";let short =document.getElementById('short');
    let medium = document.getElementById('medium');
    let long = document.getElementById('large');
    let detail = document.getElementById('detail');
    let detail_box = document.getElementById('detail-box')
    
    
    short.addEventListener('mouseenter',()=>{
        short.innerHTML = "Short";
    })
    short.addEventListener('mouseout',()=>{
        short.innerHTML = "S";
    })
    
    medium.addEventListener('mouseenter',()=>{
        medium.innerHTML = "Medium";
    })
    medium.addEventListener('mouseout',()=>{
        medium.innerHTML = "M";
    })
    
    long.addEventListener('mouseenter',()=>{
        long.innerHTML = "Long";
    })
    long.addEventListener('mouseout',()=>{
       long.innerHTML = "L";
    })
    
    
    
    
    short.addEventListener('mouseenter',()=>{
        detail.textContent = 'I\'m a programmer and I\'m learning Web Developement';  
        detail_box.style.display = 'block';  
    })
    short.addEventListener('mouseout',()=>{
        detail_box.style.display = 'none';  
    })
    medium.addEventListener('mouseover',()=>{
        detail.textContent = 'I\'m Anirudh Madhav kulkarni, I\'m Pursuing B.E From Bangalore Institute of Technology';
        detail_box.style.display = 'block';  
    })
    medium.addEventListener('mouseout',()=>{
        detail_box.style.display = 'none';  
    })
    
    long.addEventListener('mouseover',()=>{
        detail.textContent = 'I\'m Anirudh Madhav kulkarni, I\'m Pursuing B.E From Bangalore Institute of Technology in the field of Electronics and Instrumentation, I\'m currently learning React.js, I aspire to become a Full-Stack Developer, My key-skills are HTML5, CSS3, JavaScript ES6, MySQL, C programming, Java Programming, Python 3.6';
        detail_box.style.display = 'block';  
    })
    long.addEventListener('mouseout',()=>{
        detail_box.style.display = 'none';  
    })
    
    
    // creating image and appending it in html
    
    
    
    let image = document.createElement('img');
    image.setAttribute('class','blank');
    image.setAttribute('src','./images/project/guess-my-num.png');
    image.style.opacity = "0"
    
    
    
    let project_image = document.getElementById('project-img');
    project_image.appendChild(image)
    
    let proj_1 = document.getElementById('first-project');
    proj_1.addEventListener('mouseenter',()=>{
        image.src='./images/project/guess-my-num.png';
        image.style.opacity = "1";
    })
    proj_1.addEventListener('mouseout',()=>{
        image.style.opacity = "0";
    })
    
    let proj_2 = document.getElementById('second-project');
    proj_2.addEventListener('mouseenter',()=>{
        image.src='./images/project/pig-game.png';
        image.style.opacity = "1";
    })
    proj_2.addEventListener('mouseout',()=>{
        image.style.opacity = "0";
    })
    
    let proj_3= document.getElementById('third-project');
    proj_3.addEventListener('mouseenter',()=>{
        image.src='./images/project/TO-DO.png';
        image.style.opacity = "1";
    })
    proj_3.addEventListener('mouseout',()=>{
        image.style.opacity = "0";
    })
    
    
    
    let proj_4 = document.getElementById('fourth-project');
    proj_4.addEventListener('mouseenter',()=>{
        image.src='./images/project/simple-calc.png';
        image.style.opacity = "1"
    })
    proj_4.addEventListener('mouseout',()=>{
        image.style.opacity = "0"
    })
    
    
    
    console.log(image)    
})
proj_1.addEventListener('mouseout',()=>{
    image.style.opacity = "0";
})

let proj_2 = document.getElementById('second-project');
proj_2.addEventListener('mouseenter',()=>{
    image.src='./images/project/pig-game.png';
    image.style.opacity = "1";
})
proj_2.addEventListener('mouseout',()=>{
    image.style.opacity = "0";
})

let proj_3= document.getElementById('third-project');
proj_3.addEventListener('mouseenter',()=>{
    image.src='./images/project/TO-DO.png';
    image.style.opacity = "1";
})
proj_3.addEventListener('mouseout',()=>{
    image.style.opacity = "0";
})



let proj_4 = document.getElementById('fourth-project');
proj_4.addEventListener('mouseenter',()=>{
    image.src='./images/project/simple-calc.png';
    image.style.opacity = "1"
})
proj_4.addEventListener('mouseout',()=>{
    image.style.opacity = "0"
})



console.log(image)





