window.onload = () => {
    const summaryItems = document.querySelectorAll('.summary-item');
    let delay = 0;

    summaryItems.forEach(item => {
        setTimeout(() => {
            item.style.animationDelay = '0s';
            item.style.opacity = 1;
        }, delay);
        delay += 300; // Delay for each item to animate one after another
    });
};

function startAnalysis() {
    alert("Analysiere die Episode: Angelo versucht, seinen Bruder mit Süßigkeiten ruhigzustellen – doch es geht alles schief!");
}
