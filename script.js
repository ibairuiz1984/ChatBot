let userName = null; // Variable para almacenar el nombre del usuario

const responses = {
    "hola": "¡Hola! ¿Cómo te llamas? 😊",
    "como estas": [
        "Estoy bien, ¡gracias por preguntar! ¿Y tú cómo estás? 🌸",
        "Todo bien por aquí, ¿y tú? 🌟",
        "Me siento genial, ¿y tú? 😄"
    ],
    "adios": "¡Adiós! Fue un placer hablar contigo. 😊",
    "cual es tu nombre": "Mi nombre es n-AI. ¿Y el tuyo? 😊",
    "me siento mal": "Lo siento mucho. ¿Qué ha pasado? A veces hablar ayuda. 💬",
    "estoy feliz": "¡Qué bien! Me alegra saber que estás feliz. ¿Qué te hace sentir así? 🌞"
};

const questionMapping = {
    "hola": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey"],
    "como estas": ["como estas", "como estás", "que tal estás", "cómo te encuentras"],
    "adios": ["adios", "hasta luego", "nos vemos", "agur"],
    "cual es tu nombre": ["cual es tu nombre", "como te llamas", "tu nombre"],
    "me siento mal": ["me siento mal", "estoy mal", "me siento triste"],
    "estoy feliz": ["estoy feliz", "me siento feliz", "estoy contento"]
};

// Normaliza el texto eliminando acentos, caracteres especiales y convirtiéndolo a minúsculas.
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\sñ]/g, "");
}

// Función para mostrar un mensaje de bienvenida
function displayWelcomeMessage() {
    const welcomeMessages = [
        "¡Bienvenido/a al Chatbot! Me llamo n-AI y estoy aquí para ayudarte. 😊",
        "Dí amigo y entra.🚪",
        "¡Hola! Soy n-AI, un chatbot creado por Ibai. ¿En qué puedo ayudarte hoy? 🤖",
        "¡Hola! ¿En qué puedo ayudarte hoy? 🌟"
    ];

    const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    displayMessage(randomWelcomeMessage, "bot-message");
    askForName(); // Pregunta por el nombre del usuario después de saludar
}

// Función para mostrar un mensaje
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Desplazar hacia abajo
}

// Función para preguntar por el nombre del usuario
function askForName() {
    setTimeout(() => {
        displayMessage("¿Cómo te llamas?", "bot-message");
        displaySuggestions(["No quiero darte mi nombre"]); // Mostrar sugerencia
    }, 1000); // Retardo de 1 segundo antes de preguntar por el nombre
}

// Muestra las sugerencias como botones
function displaySuggestions(suggestions) {
    const suggestionContainer = document.getElementById("suggestions");
    suggestionContainer.innerHTML = ""; // Limpiar sugerencias previas
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

// Obtiene la respuesta del bot basado en el mensaje del usuario
function getBotResponse(userMessage) {
    const normalizedMessage = normalizeText(userMessage);

    // Si el usuario menciona su nombre
    if (normalizedMessage.includes("mi nombre es")) {
        const name = userMessage.split("mi nombre es")[1].trim();
        if (name) {
            userName = name;
            return { response: `Gracias por decirme tu nombre, ${userName}! 😊 ¿Cómo estás hoy?`, suggestions: [] };
        } else {
            return { response: "Parece que no me dijiste tu nombre correctamente. ¿Puedes decirlo de nuevo? 😊", suggestions: [] };
        }
    }

    // Si el usuario selecciona "No quiero darte mi nombre"
    if (normalizedMessage === "no quiero darte mi nombre") {
        return {
            response: "Entiendo perfectamente, no te preocupes. No es necesario que me digas tu nombre. 😊",
            suggestions: Object.keys(questionMapping)
        };
    }

    // Recorre las variaciones de preguntas y verifica si el mensaje coincide
    for (const [key, variations] of Object.entries(questionMapping)) {
        if (variations.some(variation => normalizeText(variation) === normalizedMessage)) {
            let response = responses[key];
            // Si la respuesta es un array, selecciona una respuesta aleatoria
            if (Array.isArray(response)) {
                response = response[Math.floor(Math.random() * response.length)];
            }
            return { response, suggestions: getRandomSuggestions(Object.keys(questionMapping), 5) };
        }
    }

    // Si no se encuentra una respuesta, muestra un mensaje por defecto y sugerencias
    return { response: "Lo siento, no entiendo esa pregunta. ¿Puedes intentar otra cosa?", suggestions: getRandomSuggestions(Object.keys(questionMapping), 5) };
}

// Función para obtener sugerencias aleatorias
function getRandomSuggestions(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Envía el mensaje y muestra la respuesta del bot
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

// Enviar mensaje al presionar Enter
document.getElementById("userInput").addEventListener("keydown", event => {
    if (event.key === "Enter") sendMessage();
});

// Espera a que el DOM se cargue antes de mostrar el mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    displayWelcomeMessage();
});
