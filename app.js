const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const MS = document.getElementById("marqueeStyle");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
currencyEl_one.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
currencyEl_two.addEventListener("change", caclulate);
amountEl_two.addEventListener("input", caclulate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  caclulate();
});

MS.innerHTML = `AED-United Arab Emirates | ARS-Argentina | AUD-Australia | BGN-Bulgaria | BRL-Brazil | BSD-Bahamas | CAD-Canada | CLP-Chile | CNY-China | COP-Colombia | CZK-Czech Republic | 
DKK-Denmark | EGP-Egypt | EUR-Euro | FJD-Fiji | GBP-United Kingdom | INR-India | USD-United States of America | TRY-Turkey | THB-Thailand | KRW-South Korea |
ZAR-South Africa | SGD-Singapore | RUB-Russia | QAR-Qatar | NPW-North Korea | NPR-Nepal | KWD-Kuwait | IDR-Indonesia | AED-United Arab Emirates | ARS-Argentina | AUD-Australia | BGN-Bulgaria | BRL-Brazil | BSD-Bahamas | CAD-Canada | CLP-Chile | CNY-China | COP-Colombia | CZK-Czech Republic | 
DKK-Denmark | EGP-Egypt | EUR-Euro | FJD-Fiji | GBP-United Kingdom | INR-India | USD-United States of America | TRY-Turkey | THB-Thailand | KRW-South Korea |
ZAR-South Africa | SGD-Singapore | RUB-Russia | QAR-Qatar | NPW-North Korea | NPR-Nepal | KWD-Kuwait | IDR-Indonesia | AED-United Arab Emirates | ARS-Argentina | AUD-Australia | BGN-Bulgaria | BRL-Brazil | BSD-Bahamas | CAD-Canada | CLP-Chile | CNY-China | COP-Colombia | CZK-Czech Republic | 
DKK-Denmark | EGP-Egypt | EUR-Euro | FJD-Fiji | GBP-United Kingdom | INR-India | USD-United States of America | TRY-Turkey | THB-Thailand | KRW-South Korea |
ZAR-South Africa | SGD-Singapore | RUB-Russia | QAR-Qatar | NPW-North Korea | NPR-Nepal | KWD-Kuwait | IDR-Indonesia |  `;

caclulate();
