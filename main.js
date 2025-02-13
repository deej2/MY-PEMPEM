const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!!!";
    }

    if (n.length > 0) {
        alert("HI MAHAL CAN U BE MY VALENTINE PERO STROLL TRIP TAYO?");
        alert('hehe walaka masasagot dito syempre');
        alert('mwamwa see u tom!');
        alert('sana dikana galit sakin palagi');
        alert('I love You ' + n);
        main.style.display = 'block';
        break;
    }
}