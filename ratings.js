const ratings = document.querySelectorAll('.circles')

ratings.forEach((element) => {
    element.addEventListener('click', () => {
        ratings.forEach(element => element.classList.remove('active'))

        element.classList.add('active');
        persistToLocalStorage(element.innerHTML)
        console.log(`${element.innerHTML}  clicked`)
    })
})

const persistToLocalStorage = (_ratings) => {
    window.localStorage.removeItem('rating')
    window.localStorage.setItem('rating', _ratings)
}
const button = document.querySelector('button');


button.addEventListener('click', () => {
    document.location.href = "thankyou.html"
    // console.log("holla");
})
