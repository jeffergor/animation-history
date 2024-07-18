document.addEventListener('DOMContentLoaded', function() {
    const scenes = document.querySelectorAll('.scene');
    let currentScene = 0;

    function showNextScene() {
        if (currentScene < scenes.length) {
            scenes[currentScene].style.display = 'block';
            currentScene++;
            setTimeout(showNextScene, 5000); // Adjust timing as needed
        }
    }

    showNextScene();
});
