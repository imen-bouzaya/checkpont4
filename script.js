var buttonsPlus=document.getElementsByClassName("plus")
var buttonsMinus=document.getElementsByClassName("minus")
var buttonsLike=document.getElementsByClassName("like")
var buttonsDelete=document.getElementsByClassName("delete")
var total=document.getElementById("total")
console.log(buttonsDelete)
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
//   var i = r.parentNode.parentNode.rowIndex;
  var tr = cible.parentElement.parentElement.parentElement.parentElement
  var table = cible.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
console.log(tr)
var r =tr.rowIndex
console.log(r)
  table.deleteRow(r);
//   console.log(cible)
}
function like(event) {
    var cible = event.target
    console.log(cible)
    var i = cible.parentElement.querySelector("i")
    // i.style.color="red"
  if (i.style.color=="red") {
        i.style.color=""
    } else i.style.color="red"
}
function adding(event) {
    var cible=event.target;
    var x=cible.parentElement;
    var p=x.querySelector("p")
    quantity=Number(p.innerHTML)
    quantity++;
    p.innerHTML=quantity;
    // console.log(quantity)
    var y = x.parentElement.parentElement;
    console.log(y)
    var prix=y.querySelector(".unitPrice")
    // console.log(prix)
    var unitPrice=Number(prix.innerHTML)
    var price = y.querySelector(".price")
    var totalPrice=Number(price.innerHTML)
    totalPrice=unitPrice*quantity
    price.innerHTML=totalPrice
    var total1=Number(total.innerHTML)
    var tousLesPrix=document.getElementsByClassName("price")
   var tousLesPrixPrix =[Number(tousLesPrix[0].innerHTML)]
   var sum=0
   for (let i = 0; i < tousLesPrix.length; i++) {
       tousLesPrixPrix[i]=Number(tousLesPrix[i].innerHTML)
       sum+=tousLesPrixPrix[i]
       total1=sum
   }
//    Number(tousLesPrix.innerHTML)
    console.log(tousLesPrixPrix);
    total.innerHTML=total1
}
function minus(event) {
    var cible=event.target;
    // console.log(cible)
    var cible=event.target;
    var x=cible.parentElement;
    var p=x.querySelector("p")
    quantity=Number(p.innerHTML)
    if (quantity>0) {
        quantity--
        // console.log(quantity)
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
    var total1=Number(total.innerHTML)
    var tousLesPrix=document.getElementsByClassName("price")
   var tousLesPrixPrix =[Number(tousLesPrix[0].innerHTML)]
   var sum=0
   for (let i = 0; i < tousLesPrix.length; i++) {
       tousLesPrixPrix[i]=Number(tousLesPrix[i].innerHTML)
       sum+=tousLesPrixPrix[i]
       total1=sum
   }
//    Number(tousLesPrix.innerHTML)
    console.log(tousLesPrixPrix);
    total.innerHTML=total1
}
function total(event) {
    
}