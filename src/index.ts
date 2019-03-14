import './styles.css';
import { getRandomInt } from './utils';

const squares = document.querySelectorAll('.square');

const secret = getRandomInt(1, 6);
let guesses = 0;

squares.forEach((sq, idx) => {
    const el = sq as HTMLDivElement;
    if ((idx + 1) === secret) {
        el.dataset['secret'] = 'true';
    }
    sq.addEventListener('click', function () {
        guesses++;
        if (el.dataset.secret) {
            el.classList.add('winner');
            const message = ` <small>You made <b>${guesses} </b> guesses. </small>`;
            document.getElementById('guesses').innerHTML = message;
        }
        else {
            el.classList.add('loser');
        }
    })
})

function handleClick() {
    const el = this as HTMLDivElement;
    if (el.dataset.secret) {
        el.classList.add('winner');
        el.removeEventListener('click', handleClick);
    }
    else {
        el.classList.add('loser');
        el.removeEventListener('click', handleClick);
    }
}