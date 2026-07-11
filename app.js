let currentStep = 0;
let userScore = { landscape: 0, operation: 0 };

const views = {
    start: document.getElementById('start-view'),
    quiz: document.getElementById('quiz-view'),
    results: document.getElementById('results-view'),
    progress: document.getElementById('progress'),
    question: document.getElementById('question'),
    options: document.getElementById('options'),
    audio: document.getElementById('bg-audio')
};

// Triggers the transition out of the start screen and starts the audio loop
function startEvaluation() {
    views.start.classList.remove('visible');
    
    // Start background focus audio gently
    if (views.audio) {
        views.audio.volume = 0.4; // Keeps the track ambient and unobtrusive
        views.audio.play().catch(err => console.log("Audio autoplay prevented until further interaction."));
    }

    setTimeout(() => {
        views.start.style.display = 'none';
        views.quiz.style.display = 'block';
        displayQuestion(0);
    }, 1200);
}

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
    }, 600); 
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
        
        let profile;
        
        // 3D Matrix Logic: Splitting based on Landscape, Operation, and Orientation
        if (userScore.landscape <= 0) {
            // Depth Landscape Track
            if (userScore.operation <= 0) {
                profile = (userScore.orientation <= 0) ? archetypes.pureWitness : archetypes.silentAnchor;
            } else {
                profile = (userScore.orientation <= 0) ? archetypes.internalAlchemist : archetypes.subversiveSage;
            }
        } else {
            // Horizon Landscape Track
            if (userScore.operation <= 0) {
                profile = (userScore.orientation <= 0) ? archetypes.systemicCartographer : archetypes.quantumYogi;
            } else {
                profile = (userScore.orientation <= 0) ? archetypes.cosmicDisruptor : archetypes.architectOfDawn;
            }
        }

        document.getElementById('archetype-name').innerText = profile.name;
        document.getElementById('archetype-desc').innerText = profile.desc;
        
        // Text Indicators for the Metrics Footer
        const landscapeLabel = userScore.landscape <= 0 ? "Depth (Subterranean)" : "Horizon (Expansive)";
        const operationLabel = userScore.operation <= 0 ? "Observer (Stillness)" : "Catalyst (Friction)";
        
        document.getElementById('left-metric').innerText = landscapeLabel;
        document.getElementById('right-metric').innerText = operationLabel;

        setTimeout(() => {
            views.results.classList.add('visible');
        }, 100);
    }, 1200);
}

function generateShareImage() {
    const targetElement = document.getElementById("capture-zone");
    const actionButton = document.querySelector(".share-btn");

    actionButton.innerText = "Encoding Viewports...";
    actionButton.style.opacity = "0.5";

    html2canvas(targetElement, {
        backgroundColor: "#0f1011",
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
        console.error("Capture failed:", err);
        actionButton.innerText = "Generation Error";
    });
}
