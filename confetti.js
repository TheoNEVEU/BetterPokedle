import JSConfetti from 'https://cdn.skypack.dev/js-confetti';

const jsConfetti = new JSConfetti();

export function lancerConfettis() {
    //jsConfetti.addConfetti();
    jsConfetti.addConfetti({emojis: ['🏆', '⭐', '🏅'],});
}

export function eazy() {
    //jsConfetti.addConfetti();
    jsConfetti.addConfetti({emojis: ['😇', '🗿', '👼'],});
}

export function hard() {
    //jsConfetti.addConfetti();
    jsConfetti.addConfetti({emojis: ['🔥', '👽', '💥'],});
}

