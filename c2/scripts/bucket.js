// On clicking remove button the item should be removed from DOM as well as localstorage.
var item=JSON.parse(localStorage.getItem("coffee"))||[]
var total=0;
item.map(function(elem,index){
    let div= document.createElement("div");
    let image =document.createElement('img')
image.src=elem.image;
let type=document.createElement("h3")
type.innerText=elem.title
let price=document.createElement("h3")
price.innerText=elem.price
total+=elem.price
var remv=document.createElement("button");
remv.innerText="Remove Item"
remv.addEventListener("click",function(){
    removef(elem,index)
})
div.append(image,type,price,remv)

document.getElementById("bucket").append(div);
})


function removef(elem,index)
{

    item.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(item));
    window.location.reload()




}

document.getElementById("bucket_total").innerText=`${total}`