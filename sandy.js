const maintag = document.getElementById("maincontainer");
const sidebar = document.getElementById("mySidebar");
const closeToggle = document.getElementById("toggleClose");
const openToggle = document.getElementById("toggleOpen");
const mainside = document.getElementById("mainbar");


function openNav(){
    openToggle.addEventListener("click", ()=>{
         sidebar.style.width = "200px";
         maintag.style.marginLeft = "200px";
         mainside.style.backgroundColor = "hsla(0, 0%, 0%, 0.5)";
    })
} 
openNav();

function closeNav(){
    
        sidebar.style.width = "0px";
        maintag.style.marginLeft = "0px";
        mainside.style.backgroundColor = "white" 
} 

// carousel
const shoeimage = document.getElementById("shoe1");
const prevbtn = document.getElementById("prevtoggle");
const nextbtn = document.getElementById("nexttoggle");

// carousel for products
const carousel = [

    {
        id: 4,
        image: "images/image-product-1.jpg",
    },

    {
        id: 1,
        image: "images/image-product-2.jpg",
    },

    {
        id: 2,
        image: "images/image-product-3.jpg",   
    },

    {
        id: 3,
        image: "images/image-product-4.jpg",
    },

];

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded",()=>{
    showShoe(currentItem)
})

// show next product
function showShoe(){
    const shoeitem = carousel[currentItem];
    shoeimage.src = shoeitem.image;
}

nextbtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem>carousel.length-1){
        currentItem = 0;
    }
    showShoe()
})

prevbtn.addEventListener("click", ()=>{
    currentItem--;
    if(currentItem<0){
        currentItem = carousel.length;
    }
    showShoe()
})

// desktop size functionality

const addition = document.getElementById("plus");
const subtract = document.getElementById("minus");
const number = document.getElementById("numzero");
const operate = document.querySelectorAll(".operator");
const shoe = document.getElementById("shoe1");
let count = 0;

number.innerHTML = count;

const increment = (shoe)=>{
    // let selectedItem = shoe
    count++;
    number.innerHTML = count;
    console.log(shoe)
}

const decrement = (shoe)=>{
    count--;
    number.innerHTML = count;
    console.log(shoe)
}

addition.addEventListener("click", increment);
subtract.addEventListener("click", decrement);