let div = document.createElement('div');
div.setAttribute('class','profile-div')
let profile_img = document.createElement('img');
profile_img.setAttribute('src','./images/profile/leet-code.png');
profile_img.style.opacity = "0"
div.appendChild(profile_img)
let profile = document.getElementById('profile-img');
profile.append(profile_img);

let hacker_rank = document.getElementById('hacker-rank');
hacker_rank.addEventListener('mouseenter',()=>{
    profile_img.src= './images/profile/hacker-rank.png'
    profile_img.style.opacity = "1"
})
hacker_rank.addEventListener('mouseout',()=>{
    profile_img.style.opacity = "0"
})

// hacker earth
let hacker_earth = document.getElementById('hacker-earth');
hacker_earth.addEventListener('mouseenter',()=>{
    profile_img.src= './images/profile/hacker-earth.png'
    profile_img.style.opacity = "1"
})
hacker_earth.addEventListener('mouseout',()=>{
    profile_img.style.opacity = "0"
})

// leet-code
let leet_code= document.getElementById('Leetcode');
leet_code.addEventListener('mouseenter',()=>{
    profile_img.src= './images/profile/leet-code.png'
    profile_img.style.opacity = "1"
})
leet_code.addEventListener('mouseout',()=>{
    profile_img.style.opacity = "0"
})

//code-chef
let codechef= document.getElementById('Code-chef');
codechef.addEventListener('mouseenter',()=>{
    profile_img.src= './images/profile/code-chef.png'
    profile_img.style.opacity = "1"
})
codechef.addEventListener('mouseout',()=>{
    profile_img.style.opacity = "0"
})

//geeksforgeeks
let gfg= document.getElementById('Geeks-for-geeks');
gfg.addEventListener('mouseenter',()=>{
    profile_img.src= './images/profile/Geeks-for-geeks.png'
    profile_img.style.opacity = "1"
})
gfg.addEventListener('mouseout',()=>{
    profile_img.style.opacity = "0"
})
