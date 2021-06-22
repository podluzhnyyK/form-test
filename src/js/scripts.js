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


// parallax effect
window.onload = function() {
    const parallaxBox = document.getElementById( 'product' );
    const c1left = document.getElementById( 'product-img' ).offsetLeft;
    const c1top = document.getElementById( 'product-img' ).offsetTop;

    parallaxBox.onmousemove = function( event ) {
        event = event || window.event;
        const x = event.clientX - parallaxBox.offsetLeft;
        const y = event.clientY - parallaxBox.offsetTop;

        mouseParallax( 'product-img', c1left, c1top, x, y, 6 );
    };
};

function mouseParallax( id, left, top, mouseX, mouseY, speed ) {
    const obj = document.getElementById( id );
    const parentObj = obj.parentNode;
    const containerWidth = parseInt( parentObj.offsetWidth );
    const containerHeight = parseInt( parentObj.offsetHeight );
    obj.style.left = ( ( ( mouseX - ( parseInt( obj.offsetWidth ) /
     2 + left ) ) / containerWidth ) * speed ) + 'px';
    obj.style.top = ( ( ( mouseY - ( parseInt( obj.offsetHeight ) /
     2 + top ) ) / containerHeight ) * speed ) + 'px';
}
