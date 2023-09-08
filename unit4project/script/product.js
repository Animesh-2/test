var adminBtn = document.querySelector("#adminBtn").addEventListener("click" , function () {
    window.location = "index.html"
} )
var cartBtn = document.querySelector("#cartBtn").addEventListener("click" , function () {
    window.location = "cart.html"
} )

var data= JSON.parse(localStorage.getItem("data"))

console.log(data)

    
    data.forEach(function (ele ,index){
    
    var div= document.createElement("div")
    var name= document.createElement("h3")
    var price= document.createElement("h4")
    var desc= document.createElement("p")
    var img= document.createElement("img")
    var btn= document.createElement("button")

    btn.innerText= "Delete"
    btn.addEventListener("click",function(){

        deleteFun(index);
    })

    name.innerHTML = ele.name
    price.innerHTML= ele.price
    desc.innerHTML = ele.desc
    img.src = ele.url

    div.append(name, price, desc, img,btn)

    var parent= document.getElementById("productDiv")
    parent.append(div);

    });

function deleteFun(index){

    data.splice(index,1)
    console.log(data)
    localStorage.setItem("data",JSON.stringify(data))
    window.location.reload()
}
