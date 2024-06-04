import {goods} from '../goods.js' 
let cart = {}


let cartOut = document.querySelector('.cart-out')

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        showCart()
    } 
    else {
        cartOut.innerHTML = `<div class="alert">Корзина пуста</div>`
    }
}
loadCart()



// function showCart() {
//     if (!isEmpty(cart)) {
//         cartOut.innerHTML = `<div class="alert">Корзина пуста</div>`
//     } else {
//         let gds = goods
//         let out = ''
//         for (let id in cart) {
//             out += `<div class="cart">`
//                 out += `<button class="del mini-btn" data-id="${id}">&#10060;</button>`
//                 out += `<img src="images\\${gds[id].img}" >` // TypeError: Cannot read properties of undefined (reading 'img')
//                 out += `id: ${gds[id].id} | `
//                 out += `${gds[id].name}`
//                 out += `<h5 class="cost">${gds[id].cost} руб</h5>`
//                 out += `<button class="minus mini-btn" data-id="${id}">&ndash;</button>`
//                 out += cart[id]+' шт';
//                 out += `<button class="plus mini-btn" data-id="${id}">&#43;</button>`
//                 out += `<h5 class="cost">${cart[id] * gds[id].cost} руб</h5>`
//             out += `</div>`
//            console.log(gds[0]) // {id: '1', name: 'Ролик с кнопкой (одно колесо)', cost: '80', description: 'Ролики дверные для душевой кабины с кнопкой, одно колесо.', img: 'rolic1.jpg', …}
//            console.log(gds[0].id)
//         }
//         cartOut.innerHTML = out
//         delGoods()
//         minusGoods()
//         plusGoods()
//     }
// }



function showCart() {
    if (!isEmpty(cart)) {
        cartOut.innerHTML = `<div class="alert">Корзина пуста</div>`
    } else {
        let gds = goods
        let out = ''
        for (let id in cart) {
            let itemId = parseInt(id)
            out += `<div class="cart">`
                out += `<button class="del mini-btn" data-id="${itemId}">&#10060;</button>`
                out += `<img src="images\\${gds[itemId].img}" >` 
                out += `id: ${gds[itemId].id} | `
                out += `${gds[itemId].name}`
                out += `<h5 class="cost">${gds[itemId].cost} руб</h5>`
                out += `<button class="minus mini-btn" data-id="${itemId}">&ndash;</button>`
                out += cart[itemId]+' шт';
                out += `<button class="plus mini-btn" data-id="${itemId}">&#43;</button>`
             // убедитесь, что элемент корзины существует, прежде чем пытаться прочитать его свойство стоимости
                if (gds[itemId]) {
                    out += `<h5 class="cost">${cart[itemId] * gds[itemId].cost} руб</h5>`
                } else {
                    out += `<h5 class="cost">${cart[itemId]} руб</h5>`
                }
            out += `</div>`
        }
        cartOut.innerHTML = out
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
