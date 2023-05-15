const ratings = document.querySelectorAll('.circles')

ratings.forEach((element) => {
    element.addEventListener('click', () => {
        ratings.forEach(element => element.classList.remove('active'))

        element.classList.add('active');
    })
})
// const button = document.querySelector('button');

