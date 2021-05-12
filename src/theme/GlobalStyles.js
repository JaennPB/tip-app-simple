import { createGlobalStyle } from 'styled-components';

const GobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap");

/* Setting 1rem = 10px */
html {
  font-family: "Poppins", sans-serif;
  font-size: 62.5%;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

`;

export default GobalStyles;
