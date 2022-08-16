const btn = document.querySelector("#btn");
const container = document.querySelector(".container")
const iPrice = document.querySelector("#initial-inpt");
const quantity = document.querySelector("#quantity-inpt");
const cPrice = document.querySelector("#current-inpt");
const output = document.querySelector("#output");

const showOutput = (message) => {
  output.innerHTML = message;
};

const calculateProfitAndLoss = () => {
    const iPriceV = Number(iPrice.value);
    const quantityV = Number(quantity.value);
    const cPriceV = Number(cPrice.value);
    if (iPriceV == "" || quantityV == "" || cPriceV == "") return showOutput("Please enter a value")
    if (iPriceV < 0 || quantityV < 0 || cPriceV < 0) return showOutput("Please enter a Positive value")
  

  if (iPriceV > cPriceV) {
    const loss = (iPriceV - cPriceV) * quantityV;

    const lossPercentage = (((iPriceV - cPriceV) / iPriceV) * 100).toFixed(2);

    showOutput(
      `Hey, the loss is ₹ ${loss} and the loss percent is ${lossPercentage}%`
    );
    output.style.color = "red";
    container.style.boxShadow = "0px 5px 15px red";

  } else if (cPriceV > iPriceV) {
    const profit = (cPriceV - iPriceV) * quantityV;
    const profitPercentage = (((cPriceV - iPriceV)/ iPriceV ) * 100).toFixed(2);

    showOutput(
      `Hey, the profit is ₹ ${profit} and the profit percent is ${profitPercentage}%`
    );
    output.style.color = "green";
    container.style.boxShadow = "0px 5px 15px green";


  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
};

btn.addEventListener("click", calculateProfitAndLoss);
