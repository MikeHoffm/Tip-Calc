const formSubmit = document.querySelector('.submit');

formSubmit.addEventListener('click', () => {
  event.preventDefault();
  calcTip(billTotal.value, tipPercent.value);
});

const billTotal = document.getElementById('bill');
const tipPercent = document.getElementById('percents');

const tipDOM = document.querySelector('.tip');
const totalDOm = document.querySelector('.total');

function calcTip(bill, tip) {
  percentToDecimal = parseFloat(tip) / 100;
  let billTipIncluded = bill * (1 + percentToDecimal);
  billTipIncluded = billTipIncluded.toFixed(2);

  const tipAlone = (billTipIncluded - bill).toFixed(2);
  console.log(billTipIncluded);

  tipDOM.innerText = (`$${tipAlone}`);
  totalDOm.innerText = (`$${billTipIncluded}`);
  return billTipIncluded;
}
