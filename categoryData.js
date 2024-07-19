const CategoryCards = [
    {
        name:"Order food online",
        image: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*"
    },
    {
        name:"Go out for a meal",
        image: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*"
    },
    {
        name:"Nightlife & Clubs",
        image: "https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*"
    },
]

function renderCategoryCards() {
    const container = document.querySelector('.container-card');
    container.innerHTML = ''; 
    CategoryCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'order-cat';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" />
           <div class="order-title-bg">
                    <p class="order-title">Order Food Online</p>
                </div>
        `;
        container.appendChild(cardElement);
    });
}

document.addEventListener('DOMContentLoaded', renderCategoryCards);