import {goods} from '../goods.js' 
//console.log(goods)
//console.log(goods[0]) // работает
let cart = {}

let cards = document.querySelector('.cards')

function goodsOut() {
    goods.map(item => {
        // куда вывести
        cards.innerHTML +=
            `<div class="card">
                <p>id: ${item.id} category: ${item.category}</p>
                <h3 class="card-title">${item.name}</h3>
                <p>${item.description}</p>
                <img class="img" src="images/${item.img}" alt="">
                <h4>${item.cost} рублей</h4> 
                <button class="button button-primary-text add-to-cart" data-id="${item.id}">Купить</button>
             </div>
            `
    })
}

goodsOut() 


 
function addToCart() {
    document.querySelectorAll('.add-to-cart')
    .forEach(btn => {
      btn.addEventListener('click', function() {
          let id = this.getAttribute("data-id")
          //console.log(id)
          if (cart[id] == undefined) {
            cart[id] = 1
            this.setAttribute('disabled', '')
            this.textContent = 'В корзине'
          }
          else {
            cart[id]++
          }
          showMiniCart()
          saveCart()
      })
   })
}
addToCart()
  

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
}


function showMiniCart() {
    let out = ''
        for (let key in cart) {
            out += key + ' -- '+ cart[key] + 'шт' + ' | '
           // console.log(out)
        }
        document.querySelector('.mini-cart').innerHTML = out  
}


function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        showMiniCart()
    }
}
loadCart()



