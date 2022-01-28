const mainDish = [
    { 
        id: 1, image: 'img/frango_yin_yang 1.png', 
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada' 
    },
    { 
        id: 2, image: 'img/frango_yin_yang 1.png', 
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata' 
    },
    { 
        id: 3, image: 'img/frango_yin_yang 1.png', 
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada' 
    },
];
const drinks = [
    { 
        id: 1, image: 'img/coquinha_gelada 2.png', 
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada' 
    },
    { 
        id: 2, image: 'img/coquinha_gelada 2.png', 
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata' 
    },
    { 
        id: 3, image: 'img/coquinha_gelada 2.png', 
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada' 
    },
];
const desserts = [
    { 
        id: 1, image: 'img/pudim 2.png', 
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada' 
    },
    { 
        id: 2, image: 'img/pudim 2.png', 
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata' 
    },
    { 
        id: 3, image: 'img/pudim 2.png', 
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada' 
    },
];

const loadProducts = (products, idElement) => {

    let contentProducts = "";

    products.forEach(item => {
        contentProducts += 
        `<div id="${item.id}" class="produto check" data-identifier="food-option" >
            <img src="${item.image}">
            <h4 data-identifier="food-title"> ${item.name}</h4>
            <p class="descricao">${item.description}</p>
            <p class="preco" data-identifier="food-price">R$ ${item.price}</p>
            <ion-icon name="checkmark-circle"></ion-icon>
        </div>`;
    });

    document.getElementById(idElement).innerHTML = contentProducts;
}

$(document).ready(function () {
    loadProducts(mainDish, 'carrocel-prato-principal');
    loadProducts(drinks, 'carrocel-bebidas');
    loadProducts(desserts, 'carrocel-sobremesas');
});