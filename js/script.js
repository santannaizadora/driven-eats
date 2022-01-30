const mainDish = [
    {
        id: 1,
        type: 'dish',
        image: 'img/frango_yin_yang.png',
        name: 'Frango Yin-Yang',
        price: 19.90,
        description: 'Um pouco de batata, um pouco de salada'
    },
    {
        id: 2,
        type: 'dish',
        image: 'img/strogonoff.jpg',
        name: 'Strogonoff',
        price: 20.90,
        description: 'Strogonoff com arroz e batata palha'
    },
    {
        id: 3,
        type: 'dish',
        image: 'img/churrasco.jpg',
        name: 'Espetinho de carne',
        price: 5.90,
        description: 'Espetinho na brasa'
    },
];
const drinks = [
    {
        id: 4,
        type: 'drink',
        image: 'img/coquinha_gelada.png',
        name: 'Coca',
        price: 5.50,
        description: 'Lata 350ml'
    },
    {
        id: 5,
        type: 'drink',
        image: 'img/fanta.jpg',
        name: 'Fanta',
        price: 4.90,
        description: 'Lata 350ml'
    },
    {
        id: 6,
        type: 'drink',
        image: 'img/pepsi.jpg',
        name: 'Pepsi',
        price: 5.50,
        description: 'Lata 350ml'
    },
];
const desserts = [
    {
        id: 7,
        type: 'dessert',
        image: 'img/cookie.jpeg',
        name: 'Cookie',
        price: 9.90,
        description: 'Cookie de chocolate'
    },
    {
        id: 8,
        type: 'dessert',
        image: 'img/pudim.png',
        name: 'Pudim',
        price: 12.90,
        description: 'Pudim de leite'
    },
    {
        id: 9, type: 'dessert',
        image: 'img/sorvete.jpg',
        name: 'Sorvete',
        price: 0.99,
        description: 'sorvete de morango'
    },
];

const pedido = {
    pratoPrincipal: null,
    bebida: null,
    sobremesa: null
}


$(document).ready(function () {
    loadProducts(mainDish, 'carrocel-prato-principal');
    loadProducts(drinks, 'carrocel-bebidas');
    loadProducts(desserts, 'carrocel-sobremesas');
});

const loadProducts = (products, idElement) => {

    let contentProducts = "";
    products.forEach(item => {
        contentProducts +=
            `<div id="${item.id}" class="produto produto-${item.type}" onclick="selectProducts('${item.type}', ${item.id})" data-identifier="food-option" >   
                <img src="${item.image}">
                <h4 data-identifier="food-title"> ${item.name}</h4>
                <p class="descricao">${item.description}</p>
                <p class="preco" data-identifier="food-price">R$ ${parsePriceToString(item.price)}</p>
                <ion-icon class="escondido" name="checkmark-circle"></ion-icon> 
            </div>`;
    });

    document.getElementById(idElement).innerHTML = contentProducts;
};


const selectProducts = (typeProduct, idProduct) => {
    const selecionado = document.querySelector(`.${typeProduct} .selecionado`);
    let check;

    if (selecionado !== null) {
        check = document.querySelector(`.${typeProduct} .selecionado ion-icon`)
        selecionado.classList.remove("selecionado");
        check.classList.add("escondido");
    }

    const selectedItem = document.getElementById(idProduct);
    selectedItem.classList.add("selecionado");
    check = document.querySelector(`.${typeProduct} .selecionado ion-icon`)
    check.classList.remove("escondido");

    addProductToOrder(typeProduct, idProduct);

    habilitarConfirmar();
};

const addProductToOrder = (typeProduct, idProduct) => {
    let product;

    switch (typeProduct) {
        case 'dish':
            product = mainDish.find(item => item.id === idProduct);
            pedido.pratoPrincipal = product;
            break;
        case 'drink':
            product = drinks.find(item => item.id === idProduct);
            pedido.bebida = product;
            break;
        case 'dessert':
            product = desserts.find(item => item.id === idProduct);
            pedido.sobremesa = product;
            break;
    };

};

const fecharPedido = () => {

    const nome = prompt("Qual seu nome?");
    const address = prompt("Informe seu endereço:");
    const orderText = `Olá, gostaria de fazer o pedido:
- Prato: ${pedido.pratoPrincipal.name}
- Bebida: ${pedido.bebida.name}
- Sobremesa: ${pedido.sobremesa.name}
Total: R$ ${(pedido.pratoPrincipal.price + pedido.bebida.price + pedido.sobremesa.price).toFixed(2)}

Nome: ${nome}
Endereço: ${address}
`

    const uri = encodeURIComponent(orderText);
    window.open(`https://wa.me/5534999999999?text=${uri}`)
};

const habilitarConfirmar = () => {
    const selecionados = document.querySelectorAll(".selecionado");

    if (selecionados.length === 3) {
        const botaoDesabilitado = document.querySelector(".botao-desabilitado");
        const botaoHabilitado = document.querySelector(".botao-habilitado");
        botaoDesabilitado.classList.add("escondido");
        botaoHabilitado.classList.remove("escondido");
    }
};

const confirmarPedido = () => {
    const listaPedido = document.getElementById('listaPedido');

    listaPedido.innerHTML = `
        <div> <span>${pedido.pratoPrincipal.name}</span>  <span>${parsePriceToString(pedido.pratoPrincipal.price)}</span> </div>
        <div> <span>${pedido.bebida.name}</span>    <span>${parsePriceToString(pedido.bebida.price)}</span> </div>
        <div> <span>${pedido.sobremesa.name}</span>  <span> ${parsePriceToString(pedido.sobremesa.price)}</span></div>
        
        <div><span class="bold">TOTAL</span>  <span class="bold">R$  ${parsePriceToString((pedido.pratoPrincipal.price + pedido.bebida.price + pedido.sobremesa.price))}</span></div>
    `;

    let janela = document.querySelector(".confirmar-pedido");
    janela.classList.remove("escondido");
};

const cancelar = () => {
    let janela = document.querySelector(".confirmar-pedido");
    janela.classList.add("escondido");
}

const parsePriceToString = (value) => {
    return value.toFixed(2).toString().replace(".", ",");
}