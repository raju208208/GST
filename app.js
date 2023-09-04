
function navSlide() {
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".burger");
  
    burger.addEventListener("click", () => {
      menu.classList.toggle("nav-active");
  
      burger.classList.toggle("toggle");
    });
  
  }
  
  navSlide();
  
  
  // Q - Rohan visited the restaurant with his family. He ordered starters for rupees 5086. And the main course of rupees 5000.
  
  // Some Indian food cost him around 3545. The Chinese was very expensive; it was around rupees 4782.
  
  // In the end he ordered dessert which cost him around 2620 rupees. As Rohan is very bad in maths,
  
  // you will create a function whose job is to calculate the total amount he has to pay with 18% gst included.
  
  // And if the amount of the bill exceeds 18000 then he will only pay 500 rupees in tip else he will pay 1000 rupees in tip.
  
  // And also calculate the total money he spent that night.
  
  
  function calculate() {
  
    let Name = document.getElementById("name").value;
  
    let Phone = document.getElementById("mobile").value;
  
    let Email = document.getElementById("email").value;
  
    let Place = document.getElementById("address").value;
  
    let starters = document.getElementById("starters").value;
  
    let main_course = document.getElementById("main_course").value;
  
    let indian_food = document.getElementById("indian_food").value;
  
    let chinese = document.getElementById("chinese").value;
  
    let dessert = document.getElementById("dessert").value;
  
    let GST = document.getElementById("GST").value;
  
    let payment = document.getElementById("payment");
  
  
    let total = [parseInt(starters), parseInt(main_course), parseInt(indian_food), parseInt(chinese), parseInt(dessert)];
  
    amount = 0;
  
    for (let i = 0; i < total.length; i++) {
        amount += total[i];
    }
  
    let bill = amount * (GST / 100);
  
    if (!isNaN(amount)) {
      document.getElementById("answer").innerHTML = `Name : ${Name},<br><br>Mobile : ${Phone},<br><br>Email : ${Email},<br><br>Place : ${Place},<br><br>Total Amount : ${amount}/-,<br><br>Total bill payment with ${GST}% GST is ${bill + amount}/-`;
  
      if (18000 < amount) {
        document.getElementById("final").innerHTML = `With tip 500 rupees : ${bill + amount + 500}/-<br><br>Note : bill exceeds 18000 then will only pay 500 rupees in tip otherwise will pay 1000 rupees in tip`;
      } else {
        document.getElementById("final").innerHTML = `With tip 1000 rupees : ${bill + amount + 1000}/-<br><br>Note : bill exceeds 18000 then will only pay 500 rupees in tip otherwise will pay 1000 rupees in tip`;
      }
    }
  
    document.getElementById("payment").onmouseover = function () {
      this.style.backgroundColor = "darkblue";
      this.style.color = "white";
    };
  
    document.getElementById("payment").onmouseout = function () {
      this.style.backgroundColor = "gold";
      this.style.color = "darkred";
    };
  }
  calculate();
  
  
    