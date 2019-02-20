function myFunction() {
  var phrases = [
    "однозначно - так!",
    "так, проте пізнішне",
    "сумнівно",
    "катенгорично ні!",
    "подумай ще раз чи це тобі потрібно",
    "якщо надумав,- дій",
    "цього не варто робити"
  ];

  document.getElementById("demo1").innerHTML = phrases[Math.floor(Math.random()*7)];
}
