//this.id = Util.newGuid('');

let bids = [];

class Bid {
    constructor(user, amount) {
        this.user = user;
        this.amount = amount;
        this.id = Util.newGuid('bid');
    }
}

function addBid(user) {
    let bidAmount = document.getElementById(user).value;
    if (bidAmount) {
        bids.push(new Bid(user, bidAmount));
        document.getElementById(user).value = '';
        render();
    }
}

function render() {
    let bidsHtml = '<ul class="list-group">';
    for (let i = 0; i < bids.length; i++) {
        bidsHtml += `<li class="list-group-item">${bids[i].user}: ${bids[i].amount}</li>`;
    }
    bidsHtml += '</ul>';
    document.getElementById('mainContainer').innerHTML = bidsHtml;
}

function save() {
    localStorage.setItem('SAVED_BIDS', JSON.stringify(bids));
}

function getSave() {
    bids = JSON.parse(localStorage.getItem('SAVED_BIDS'));
    render();
}
function clearSave() {
    localStorage.clear();
}