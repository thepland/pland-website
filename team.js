// SCROLL REVEAL EFFECT

const cards = document.querySelectorAll(".member-card");

window.addEventListener("scroll", ()=>{

  cards.forEach(card=>{

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";
    }

  });

});


// INITIAL STATE

cards.forEach(card=>{

  card.style.opacity = "0";

  card.style.transform = "translateY(40px)";

  card.style.transition = "0.6s ease";
});