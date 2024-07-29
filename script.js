
let setInput = document.getElementById('setInput');
let checkInput1 = document.getElementById('checkInput1');
let checkInput2 = document.getElementById('checkInput2');
let totalBud = document.getElementById('totalBud');
let espansese = document.getElementById('espansese');
let balance = document.getElementById('balance');
let table = document.getElementById('table');
let Good = 0;

function foo() {
    if (setInput.value === "") {

        alert('Please Enter Budget');

    } else {

        totalBud.innerText = setInput.value;
        balance.innerText = setInput.value;
    }
}

function moo() {

    if (checkInput1.value === '' || checkInput2.value == '') {

        alert('Please Enter Items Detail');

    } else {

        let userAmout = checkInput2.value;

        Good += +userAmout;

        let baqi = totalBud.innerText - Good;

        let row = table.insertRow();
        let box1 = row.insertCell();
        let box2 = row.insertCell();
        let box3 = row.insertCell();

        box1.innerHTML = `${checkInput1.value}`;
        box2.innerHTML = `${checkInput2.value}`;
        box3.innerHTML = `<i class="fa-solid fa-trash" onclick="hoo(this)"></i>`;

        espansese.innerText = Good;

        balance.innerText = baqi;


        checkInput1.value = '';
        checkInput2.value = '';
    }
}

function hoo(button) {

    let row = button.closest('tr');
    row.remove()
}