///deposit js

document.getElementById("btn-deposit").addEventListener("click", function () {
  const preDeposit = document.getElementById("span-deposit");
  const currentDeposit = document.getElementById("input-deposit");
  const preBalance = document.getElementById("span-balance");

  if (currentDeposit.value == "" || currentDeposit.value < 0) {
    alert("Invalid Input!!!");
  } else {
    preDeposit.innerText = (
      parseFloat(preDeposit.innerText) + parseFloat(currentDeposit.value)
    ).toFixed(2);

    preBalance.innerText = (
      parseFloat(preBalance.innerText) + parseFloat(currentDeposit.value)
    ).toFixed(2);
  }

  currentDeposit.value = "";
});

/// withdraw js
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const preWithdraw = document.getElementById("span-withdraw");
  const currentWithdraw = document.getElementById("input-withdraw");
  const preBalance = document.getElementById("span-balance");

  if (currentWithdraw.value == "" || currentWithdraw.value < 0) {
    alert("Invalid Input!!!");
  } else {
    if (parseFloat(currentWithdraw.value) > parseFloat(preBalance.innerText)) {
      alert("Insufficent Balance");
    } else {
      preWithdraw.innerText = (
        parseFloat(preWithdraw.innerText) + parseFloat(currentWithdraw.value)
      ).toFixed(2);

      preBalance.innerText = (
        parseFloat(preBalance.innerText) - parseFloat(currentWithdraw.value)
      ).toFixed(2);
    }
  }

  currentWithdraw.value = "";
});
