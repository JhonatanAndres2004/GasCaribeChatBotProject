const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';


if (!isAuthenticated) {
  window.location.href = 'login.html';
}



const checkbox = document.getElementById('listenCheckbox');
const textInput = document.getElementById('user-input');
let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                console.log(transcript);  // prints result
                fetch('/log', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: transcript}),
                });
            } else {
                interimTranscript += transcript;
            }
        }
        textInput.value = finalTranscript || interimTranscript;
    };

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            recognition.start();
            textInput.value = '';  // Clear input when started
        } else {
            recognition.stop();
        }
    });
} else {
    alert('Tu navegador no soporta reconocimiento de voz.');
}