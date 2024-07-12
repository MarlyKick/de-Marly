document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.loop = true;
    backgroundMusic.play(background-Music.mp3);

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        const password = document.getElementById('password').value;
        const correctPassword = 'MKPYGV';

        if (password === correctPassword) {
            window.location.href = 'index 2.html';
        } else {
            alert('Mot de passe incorrect');
        }
    });
});
