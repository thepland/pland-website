const boxes = document.querySelectorAll(".content-box");

window.addEventListener("scroll", () => {

  boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < window.innerHeight - 100){

      box.classList.add("show");

    }

  });

});