const formSubmit = document.querySelector('.submit');

formSubmit.addEventListener('click', () => {
  event.preventDefault();
  calcTip(billTotal.value, tipPercent.value);
});

const billTotal = document.getElementById('bill');
const tipPercent = document.getElementById('percentage');

function calcTip(bill, tip) {
// billTotal * (1 + tipPercentage) as a decimal
// ex for 20%: billTotal * (1 + .20) will give the Total of bill + tip
  percentToDecimal = parseFloat(tip) / 100;
  const billTipIncluded = bill * (1 + percentToDecimal);
  console.log(billTipIncluded);
  return billTipIncluded;
  // take value from above, subtract amount of bill to get the tip amount
}

// when submit is pressed, call calcTip(billTotal, tipPercentage)
// update DOM to show the Total with tip included, and the tip
