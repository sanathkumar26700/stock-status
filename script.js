const txtOutput = document.querySelector(".txt-output");
const btnCheck = document.querySelector("#btn-check");

const checkStatus = () => {
    const purchasePrice = parseInt(document.querySelector("#purchase-price").value);
    const purchaseQty = parseInt(document.querySelector("#purchase-qty").value);
    const currentPrice = parseInt(document.querySelector("#current-price").value);
    if (isNaN(purchasePrice) || isNaN(purchaseQty) || isNaN(currentPrice)) {
        txtOutput.innerHTML = 'Inputs cannot be left blank!!<br/>Please, try again.'
    } else {
        txtOutput.classList.add('hidden');
        calculatePorL(purchasePrice, purchaseQty, currentPrice);
    }
}

const calculatePorL = (purchasePrice, purchaseQty, currentPrice) => {
    txtOutput.classList.remove('hidden');
    let flag = purchasePrice <= currentPrice;
    if (flag) {
        //profit
        let priceDifference = (currentPrice - purchasePrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        document.querySelector("#img-desktop-normal").classList.add('hidden');
        document.querySelector("#img-desktop-sad").classList.add('hidden');
        document.querySelector("#img-desktop-happy").classList.remove('hidden');
        document.querySelector(".container").style.background = "linear-gradient(to right, var(--green) 60%, var(--lightestCream) 60%)";
        txtOutput.innerHTML = `🎉 YaaaaaaY!!! <br/>You gained ${profitLossPercentage}%  which is ₹${profitLoss}.`;
    } else {
        //loss
        let priceDifference = (purchasePrice - currentPrice);
        let profitLoss = priceDifference * purchaseQty;
        let profitLossPercentage = ((priceDifference / purchasePrice) * 100).toFixed(2);
        document.querySelector("#img-desktop-normal").classList.add('hidden');
        document.querySelector("#img-desktop-sad").classList.remove('hidden');
        document.querySelector(".container").style.background = "linear-gradient(to right, var(--black) 60%, var(--lightestCream) 60%)";
        document.querySelector(".container").style.color = "white";
        txtOutput.innerHTML = `oh nooo 😣😣😣!!! <br/>You lost ${profitLossPercentage}%  which is ₹${profitLoss}.`;
    }
}

btnCheck.addEventListener('click', checkStatus);