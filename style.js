const container = document.querySelector('#container')
const containerThanks = document.querySelector('.thanks')
const buttons = document.querySelectorAll('.links button');
const submitReview = document.querySelector('#submit');
const values = document.querySelector('span');


buttons.forEach(function (btn) {
    btn.addEventListener('click', ()=>{
        values.innerHTML = `You selected ${btn.textContent} out of 5`

        // submit button
    submitReview.addEventListener('click', function() {
    container.classList.toggle('toggle')
    containerThanks.classList.remove('thanks-2')
    
})

    })
})
























function log(x) {
    console.log(x)
}
