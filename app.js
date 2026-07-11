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
