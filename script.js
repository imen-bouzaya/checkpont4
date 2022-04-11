var buttonsPlus=document.getElementsByClassName("plus")
var buttonsMinus=document.getElementsByClassName("minus")
var buttonsLike=document.getElementsByClassName("like")
var buttonsDelete=document.getElementsByClassName("delete")
var total=document.getElementById("total")

for (let i = 0; i < buttonsDelete.length; i++) {
    buttonsDelete[i].addEventListener('click',suppRow)
}
for (let i = 0; i < buttonsPlus.length; i++) {
    buttonsPlus[i].addEventListener('click',adding)
}
for (let i = 0; i < buttonsMinus.length; i++) {
    buttonsMinus[i].addEventListener('click',minus)
}
for (let i = 0; i < buttonsLike.length; i++) {
    buttonsLike[i].addEventListener('click',like)
}

function suppRow(event) {
  var cible =event.target
  var tr = cible.parentElement.parentElement.parentElement.parentElement
  tr.remove()
  sum()   
}
function like(event) {
    var cible = event.target
    console.log(cible)
  if (cible.style.color=="red") {
        cible.style.color=""
    } else cible.style.color="red"
}
function sum(){
    var prices = document.querySelectorAll('.price')
    var totalTag = document.getElementById('total')
    var total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerHTML)
        console.log(total)
    }
    totalTag.innerHTML=total
}
function adding(event) {
    var cible=event.target;
    var x=cible.parentElement;
    var p=x.querySelector("p")
    quantity=Number(p.innerHTML)
    quantity++;
    p.innerHTML=quantity;
    var y = x.parentElement.parentElement;
    console.log(y)
    var prix=y.querySelector(".unitPrice")
    var unitPrice=Number(prix.innerHTML)
    var price = y.querySelector(".price")
    var totalPrice=Number(price.innerHTML)
    totalPrice=unitPrice*quantity
    price.innerHTML=totalPrice
sum()
}
function minus(event) {
    var cible=event.target;
    var cible=event.target;
    var x=cible.parentElement;
    var p=x.querySelector("p")
    quantity=Number(p.innerHTML)
    if (quantity>0) {
        quantity--
    }
    p.innerHTML=quantity;
    var y = x.parentElement.parentElement;
    console.log(y)
    var prix=y.querySelector(".unitPrice")
    console.log(prix)
    var unitPrice=Number(prix.innerHTML)
    var price = y.querySelector(".price")
    var totalPrice=Number(price.innerHTML)
    totalPrice=unitPrice*quantity
    price.innerHTML=totalPrice
sum()
}
function total(event) {
    
}