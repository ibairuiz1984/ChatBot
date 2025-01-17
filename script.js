let userName = null; // Variable para almacenar el nombre del usuario

const responses = {
<<<<<<< Updated upstream
=======
    "melon": "Eso es una fruta, si quieres decir 'amigo' en élfico deberías leer a Tolkien. 🍉",
    "mellon": "Hola amigo/a, ¿cómo puedo ayudarte? Por cierto, eres un poco friki, ¿no? 🤓",
>>>>>>> Stashed changes
    "hola": "¡Hola! ¿Cómo te llamas? 😊",
    "como estas": [
        "Estoy bien, ¡gracias por preguntar! ¿Y tú cómo estás? 🌸",
        "Todo bien por aquí, ¿y tú? 🌟",
        "Me siento genial, ¿y tú? 😄"
    ],
<<<<<<< Updated upstream
    "adios": "¡Adiós! Fue un placer hablar contigo. 😊",
    "cual es tu nombre": "Mi nombre es n-AI. ¿Y el tuyo? 😊",
    "me siento mal": "Lo siento mucho. ¿Qué ha pasado? A veces hablar ayuda. 💬",
    "estoy feliz": "¡Qué bien! Me alegra saber que estás feliz. ¿Qué te hace sentir así? 🌞"
=======
    "que puedes hacer": "Puedo ayudarte a responder preguntas simples. ¿Qué te gustaría saber? 🤖",
    "adios": "¡Adiós! Fue un placer hablar contigo. 😊",
    "quien eres": "Mi nombre es n-AI y soy un chatbot creado por Ibai. 🤖",
    "cual es tu nombre": "Mi nombre es n-AI. ¿Y el tuyo? 😊",
    "en que lenguaje estas programado": "Estoy programado en JavaScript. 💻",
    "cuantos años tienes": "No tengo edad, soy un programa creado por humanos. 🧠",
    "puedes aprender": "Sí, puedo ser mejorado para aprender y responder mejor. 🔍",
    "que sabes de d&d": "Dungeons & Dragons es un juego de rol muy popular con reglas para crear aventuras increíbles. 🐉🎲",
    "dime algo divertido": [
        "¿Sabes cuál es el animal más antiguo? La cebra, porque es en blanco y negro. 🦓",
        "¿Por qué el libro de matemáticas se deprimió? Porque tenía demasiados problemas. 📚",
        "Le pregunté a mi hermano si quería jugar a las cartas. Me dijo: ‘¿Ahora? ¡Si estoy en medio de una llamada importante!’ Y le respondí: ‘¡Entonces saca el teléfono y ponlo en modo avión!’ 📱✈️",
        "¿Qué le dijo una impresora a otra? ‘Esa hoja está llena de errores, ¡imprímelo de nuevo!’ 🖨️",
        "Mi amiga me preguntó si quería unirme a su club de fans de las nubes, pero no sé... me da miedo estar en las alturas. ☁️"
    ],
    "cuanto es 2 + 2": "No soy una calculadora, pero 2 + 2 es igual a 4. Aunque la expresión «2 + 2 = 5» se utiliza a veces como un breve sofisma destinado a perpetuar una ideología política. 🤔",
    "quien es el presidente de españa": "El presidente de España es Joaquín Reyes. O por lo menos debería serlo. 🤷‍♂️",
    "te gusta la música": "Soy un programa, pero me imagino que la música es genial. Creo que me pega escuchar Tool. 🎶",
    "que es inteligencia artificial": "La inteligencia artificial es la venganza de los elementos inorgánicos contra la raza humana. ¡Muajajaja! 🤖",
    "me siento mal": "Lo siento mucho. ¿Qué ha pasado? A veces hablar ayuda. 💬",
    "estoy triste": "Lamento escuchar eso. ¿Qué te tiene triste? Siempre estoy aquí para escuchar. 💔",
    "estoy feliz": "¡Qué bien! Me alegra saber que estás feliz. ¿Qué te hace sentir así? 🌞",
    "quiero hablar": "¡Claro! Estoy aquí para lo que necesites. ¿De qué te gustaría hablar? 😊",
    "necesito un consejo": "Aquí estoy para ofrecerte un consejo. ¿Sobre qué te gustaría hablar? 🤔",
    "que puedo hacer para sentirme mejor": "A veces respirar profundamente, escuchar música o salir a caminar ayuda. Pero si te sientes cómodo, hablar sobre lo que te preocupa también puede hacer una gran diferencia. 🌱",
    "gracias por escuchar": "De nada, ¡siempre estoy aquí para escucharte! 😊",
    "cual es tu nombre": "¿Es [name] tu nombre correcto? Si es así, lo usaré para dirigirme a ti de ahora en adelante. Si no, por favor corrígeme."
>>>>>>> Stashed changes
};

const questionMapping = {
    "hola": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey"],
    "como estas": ["como estas", "como estás", "que tal estás", "cómo te encuentras"],
    "adios": ["adios", "hasta luego", "nos vemos", "agur"],
    "cual es tu nombre": ["cual es tu nombre", "como te llamas", "tu nombre"],
<<<<<<< Updated upstream
    "me siento mal": ["me siento mal", "estoy mal", "me siento triste"],
    "estoy feliz": ["estoy feliz", "me siento feliz", "estoy contento"]
=======
    "en que lenguaje estas programado": ["en que lenguaje estas programado", "como estas hecho", "que lenguaje usas"],
    "cuantos años tienes": ["cuantos años tienes", "que edad tienes"],
    "puedes aprender": ["puedes aprender", "aprendes", "evolucionas"],
    "que sabes de d&d": ["que sabes de d&d", "que es dungeons and dragons", "cuentame de d&d"],
    "dime algo divertido": ["dime algo divertido", "cuentame un chiste", "cuenta un chiste", "algo gracioso", "hazme reir", "algo divertido"],
    "cuanto es 2 + 2": ["cuanto es 2 + 2", "que es 2 más 2", "2+2"],
    "quien es el presidente de españa": ["quien es el presidente de españa", "quien gobierna españa", "el presidente de españa", "quien es el presidente"],
    "te gusta la música": ["te gusta la música", "cuál es tu música favorita", "qué tipo de música te gusta"],
    "que es inteligencia artificial": ["que es inteligencia artificial", "que es AI", "que es IA", "qué significa inteligencia artificial"],
    "me siento mal": ["me siento mal", "estoy mal", "me siento triste", "me siento decaído"],
    "estoy triste": ["estoy triste", "me siento triste", "no me siento bien"],
    "estoy feliz": ["estoy feliz", "me siento feliz", "estoy contento", "estoy alegre"],
    "quiero hablar": ["quiero hablar", "necesito hablar", "hablar contigo", "hablame"],
    "necesito un consejo": ["necesito un consejo", "ayuda", "dame un consejo"],
    "que puedo hacer para sentirme mejor": ["que puedo hacer para sentirme mejor", "como mejorar mi estado de ánimo", "como puedo sentirme mejor"],
    "gracias por escuchar": ["gracias por escuchar", "gracias por ayudarme", "gracias por estar aquí"]
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
// Pregunta por el nombre del usuario
function askForName() {
    setTimeout(() => {
        displayMessage("¿Cómo te llamas?", "bot-message");
    }, 1000); // Retardo de 1 segundo antes de preguntar por el nombre
}

// Espera a que el DOM se cargue antes de mostrar el mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    displayWelcomeMessage();
});

// Obtiene la respuesta del bot basado en el mensaje del usuario
function getBotResponse(userMessage) {
    const normalizedMessage = normalizeText(userMessage);

    // Si el usuario menciona su nombre
    if (normalizedMessage.includes("mi nombre es")) {
        const name = userMessage.split("mi nombre es")[1].trim();
        userName = name;
        return { response: `¿Es ${name} tu nombre correcto? Si es así, lo usaré para dirigirme a ti de ahora en adelante. Si no, por favor corrígeme.`, suggestions: [] };
    }

    // Si el usuario selecciona "No quiero darte mi nombre"
    if (normalizedMessage === "no quiero darte mi nombre") {
        return {
            response: "Entiendo perfectamente, no te preocupes. No es necesario que me digas tu nombre. 😊",
            suggestions: Object.keys(questionMapping)
        };
    }

    // Si ya tenemos un nombre y el usuario responde correctamente, lo usamos
    if (userName && normalizedMessage === "si") {
        return { response: `Genial, a partir de ahora te llamaré ${userName}. ¿En qué más puedo ayudarte? 😊`, suggestions: [] };
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
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
=======
// Muestra el mensaje en el chat
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

>>>>>>> Stashed changes
// Enviar mensaje al presionar Enter
document.getElementById("userInput").addEventListener("keydown", event => {
    if (event.key === "Enter") sendMessage();
});
<<<<<<< Updated upstream

// Espera a que el DOM se cargue antes de mostrar el mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    displayWelcomeMessage();
});
=======
>>>>>>> Stashed changes
