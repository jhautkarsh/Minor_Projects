
const BASE_URL = `https://v6.exchangerate-api.com/v6/76d9994b0f01956c3edff21b/latest/USD`;

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
let from = document.querySelector('.from select')
let to = document.querySelector('.to select')
let msg = document.querySelector('.msg');


for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement('option')
        newOption.innerText = currCode;
        newOption.value = currCode
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }
        if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }
        select.appendChild(newOption);

        select.addEventListener('change', (e) => {
            update_flag(e.target);
        });
    }
}

const update_flag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

const updateExchangeRate = () => {

    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;

    if (amountValue === "" || amountValue < 1 || isNaN(amountValue)) {
        amountValue = 1;
        amount.value = '1';
    }
    url(amountValue);
}

const url = async (amount) => {

    let newURL = await fetch(BASE_URL);
    let data = await newURL.json();


    let from_currency = data.conversion_rates[from.value];
    let to_currency = data.conversion_rates[to.value];

    const convertCurrency = ((amount / from_currency) * to_currency)
    msg.innerHTML = `${amount} ${from.value} = ${convertCurrency.toFixed(2)} ${to.value}`;

}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});

const reverse = document.querySelector('#icon');

