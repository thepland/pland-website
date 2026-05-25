// COUNTER ANIMATION

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const c = +counter.innerText;

    const increment = target / 100;

    if(c < target){

      counter.innerText = `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 20);

    }
    else{

      counter.innerText = target;

    }

  };

  updateCounter();

});

// EMAILJS INIT

(function(){

  emailjs.init("1dfcxRbRLal82wrGd");

})();


// CONTACT FORM

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(

    "service_zedqi13",

    "template_mce0g9d",

    "#contact-form"

  )

  .then(() => {

    alert("Thank You! Our team will contact you soon.");

    form.reset();

  })

  .catch((error) => {

    alert("Failed To Send Message");

    console.log(error);

  });

});