const btns = document.querySelectorAll(".btn");
const numbers = [2, 34, 51, 27, 45, 5, 7, 10, 34, 16, 879, 1];
const students = ["John", "Bill", "Emma", "Stella", "Rob"];
const container = document.querySelector(".zadania");

//Zadanie 1
btns[0].addEventListener("click", function () {
  zadanie1(numbers);
});
//Zadanie2
btns[1].addEventListener("click", function () {
  const input = document.createElement("input");
  const btn = document.createElement("button");
  const box = document.createElement("div");
  const p = document.createElement("p");

  btn.style.padding = "0.3em 1em";
  btn.innerText = "Ile to minut";

  box.appendChild(input);
  box.appendChild(btn);
  box.appendChild(p);
  container.appendChild(box);

  btn.addEventListener("click", function () {
    p.innerText = `${input.value} minuty to ${zadanie2(input.value)} sekund`;
  });
});
//Zadanie3
btns[2].addEventListener("click", function () {
  const p = document.createElement("p");
  p.innerText = `${zadanie3(students)}, aby usunac kliknik.`;
  p.addEventListener("click", function () {
    this.remove();
  });
  container.appendChild(p);
});
//Zadanie4
btns[3].addEventListener("click", function () {
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const btn = document.createElement("button");
  const box = document.createElement("div");
  btn.innerText = "Oblicz pole";

  box.appendChild(input1);
  box.appendChild(input2);
  box.appendChild(input3);
  box.appendChild(btn);
  container.appendChild(box);

  btn.addEventListener("click", function () {
    const p = document.createElement("p");
    p.innerText = zadanie4(
      parseInt(input1.value),
      parseInt(input2.value),
      parseInt(input3.value)
    );
    box.appendChild(p);
  });
});

function zadanie1(tablica) {
  const tab_parzys = [];
  tablica.forEach(function (el) {
    if (el % 2 == 0 && el != 0) {
      tab_parzys.push(el);
    }
  });
  tab_parzys.sort(function (a, b) {
    return a - b;
  });
  const list = document.createElement("ol");
  tab_parzys.forEach(function (num) {
    const listItem = document.createElement("li");
    listItem.innerText = `${num}`;
    list.appendChild(listItem);
  });
  container.appendChild(list);
}

function zadanie2(minuty) {
  const min = parseInt(minuty);
  return min * 60;
}

function zadanie3(tab) {
  randomNum = Math.floor(Math.random() * tab.length + 0);
  return tab[randomNum];
}

function zadanie4(a, b, c) {
  if (a > b) {
    if (a > c) {
      if (a > b + c) {
        return "To nie jest trojkat";
      }
    } else {
      if (c > a + b) {
        return "To nie jest trojkat";
      }
    }
  } else {
    if (b > c) {
      if (b > a + c) {
        return "To nie jest trojkat";
      }
    } else {
      if (c > a + b) {
        return "To nie jest trojkat";
      }
    }
  }
  const p = (a + b + c) / 2;
  const s = Math.floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  return `Pole trojkata o bokach ${a}, ${b}, ${c} wynosi ${s}`;
}
