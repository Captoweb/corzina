import {goods} from '../goods.js' 
let cart = {}


let cartOut = document.querySelector('.cart-out')
let totalOut = document.querySelector('.total-out')

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        showCart()
    } 
    else {
        cartOut.innerHTML = `<div class="alert">Корзина пуста</div>`
        totalOut.innerHTML = ''
    }
}
loadCart()



function showCart()  {
    
    if (!isEmpty(cart)) {
        cartOut.innerHTML = `<div class="alert">Корзина пуста</div>` 
        totalOut.innerHTML = ''
    } else {
    let out = ''
    let totalCost = 0
    //let gds = goods
    for (let idCart in cart) {
        // console.log(idCart) // id
        // console.log(cart[idCart]) // кол-во
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].id == idCart) {
                out += `<div class="cart">`
                    out += '<div class="left-wrapper">'
                       
                        out += `<div class="helper">id: ${idCart}</div>`
                        out += `<img src="images\\${goods[i].img}" >`
                        out += '<div class="name-wrapper">'
                            out += `<p>${goods[i].name}</p> `
                            out += `<h5 class="cost"><span>Цена за 1 шт: </span>${goods[i].cost} руб</h5>`
                        out += '</div>'
                    out += '</div>'
                    out += '<div class="button-wrapper">'
                         out += `<button class="minus mini-btn" data-id="${idCart}">&ndash;</button>`
                        out += cart[idCart]+' шт';
                        out += `<button class="plus mini-btn" data-id="${idCart}">&#43;</button>`
                        out += `<h5 class="totalCost">${Math.round(cart[idCart] * goods[i].cost)} руб</h5>`
                        totalCost += Math.round(cart[idCart] * goods[i].cost)
                        out += `<button class="del mini-btn" data-id="${idCart}">&times;</button>`
                    out += '</div>'
                out += `</div>`
            }
        } 
    }

    cartOut.innerHTML = out
    totalOut.innerHTML = 'Сумма заказа: ' + totalCost + ' руб'
    delGoods()
    minusGoods()
    plusGoods()
    }
}


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function delGoods() {
    document.querySelectorAll('.del')
    .forEach(btn => {
      btn.addEventListener('click', function() {
          let id = this.getAttribute("data-id")
          //console.log(id) // id получаю
            delete cart[id]
            saveCart()
            showCart()
        })
    })
}

function minusGoods() {
    document.querySelectorAll('.minus')
    .forEach(btn => {
      btn.addEventListener('click', function() {
          let id = this.getAttribute("data-id")
          console.log(id) // id получаю
          if (cart[id] >1) {
              cart[id]--
          } else {
            delete cart[id]
          }
            saveCart()
            showCart()
        })
    })
}

function plusGoods() {
    document.querySelectorAll('.plus')
    .forEach(btn => {
      btn.addEventListener('click', function() {
          let id = this.getAttribute("data-id")
          console.log(id) // id получаю
              cart[id]++
            saveCart()
            showCart()
        })
    })
}

// проверка на пустоту объекта
function isEmpty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return true
        } else {
            return false
        }
    }
}
