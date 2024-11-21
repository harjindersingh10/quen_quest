const chatMessages = document.getElementById('chatMessages');

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        displayMessage(userInput, 'user');
        document.getElementById('userInput').value = '';
        getBotResponse(userInput);
    }
}

function displayMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
    // Replace this with an API call to an AI service
    const response = mockChatbotResponse(input);
    displayMessage(response, 'bot');
}

function mockChatbotResponse(input) {
    // Replace with AI model logic
    return "I'm here to help with your questions!";
}
