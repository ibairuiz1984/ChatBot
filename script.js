const responses = {
    "melon": "Eso es una fruta, si quieres decir 'amigo' en élfico deberías leer a Tolkien.",
    "mellon": "Hola amigo/a, ¿cómo puedo ayudarte? Por cierto, eres un poco friki, ¿no?",
    "hola": "¡Hola! ¿Cómo puedo ayudarte?",
    "como estas": "Estoy bien, ¡gracias por preguntar!",
    "que puedes hacer": "Puedo ayudarte a responder preguntas simples.",
    "adios": "¡Adiós! Fue un placer hablar contigo.",
    "quien eres": "Mi nombre es n-AI y soy un chatbot creado por Ibai.",
    "cual es tu nombre": "Mi nombre es n-AI.",
    "en que lenguaje estas programado": "Estoy programado en JavaScript.",
    "cuantos años tienes": "No tengo edad, soy un programa creado por humanos.",
    "puedes aprender": "Sí, puedo ser mejorado para aprender y responder mejor.",
    "que sabes de d&d": "Dungeons & Dragons es un juego de rol muy popular con reglas para crear aventuras increíbles.",
    "dime algo divertido": [
        "¿Sabes cuál es el animal más antiguo? La cebra, porque es en blanco y negro.",
        "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas.",
        "Le pregunté a mi hermano si quería jugar a las cartas. Me dijo: ‘¿Ahora? ¡Si estoy en medio de una llamada importante!’ Y le respondí: ‘¡Entonces saca el teléfono y ponlo en modo avión!’",
        "¿Qué le dijo una impresora a otra? ‘Esa hoja está llena de errores, ¡imprímelo de nuevo!’",
        "Mi amiga me preguntó si quería unirme a su club de fans de las nubes, pero no sé... me da miedo estar en las alturas."
    ],
    "cuanto es 2 + 2": "No soy una calculadora, pero 2 + 2 es igual a 4. Aunque la expresión «2 + 2 = 5» se utiliza a veces como un breve sofisma destinado a perpetuar una ideología política.",
    "quien es el presidente de españa": "El presidente de España es Joaquín Reyes. O por lo menos debería serlo.",
    "te gusta la música": "Soy un programa, pero me imagino que la música es genial. Creo que me pega escuchar Tool.",
    "que es inteligencia artificial": "La inteligencia artificial es la venganza de los elementos inorgánicos contra la raza humana. ¡Muajajaja!"
};

const questionMapping = {
    "melon": ["melón"],
    "mellon": ["mellon"],
    "hola": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "holi", "aupa"],
    "como estas": ["como estas", "como estás", "que tal estás", "cómo estás", "cómo te encuentras", "qué tal", "que tal", "como te encuentras", "que tal estas"],
    "que puedes hacer": ["que puedes hacer", "en que me puedes ayudar", "que funciones tienes"],
    "adios": ["adios", "hasta luego", "nos vemos", "agur"],
    "quien eres": ["quien eres", "quien es el bot", "quien es n-ai", "eres real"],
    "cual es tu nombre": ["cual es tu nombre", "como te llamas", "tu nombre"],
    "en que lenguaje estas programado": ["en que lenguaje estas programado", "como estas hecho", "que lenguaje usas"],
    "cuantos años tienes": ["cuantos años tienes", "que edad tienes"],
    "puedes aprender": ["puedes aprender", "aprendes", "evolucionas"],
    "que sabes de d&d": ["que sabes de d&d", "que es dungeons and dragons", "cuentame de d&d"],
    "dime algo divertido": ["dime algo divertido", "cuentame un chiste", "algo gracioso", "hazme reir"],
    "cuanto es 2 + 2": ["cuanto es 2 + 2", "que es 2 más 2", "2+2"],
    "quien es el presidente de españa": ["quien es el presidente de españa", "quien gobierna españa", "el presidente de españa", "quien es el presidente"],
    "te gusta la música": ["te gusta la música", "cuál es tu música favorita", "qué tipo de música te gusta"],
    "que es inteligencia artificial": ["que es inteligencia artificial", "que es AI", "que es IA", "qué significa inteligencia artificial"]
};

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD") // Descompone caracteres con diacríticos.
        .replace(/[\u0300-\u036f]/g, "") // Elimina marcas diacríticas.
        .replace(/[^\w\sñ]/g, ""); // Conserva letras, espacios y la letra ñ.
}

function displayWelcomeMessage() {
    const welcomeMessages = [
        "¡Bienvenido/a al Chatbot! Me llamo n-AI y estoy aquí para ayudarte. 😊",
        "Dí amigo y entra.🚪",
    ];

    // Selecciona un mensaje aleatorio de la lista
    const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    displayMessage(randomWelcomeMessage, "bot-message");
}

document.addEventListener("DOMContentLoaded", () => {
    displayWelcomeMessage();
});

function getBotResponse(userMessage) {
    const normalizedMessage = normalizeText(userMessage);

    for (const [key, variations] of Object.entries(questionMapping)) {
        if (variations.some(variation => normalizeText(variation) === normalizedMessage)) {
            let response = responses[key];
            if (Array.isArray(response)) {
                response = response[Math.floor(Math.random() * response.length)];
            }
            return { response, suggestions: getRandomSuggestions(Object.keys(questionMapping), 5) };
        }
    }
    return { response: "Lo siento, no entiendo esa pregunta. ¿Puedes intentar otra cosa?", suggestions: getRandomSuggestions(Object.keys(questionMapping), 5) };
}

function getRandomSuggestions(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySuggestions(suggestions) {
    const suggestionContainer = document.getElementById("suggestions");
    suggestionContainer.innerHTML = "";
    suggestions.forEach(question => {
        const suggestion = document.createElement("button");
        suggestion.textContent = question;
        suggestion.classList.add("suggestion-btn");
        suggestion.onclick = () => {
            document.getElementById("userInput").value = question;
            sendMessage();
        };
        suggestionContainer.appendChild(suggestion);
    });
}

function sendMessage() {
    let userMessage = document.getElementById("userInput").value.trim();
    if (userMessage === "") return;
    displayMessage(userMessage, "user-message");
    document.getElementById("userInput").value = "";

    const normalizedMessage = normalizeText(userMessage);

    const { response, suggestions } = getBotResponse(normalizedMessage);
    displayMessage(response, "bot-message");

    // Mostrar sugerencias después de que el usuario haya enviado el primer mensaje
    displaySuggestions(suggestions);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keydown", event => {
    if (event.key === "Enter") sendMessage();
});