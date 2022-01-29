const mainDish = [
    {
        id: 1,
        type: 'dish',
        image: 'img/frango_yin_yang 1.png',
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada'
    },
    {
        id: 2,
        type: 'dish',
        image: 'img/frango_yin_yang 1.png',
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata'
    },
    {
        id: 3,
        type: 'dish',
        image: 'img/frango_yin_yang 1.png',
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada'
    },
];
const drinks = [
    {
        id: 4,
        type: 'drink',
        image: 'img/coquinha_gelada 2.png',
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada'
    },
    {
        id: 5,
        type: 'drink',
        image: 'img/coquinha_gelada 2.png',
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata'
    },
    {
        id: 6,
        type: 'drink',
        image: 'img/coquinha_gelada 2.png',
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada'
    },
];
const desserts = [
    {
        id: 7,
        type: 'dessert',
        image: 'img/pudim 2.png',
        name: ' Frango Yin-Yang Completo', price: '19,90',
        description: 'Um pouco de batata, um pouco de salada'
    },
    {
        id: 8,
        type: 'dessert',
        image: 'img/pudim 2.png',
        name: ' Frango Yin-Yang com batata', price: '9,90',
        description: 'Um pouco de batata'
    },
    {
        id: 9, type: 'dessert',
        image: 'img/pudim 2.png',
        name: ' Frango Yin-Yang com salada', price: '10,90',
        description: 'Um pouco de salada'
    },
];


$(document).ready(function () {
    loadProducts(mainDish, 'carrocel-prato-principal');
    loadProducts(drinks, 'carrocel-bebidas');
    loadProducts(desserts, 'carrocel-sobremesas');
});

const loadProducts = (products, idElement) => {

    let contentProducts = "";
    products.forEach(item => {
        contentProducts +=
            `<div id="${item.id}" class="produto" onclick="selectProducts('${item.type}',${item.id})" data-identifier="food-option" >   
                <img src="${item.image}">
                <h4 data-identifier="food-title"> ${item.name}</h4>
                <p class="descricao">${item.description}</p>
                <p class="preco" data-identifier="food-price">R$ ${item.price}</p>
                <ion-icon class="escondido" name="checkmark-circle"></ion-icon> 
            </div>`;
    });

    document.getElementById(idElement).innerHTML = contentProducts;
}


const selectProducts = (classePrato, idElement) => {
    const selecionado = document.querySelector(`.${classePrato} .selecionado`)
    if (selecionado !== null) {
        const check = document.querySelector(`.${classePrato} .selecionado ion-icon`)
        selecionado.classList.remove("selecionado");
        check.classList.add("escondido");
    } 
        const SelectedItem = document.getElementById(idElement);
        SelectedItem.classList.add("selecionado");
        const check = document.querySelector(`.${classePrato} .selecionado ion-icon`)
        check.classList.remove("escondido");
    

}