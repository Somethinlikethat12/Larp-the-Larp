class card {
    static cards = []
    constructor(topimage, name, basedmg, baseblock, costtype, cost, descriptionFn){
        this.topimage = topimage;
        this.name = name;
        this.basedmg = basedmg;
        this.baseblock = baseblock;
        this.costtype = costtype;
        this.cost = cost;
        this.descriptionFn = descriptionFn; 
        card.cards.push(this);
    }

    get effecttext() {
        return this.descriptionFn ? this.descriptionFn(this) : "";
    }

    // Generates a fresh HTML node for this card
    createNode() {
        const cardDiv = document.createElement('div');
        cardDiv.className = `sts-card ${this.costtype}-card`;

        cardDiv.innerHTML = `
            <div class="card-top">
                <div class="card-cost">${this.cost}</div>
                <div class="card-title">${this.name}</div>
            </div>
            <div class="card-art">
                <img src="${this.topimage}" alt="${this.name}">
            </div>
            <div class="card-text">
                ${this.effecttext}
            </div>
        `;
        return cardDiv;
    }
}
function displayCards(container, cards, onClick = null) {
    container.innerHTML = "";

    cards.forEach(card => {
        const cardNode = card.createNode();

        if (onClick) {
            cardNode.addEventListener("click", () => {
                onClick(card);
            });
        }

        container.appendChild(cardNode);
    });
}

let bash = new card("images/bash.png", "Bash", 5, 0, "mana", 1, (c) => `Deals <strong>${c.basedmg * player.mults + player.bonuses}</strong> damage.`);
