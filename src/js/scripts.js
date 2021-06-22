/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
// select
const select = function() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach((item) => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        const text = this.innerHTML;
        const select = this.closest('.select');
        const currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
    }
};
select();


const selectItems = document.querySelectorAll('.select__item');
const inputTel = document.getElementById('tel');


for (const selectItem of selectItems) {
    console.log(selectItem);
    selectItem.addEventListener('click', () => {
        if (selectItem.innerText === 'ru ') {
            inputTel.setAttribute('placeholder', '+7 (123) 456 78-90');
        } else if (selectItem.innerText === 'kz ') {
            inputTel.setAttribute('placeholder', '+7 (123) 456 7890');
        } else if (selectItem.innerText === 'ua ') {
            inputTel.setAttribute('placeholder', '+380 (12) 345 67-89');
        }
    });
}

