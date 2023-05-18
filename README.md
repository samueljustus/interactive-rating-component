# Frontend Mentor - Interactive rating component solution
This is a solution to the [Interactive rating component challenge on Frontend Mentor]
(https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).
## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

# the-challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

# screenshot


## built with
Semantic HTML5 markup
- CSS custom properties
- Flexbox

# my-process
i started off by building the basic structure of the page with html and then i began to add basic styling to the
page with css then i figured out a way to store the number of rating selected by the user with local storage so 
that when my thank you page loads i could get therating dynamically ad display it. 

# what-i-learned

i learnt how to set, get and remove item from localstorage 
```js
const persistToLocalStorage = (ratings_) => {
window.localStorage.removeItem('rating')
window.localStorage.setItem('rating', ratings_)
}
```

# continued-development
i'm not fully comfortable with the diffrent event you can add on the web page so i'll go ahead and continue learning
till i have a solid understand on the diffrent event and how to add them.

## Author

- Frontend Mentor - samueljustus(https://www.frontendmentor.io/profile/samueljustus)
- twitter - samueljustus_(https://www.twitter.com/samueljustus_)

# useful resources 

https://www.instapaper.com/read/1606326748 - this article helped me with understanding local storage and how it works
