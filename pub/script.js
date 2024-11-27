'use strict';

const itemsList = document.getElementById('items-list');
const addItemButton = document.getElementById('add-item');
const priceInput = document.getElementById('price');
const categorySelect = document.getElementById('category');
const totalPrice = document.getElementById('total-price');

const categoriesPrices = {
    'hamburger': 50,
    'potato': 30,
    'drinks': 20,
    'meat': 100
};

const categoriesImages = { 
    'hamburger': './images/hamburger.jpg', 
    'potato': './images/potato.jpg', 
    'drinks': './images/drinks.jpg', 
    'meat': './images/meat.jpg' 
}

categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    priceInput.value = categoriesPrices[selectedCategory];
});

addItemButton.addEventListener('click', () => {
    const priceValue = priceInput.value;
    const categoryValue = categorySelect.value;
    const imageUrl = categoriesImages[categoryValue];

    if (priceValue && categoryValue) {
        const itemblock = document.createElement('li');
        itemblock.classList.add('p-2', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'mb-2');

        const itemImage = document.createElement('img');
        itemImage.src = imageUrl;
        itemImage.alt = categoryValue;
        itemImage.classList.add('h-12', 'w-12', 'rounded-full');
    }

    console.log('click');
})