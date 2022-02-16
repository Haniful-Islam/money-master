function bachelorAccount(cost) {
    const foodInput = document.getElementById(cost);
    const foodMoney = parseFloat(foodInput.value);
    const totalMoney = food + rent + clothes;
    // return totalMoney;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalMoney;
    const incomeInput = document.getElementById('total-income');
    const totalIncome = parseFloat(incomeInput.value);
    const myIncome = totalIncome - totalMoney;
    // console.log();
    const balance = document.getElementById('balance');
    balance.innerText = myIncome;



}
document.getElementById('calculate-btn').addEventListener('click', function () {
    // const foodInput = document.getElementById('food');
    // const foodMoney = parseFloat(foodInput.value);
    // const rentInput = document.getElementById('rent');
    // const rentMoney = parseFloat(rentInput.value);
    // const clothesInput = document.getElementById('clothes');
    // const clothesMoney = parseFloat(clothesInput.value);
    // const totalMoney = foodMoney + rentMoney + clothesMoney;
    bachelorAccount('food');
    bachelorAccount('rent');
    bachelorAccount('clothes');
    // console.log(totalMoney);


    // const totalExpenses = document.getElementById('total-expenses');
    // totalExpenses.innerText = totalMoney;

    // const incomeInput = document.getElementById('total-income');
    // const totalIncome = parseFloat(incomeInput.value);
    // const myIncome = totalIncome - totalMoney;
    // // console.log();
    // const balance = document.getElementById('balance');
    // balance.innerText = myIncome;


})