let bids = [];
let prevBid = 0

//create the Bid class for every bid
class Bid {
    constructor(user, amount) {
        this.user = user;
        this.amount = amount;
        //generates a unique id for each bid, something I added for fun
        this.id = Util.newGuid('bid');
        //creates a timestamp for each bid
        this.date = new Date();
        this.date = this.date.toLocaleString();
    }
}

function addBid(user) {
    //gets the bid amount from the text input
    let bidAmount = document.getElementById(user).value;
    //checks to see if there was a bid entered
    if (bidAmount) {
        //checks to see if the bid entered is bigger than the previous 
        if (bidAmount > prevBid) {
            //creates a new Bid using the class constructor
            bids.push(new Bid(user, bidAmount));
            //resets the input field
            document.getElementById(user).value = '';
            //renders and changed the prevBid amount to the most recent bid
            render();
            prevBid = parseInt(bidAmount)
        }
        //if bid is to low this error is thrown
        else {
            alert("Error, please bid higher")
        }
    }
    //if nothing is entered this error is thrown
    else {
        alert("Error, please enter a number")
    }
}

function render() {
    //creates a variable with all the html needed
    let bidsHtml = '<ul class="list-group">';
    //this loop goes through all the bids assigning each one some html
    for (let i = 0; i < bids.length; i++) {
        bidsHtml += `<li class="list-group-item">
        <div class="row">
        <div class="col-sm">${bids[i].user}: $${bids[i].amount}</div>
        <div class="col-sm text-secondary"><small>${bids[i].id}</small></div>
        <div class="col-sm">${bids[i].date}</div>
        </div></li>`;
    }
    bidsHtml += '</ul>';
    //displays it to page
    document.getElementById('mainContainer').innerHTML = bidsHtml;
}

//saves both the list of bids and the max bid for later
function save() {
    localStorage.setItem('SAVED_BIDS', JSON.stringify(bids));
    localStorage.setItem('MAX_BID', JSON.stringify(prevBid));
}

//gets both the list of bids and the max bid then renders the page
function getSave() {
    bids = JSON.parse(localStorage.getItem('SAVED_BIDS')) || [];
    prevBid = JSON.parse(localStorage.getItem('MAX_BID')) || 0;
    render();
}

//clears only the list of bids and the mad bid
function clearSave() {
    localStorage.removeItem('SAVED_BIDS');
    localStorage.removeItem('MAX_BID');
}