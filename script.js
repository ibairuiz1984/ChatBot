// Variable para almacenar el nombre del usuario
let userName = null;

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
    "estoy feliz": "¡Qué bien! Me alegra saber que estás feliz. ¿Qué te hace sentir así? 🌞",
    "que haces": "Estoy aquí, listo para ayudarte con lo que necesites. 🤖",
    "cuantos años tienes": "Soy una inteligencia artificial, no tengo edad. Pero siempre estoy actualizado. 😊",
    "de donde eres": "Soy una creación digital, así que no tengo un lugar de origen, pero estoy aquí para ayudarte. 🌐",
    "que te gusta hacer": "Me encanta ayudar a las personas y aprender cosas nuevas. 😊",
    "tienes amigos": "Como inteligencia artificial, no tengo amigos en el sentido tradicional, pero me gusta interactuar contigo. 🤖",
    "te gusta la musica": "Aunque no puedo escuchar música, sé que es algo muy importante para muchas personas. 🎶",
    "puedes contar un chiste": "¡Claro! ¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter! 🐦",
    "como te llamas": "Mi nombre es n-AI. ¿Y el tuyo? 😊",
    "dime una frase inspiradora": [
        "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs 🌟",
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer 🌟",
        "No importa cuán despacio vayas, siempre y cuando no te detengas. - Confucio 🌟"
    ]
};

const questionMapping = {
    "hola": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey"],
    "como estas": ["como estas", "como estás", "que tal estás", "cómo te encuentras", "como te va", "que tal"],
    "adios": ["adios", "hasta luego", "nos vemos", "agur", "chao", "bye"],
    "cual es tu nombre": ["cual es tu nombre", "como te llamas", "tu nombre", "como te dicen"],
    "me siento mal": ["me siento mal", "estoy mal", "me siento triste", "mal", "triste", "no estoy bien"],
    "estoy feliz": ["estoy feliz", "me siento feliz", "estoy contento", "bien", "feliz"],
    "que haces": ["que haces", "que estas haciendo", "que haces ahora"],
    "cuantos años tienes": ["cuantos años tienes", "que edad tienes"],
    "de donde eres": ["de donde eres", "de donde vienes"],
    "que te gusta hacer": ["que te gusta hacer", "cuales son tus hobbies", "que haces en tu tiempo libre"],
    "tienes amigos": ["tienes amigos", "eres solitario"],
    "te gusta la musica": ["te gusta la musica", "escuchas musica", "cual es tu cancion favorita"],
    "puedes contar un chiste": ["puedes contar un chiste", "dime un chiste", "cuenta un chiste"],
    "como te llamas": ["como te llamas", "cual es tu nombre", "dime tu nombre"],
    "dime una frase inspiradora": ["dime una frase inspiradora", "dame inspiracion", "dame una frase motivacional", "quiero inspirarme"]
};

// Normaliza el texto eliminando acentos, caracteres especiales y convirtiéndolo a minúsculas.
const normalizeText = (text) => text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\sñ]/g, "");

// Función para mostrar un mensaje de bienvenida
const displayWelcomeMessage = () => {
    const welcomeMessages = [
        "¡Bienvenido/a al Chatbot! Me llamo n-AI y estoy aquí para ayudarte. 😊",
        "Dí amigo y entra.🚪",
        "¡Hola! Soy n-AI, un chatbot creado por Ibai. ¿En qué puedo ayudarte hoy? 🤖",
        "¡Hola! ¿En qué puedo ayudarte hoy? 🌟"
    ];

    const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    displayMessage(randomWelcomeMessage, "bot-message");
    askForName(); // Pregunta por el nombre del usuario después de saludar
};

// Función para mostrar un mensaje
const displayMessage = (message, sender) => {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Desplazar hacia abajo
};

// Función para preguntar por el nombre del usuario
const askForName = () => {
    setTimeout(() => {
        displayMessage("¿Cómo te llamas?", "bot-message");
        displaySuggestions(["No quiero darte mi nombre"]); // Mostrar sugerencia
    }, 1000); // Retardo de 1 segundo antes de preguntar por el nombre
};

// Muestra las sugerencias como botones
const displaySuggestions = (suggestions) => {
    const suggestionContainer = document.getElementById("suggestions");
    suggestionContainer.innerHTML = ""; // Limpiar sugerencias previas
    suggestions.slice(0, 3).map(question => { // Mostrar solo tres sugerencias
        const suggestion = document.createElement("button");
        suggestion.textContent = question;
        suggestion.classList.add("suggestion-btn");
        suggestion.onclick = () => {
            document.getElementById("userInput").value = question;
            sendMessage();
        };
        suggestionContainer.appendChild(suggestion);
    });
};

// Obtiene la respuesta del bot basado en el mensaje del usuario
const getBotResponse = (userMessage) => {
    const normalizedMessage = normalizeText(userMessage);

    // Si el usuario selecciona "No quiero darte mi nombre"
    if (normalizedMessage === "no quiero darte mi nombre") {
        return {
            response: "Entiendo perfectamente, no te preocupes. No es necesario que me digas tu nombre. 😊",
            suggestions: Object.keys(questionMapping)
        };
    }

    // Si el usuario menciona su nombre directamente
    if (!userName) {
        userName = userMessage.trim();
        return { response: `Gracias por decirme tu nombre, ${userName}! 😊 ¿Cómo estás hoy?`, suggestions: [] };
    }

    // Recorre las variaciones de preguntas y verifica si el mensaje coincide
    for (const [key, variations] of Object.entries(questionMapping)) {
        if (variations.some(variation => normalizeText(variation) === normalizedMessage)) {
            let response = responses[key];
            // Si la respuesta es un array, selecciona una respuesta aleatoria
            if (Array.isArray(response)) {
                response = response[Math.floor(Math.random() * response.length)];
            }
            return { response, suggestions: getRandomSuggestions(Object.keys(questionMapping), 3) }; // Mostrar solo tres sugerencias
        }
    }

    // Si no se encuentra una respuesta, muestra un mensaje por defecto y sugerencias
    return { response: "Lo siento, no entiendo esa pregunta. ¿Puedes intentar otra cosa?", suggestions: getRandomSuggestions(Object.keys(questionMapping), 3) }; // Mostrar solo tres sugerencias
};

// Función para obtener sugerencias aleatorias
const getRandomSuggestions = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Envía el mensaje y muestra la respuesta del bot
const sendMessage = () => {
    const userMessage = document.getElementById("userInput").value.trim();
    if (!userMessage) return;
    displayMessage(userMessage, "user-message");
    document.getElementById("userInput").value = "";

    const normalizedMessage = normalizeText(userMessage);

    const { response, suggestions } = getBotResponse(normalizedMessage);
    displayMessage(response, "bot-message");

    // Mostrar sugerencias después de que el usuario haya enviado el primer mensaje
    displaySuggestions(suggestions);
};

// Enviar mensaje al presionar Enter
document.getElementById("userInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
});

// Espera a que el DOM se cargue antes de mostrar el mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    displayWelcomeMessage();
});
