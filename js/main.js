import {goods} from '../goods.js' 

let cart = {}

let cards = document.querySelector('.cards')

function goodsOut() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) 
    goods.map(item => {
        let isItemInCart = cartItems.hasOwnProperty(item.id)
        let quantity = cartItems[item.id] || 0
        cards.innerHTML +=
            `<div class="card">
                <p>id: ${item.id} category: ${item.category}</p>
                <h3 class="card-title">${item.name}</h3>
                <p>${item.description}</p>
                <img class="img" src="images/${item.img}" alt="">
                <h4>${item.cost} рублей</h4>
                
                ${isItemInCart ? 
                    `<button disabled class="button button-primary-text add-to-cart" data-id=${item.id}>В корзине </button><span>&nbsp; ${quantity} шт</span>` :
                    '<button class="button button-primary-text add-to-cart" data-id="' + item.id + '">Купить</button>'}
             </div>`
            
    })
    
    buttonLock()
}

console.log('функция goodsOut()')
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


function buttonLock() {
    document.querySelectorAll('.add-to-cart')
    .forEach(btn => {
        btn.addEventListener('click', function() {
            let id = this.getAttribute("data-id")
            console.log('id button:', id)

            // тут беру id с локол сторожа
            let stor = JSON.parse(localStorage.getItem('cart')) 
            console.log(stor) // {"1":10,"2":5,"3":3}

            for (let cartId in stor) {
                 if (id == cartId) {
                     this.setAttribute('disabled', '')
                     this.textContent = 'В корзине'
                     console.log('функция работает buttonLock()')
                     // тут вывести кол-во товара
                 }
            }
        })
        
    })
    
}




