const btnSignIn = document.querySelector(".btn-sign-in");
        const btnSignUp = document.querySelector(".btn-sign-up");
        const modalSignIn = document.querySelector(".modal-sign-in");
        const modalSignUp = document.querySelector(".modal-sign-up");
        const body = document.body;
        btnSignIn.onclick = function () {
            modalSignIn.classList.add("active");
        };
        
        body.onclick = function (e) {
            if (e.target.matches(".modal-sign-in")) {
                modalSignIn.classList.remove("active");
            } else if (e.target.matches(".modal-sign-up")) {
                modalSignUp.classList.remove("active");
            }
        };
        btnSignUp.addEventListener("click", function () {
            modalSignUp.classList.add("active");
        });

        
  function bigImg(x) {
    // x.style.height = "300px";
    // x.style.width = "300px";
    x.style = `transform: scale(0.9)`
  }
  
  function normalImg(x) {
    // x.style.height = "280px";
    // x.style.width = "280px";
    x.style = `transform: scale(1)`
  }
  
