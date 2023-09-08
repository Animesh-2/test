var adminBtn = document.querySelector("#productBtn").addEventListener("click" , function () {
    window.location = "product.html"
} )
var cartBtn = document.querySelector("#cartBtn").addEventListener("click" , function () {
    window.location = "cart.html"
} )

document.querySelector("form").addEventListener("submit", submitform)

var data= []

if(localStorage.getItem("data")){
    data= JSON.parse(localStorage.getItem("data"))
}

function submitform(e){

    e.preventDefault()
    var target= e.target

    var name= target.querySelector("#name").value
    var url= target.querySelector("#imgSrc").value
    var price= target.querySelector("#price").value
    var desc= target.querySelector("#desc").value

    var obj= {
        name, 
        url,
        price,
        desc
    }
    data.push(obj)

    localStorage.setItem("data", JSON.stringify(data))

    document.querySelector("form").reset();
}