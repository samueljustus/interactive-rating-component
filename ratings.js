const ratings = document.querySelectorAll('.circles')

ratings.forEach((element) => {
    element.addEventListener('click', () => {
        ratings.forEach(element => element.classList.remove('active'))

        element.classList.add('active');
    })
})
const button = document.querySelector('button');


button.addEventListener('click', () => {
    document.location.href = "thankyou.html"
    // console.log("holla");
})
