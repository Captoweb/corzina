let cat = [ 
    {
        "catName" : "Ролики<br> для душевых кабин",
        "catImg" : "roliki_menu.jpg",
        "href" : "roliki"
    },
    {
        "catName" : "Фум лента",
        "catImg" : "fum.png",
        "href" : "fum"
    },
    {
        "catName" : "Манжета переходная",
        "catImg" : "adapter.jpg",
        "href" : "rezina"
    },
    {
        "catName" : "Кольца на алюминиевый бидон",
        "catImg" : "bidon.jpg",
        "href" : "bidon"
    },
    {
        "catName" : "Смазки и герметики",
        "catImg" : "germetik.jpg",
        "href" : "smazka"
    },
    {
        "catName" : "Хомуты ремонтные",
        "catImg" : "homuty.png",
        "href" : "homuty"
    },
    {
        "catName" : "Крепления крышки унитаза",
        "catImg" : "krepezh.jpg",
        "href" : "krepezh"
    },
    {
        "catName" : "Прокладки паронитовые",
        "catImg" : "paronit.jpg",
        "href" : "paronit"
    },
    {
        "catName" : "Прокладки резиновые",
        "catImg" : "procladki_rezina.jpg",
        "href" : "procladki_rezina"
    },
    {
        "catName" : "Прокладки силиконовые",
        "catImg" : "silikon.jpg",
        "href" : "silikon"
    },
    {
        "catName" : "Прокладки на Американку",
        "catImg" : "amerikanka.png",
        "href" : "amerikanka"
    },
    {
        "catName" : "Прокладки на смеситель",
        "catImg" : "procladki_smesitel.jpg",
        "href" : "procladki_smesitel"
    }
];


function goodsOut() {
    // вывод товаров на главную страницу
    //let goods = JSON.parse(data);
    //goods = JSON.stringify(data);
    //console.log(data);
	
    let out = '';

    for (let key in cat) {
       // console.log(cat);
        out += `<a href="${cat[key].href}">`;
        out +='<div class="home-menu-card">';
        out +=`<h3 class="home-menu-name">${cat[key].catName}</h3>`;
        out +=`<img class="home-menu-img" src="images/category/${cat[key].catImg}" alt="category">`;
        out +='</div>';
        out += `</a>`;
    }
    document.querySelector('.home-menu').innerHTML = out;
   
}

goodsOut()