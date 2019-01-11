

const button = document.getElementById("click");
const animalsNames = ['the Tiger','the Spider', 'the Wolf', 'the Elephant', 'the Crow', 'the Owl', 'the Hummingbird', 'the Hawk', 'the Grasshopper', 'the Eagle'];

document.getElementById("click").addEventListener("click", function (){
    const random = Math.floor(Math.random()*animalsNames.length);
    document.getElementById("spirit").innerHTML = document.getElementById('input').value + " - " +animalsNames[random];
    button.innerHTML="Get a new spirit animal!"
})



 
