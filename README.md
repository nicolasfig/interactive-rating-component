# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Select a rating and display it on screen after pressing a submit button

### Screenshots

#### Desktop

![](./images/desktop_view.png)
![](./images/desktop_view_after.png)

#### Mobile

![](./images/mobile_view.png)
![](./images//mobile_view_after.png)

### Links

- Solution URL: [Code](https://github.com/nicolasfig/interactive-rating-component)
- Live Site URL: [Live site](https://nicolasfig.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

How to add interactivity to the html, basic DOM manipulation, how to add and remove classes using javascript and more flexbox

```css
.submitted-form {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

```javascript
scores.forEach((score) => {
  score.addEventListener("click", () => {
    final_score.innerHTML = score.innerHTML;
  });
});
```

### Useful resources

- [Flexbox Malven](https://flexbox.malven.co/) - Useful flexbox reference as always
- [MDN](https://developer.mozilla.org/en-US/) - MDN the best documentation

## Author

- Frontend Mentor - [@nicolasfig](https://www.frontendmentor.io/profile/nicolasfig)
