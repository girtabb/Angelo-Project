window.onload = () => {
    const summaryItems = document.querySelectorAll('.summary-item');
    let delay = 0;

    summaryItems.forEach(item => {
        setTimeout(() => {
            item.style.animationDelay = '0s';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, delay);
        delay += 400; // Delay for each item to animate one after another
    });
};

function startAnalysis() {
    alert("In dieser Episode erleben die Freunde ein dramatisches Abenteuer: Peter, nach einem Zuckerrausch, verliert jegliche Kontrolle. Doch am Ende ist der Spaß die wahre Belohnung!");
}
