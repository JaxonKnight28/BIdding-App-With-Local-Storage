//this.id = Util.newGuid('');

let bids = [];
let prevBid = 0

class Bid {
    constructor(user, amount) {
        this.user = user;
        this.amount = amount;
        this.id = Util.newGuid('bid');
        this.date = new Date();
        this.date = this.date.toLocaleString();
    }
}

function addBid(user) {
    let bidAmount = document.getElementById(user).value;
    if (bidAmount) {
        if (bidAmount > prevBid) {
            bids.push(new Bid(user, bidAmount));
            document.getElementById(user).value = '';
            render();
            prevBid = bidAmount
        }
        else {
            showError("Error", 'Must bid higher than the previous bid');
        }
    }
}

function render() {
    let bidsHtml = '<ul class="list-group">';
    for (let i = 0; i < bids.length; i++) {
        bidsHtml += `<li class="list-group-item">
        <div class="row">
        <div class="col-sm">${bids[i].user}: $${bids[i].amount}</div>
        <div class="col-sm text-secondary"><small>${bids[i].id}</small></div>
        <div class="col-sm">${bids[i].date}</div>
        </div></li>`;
        //${bids[i].user}: $${bids[i].amount}
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