const reset = document.getElementById("#reset");
console.log(reset);
const price = document.getElementsByClassName("price");
reset.addEventListener("click",function(){
    price.value="";
})