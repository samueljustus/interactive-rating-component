const ratingElement = document.querySelector('#ratings-selected')

window.addEventListener('load', () => {
    let finalRating = window.localStorage.getItem('rating');
    ratingElement.innerHTML = `You selected ${finalRating} out of 5`; 

})