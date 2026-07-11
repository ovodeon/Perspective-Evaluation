let currentStep = 0;
let userScore = { landscape: 0, operation: 0 };

const views = {
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view'),
    progress: document.getElementById('progress'),
    question: document.getElementById('question'),
    options: document.getElementById('options')
};

function displayQuestion(index) {
    views.quiz.classList.remove('visible');
    
    setTimeout(() => {
        const currentData = matrix[index];
        views.progress.innerText = `0${index + 1} / 0${matrix.length}`;
        views.question.innerText = currentData.text;
        views.options.innerHTML = '';

        currentData.options.forEach((opt, i) => {
            const button = document.createElement('button');
            button.className = 'option-card';
            button.innerText = opt.text;
            button.onclick = () => handleSelection(index, i);
            views.options.appendChild(button);
        });

        views.quiz.classList.add('visible');
    }, 400); 
}

function handleSelection(qIndex, optIndex) {
    const chosen = matrix[qIndex].options[optIndex];
    userScore.landscape += chosen.effect.landscape;
    userScore.operation += chosen.effect.operation;

    if (currentStep < matrix.length - 1) {
        currentStep++;
        displayQuestion(currentStep);
    } else {
        transitionToResults();
    }
}

function transitionToResults() {
    views.quiz.classList.remove('visible');
    
    setTimeout(() => {
        views.quiz.style.display = 'none';
        views.results.style.display = 'flex';
        
        let name = "";
        let desc = "";
        
        if (userScore.landscape <= 0 && userScore.operation <= 0) {
            name = "The Silent Anchor";
            desc = "You navigate by depth rather than expanse... finding clarity in the architecture of the subterranean, choosing localized resonance over systemic noise.";
        } else if (userScore.landscape <= 0 && userScore.operation > 0) {
            name = "The Internal Alchemist";
            desc = "A rare convergence... you hold a deeply quiet inner sanctuary, yet you utilize it as a high-precision lens to spark catalytic shifts in your immediate orbit.";
        } else if (userScore.landscape > 0 && userScore.operation <= 0) {
            name = "The Systemic Cartographer";
            desc = "You observe from a panoramic vantage... tracing the grand design and historical currents with detached, beautiful, structural clarity.";
        } else {
            name = "The Cosmic Disruptor";
            desc = "You find alignment only within momentum... stepping directly into the storm of experience, choosing intentional chaos over structured stagnation.";
        }

        document.getElementById('archetype-name').innerText = name;
        document.getElementById('archetype-desc').innerText = desc;
        
        document.getElementById('left-metric').innerText = userScore.landscape <= 0 ? "Depth Alignment" : "Horizon Alignment";
        document.getElementById('right-metric').innerText = userScore.operation <= 0 ? "Contemplative Balance" : "Catalytic Flow";

        setTimeout(() => {
            views.results.classList.add('visible');
        }, 100);
    }, 600);
}

function generateShareImage() {
    const targetElement = document.getElementById("capture-zone");
    const actionButton = document.querySelector(".share-btn");

    actionButton.innerText = "Encoding Canvas...";
    actionButton.style.opacity = "0.5";

    html2canvas(targetElement, {
        backgroundColor: "#101112",
        scale: 2,
        logging: false,
        useCORS: true
    }).then(canvas => {
        const imageURI = canvas.toDataURL("image/png");
        const shadowLink = document.createElement("a");
        shadowLink.download = `perspective-${Date.now()}.png`;
        shadowLink.href = imageURI;
        
        document.body.appendChild(shadowLink);
        shadowLink.click();
        document.body.removeChild(shadowLink);

        actionButton.innerText = "Generate Story Image";
        actionButton.style.opacity = "1";
    }).catch(err => {
        console.error("Capture sequence failed:", err);
        actionButton.innerText = "Generation Error";
    });
}

window.onload = () => {
    displayQuestion(0);
};