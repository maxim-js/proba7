'use srtict'

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', "25000");
    time = prompt('Введите дату в формате YYYY-MM-DD', "2019-12-08");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', "25000");
    }
}
start();



var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = prompt('Во сколько обойдется?');
        
            if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1); // окургляем до какого-либо значения
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }    
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма сбережений?"),
                percent = +prompt("Под какой процент?");
    
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=1; i <3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if ((typeof(items))==='string' && (typeof(items)) != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        } else {
            alert('Произошла ошибка');
        }
        appData.income.forEach(function(item, i) {
            console.log("Способы дополнительного заработка: " + item);
          });
    }
};

for (let key in appData) { 
       console.log(key);
       alert('Наша программа включает в себя данные: ' + key);
     }
    


