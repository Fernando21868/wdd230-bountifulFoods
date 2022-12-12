const list = document.getElementById('list');
const firstFruit = document.getElementById('firstfruit');
const secondFruit = document.getElementById('secondfruit');
const thirdFruit = document.getElementById('thirdfruit');
const button = document.getElementById('createdrink');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const instructions = document.getElementById('instructions');
let drinkList = [];

const requestURL =
  'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getData() {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const fruits = await response.json();
  fruits.forEach((fruit) => {
    const option = document.createElement('option');
    option.setAttribute('name', fruit.name);
    option.textContent = fruit.name;
    firstFruit.appendChild(option);
  });
  fruits.forEach((fruit) => {
    const option = document.createElement('option');
    option.setAttribute('name', fruit.name);
    option.textContent = fruit.name;
    secondFruit.appendChild(option);
  });
  fruits.forEach((fruit) => {
    const option = document.createElement('option');
    option.setAttribute('name', fruit.name);
    option.textContent = fruit.name;
    thirdFruit.appendChild(option);
  });
}

function update(drinks) {
  list.innerHTML = '';
  drinks.forEach((drink) => {
    const listElement = document.createElement('li');
    listElement.classList.add('drink');

    listElement.innerHTML = `
            <p><span>First name:</span> ${drink.name}</p>
            <p><span>Email:</span> ${drink.email}</p>
            <p><span>Phone:</span> ${drink.phone}</p>
            ${
                drink.instructions
                  ? `<p><span>Instructions:</span> ${drink.instructions}</p>`
                  : `<p><span>Without instructions</span></p>`
              }
            <p><span>Order Date:</span> ${drink.date}</p>
            <p><span>Fruits:</span></p>
            <div>
                <p>${drink.firstFruit}</p>
                <p>${drink.secondFruit}</p>
                <p>${drink.thirdFruit}</p>
            </div>
        `;
    list.appendChild(listElement);
  });
}

button.addEventListener('click', function (e) {
  e.preventDefault();
  //   input.focus();

  if (!fname.value.trim() || !email.value.trim() || !phone.value.trim() || !firstFruit.value.trim() || !secondFruit.value.trim() || !thirdFruit.value.trim()) {
    return;
  } else {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const drinkObj = {
      date: date,
      name: fname.value,
      email: email.value,
      phone: phone.value,
      firstFruit: firstFruit.value,
      secondFruit: secondFruit.value,
      thirdFruit: thirdFruit.value,
      instructions: instructions.value,
    };
    drinkList.push(drinkObj);
    fname.value=''
    email.value=''
    phone.value=''
    firstFruit.value=''
    secondFruit.value=''
    thirdFruit.value=''
    instructions.value=''
    update(drinkList);

    localStorage.setItem('drinks', JSON.stringify(drinkList));
  }
});

let exist = localStorage.getItem('drinks');
if (exist) {
  drinkList = JSON.parse(localStorage.getItem('drinks'));
  update(drinkList);
}

getData();
