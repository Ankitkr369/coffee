// Add the coffee to local storage with key "coffee"

const url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    append(res.menu.data)
    console.log(res);
})
.catch(function(err){
    console.log(err)
})

var arr=[]

function append(data){

data.map(function(elem){

var count=0;
let  div=document.createElement('div')
let image =document.createElement('img')
image.src=elem.image;
let type=document.createElement("h3")
type.innerText=elem.title
let price=document.createElement("h3")
price.innerText=elem.price

let btn=document.createElement("button")
btn.innerText="Add To Bucket"

btn.addEventListener("click",function(){
   let count=0
   document.getElementById("total").innerText=count+1
    addtobucket(elem,);
    
})
div.append(image,type,price,btn)
document.getElementById("items").append(div)
})





}

function addtobucket(elem,){
    

    arr.push(elem)
    localStorage.setItem("coffee",JSON.stringify(arr))
}



