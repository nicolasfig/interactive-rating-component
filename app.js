let pre_submitted = document.querySelector(".pre-submitted");
let submitted = document.querySelector(".submitted-form");
let submit_btn = document.querySelector(".submit");
let final_score = document.querySelector(".num");
let scores = document.querySelectorAll(".score-btn");

submit_btn.addEventListener("click", () => {
  pre_submitted.style.display = "none";
  submitted.style.display = "flex";
});

scores.forEach((score) => {
  score.addEventListener("click", () => {
    final_score.innerHTML = score.innerHTML;
    submit_btn.addEventListener("click", () => {
      pre_submitted.style.display = "none";
      submitted.style.display = "flex";
    });
  });
});
