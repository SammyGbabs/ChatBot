// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const landingPage = document.getElementById('landing-page');
const chatInterface = document.getElementById('chat-interface');
const startChatButton = document.getElementById('start-chat');
const backButton = document.getElementById('back-button');
const messagesContainer = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

// Chat state
let messages = [{
  type: 'bot',
  content: 'Hello! I am Agrosage, your agricultural assistant. How can I help you today?',
  timestamp: new Date()
}];

// Navigation functions
function showChat() {
  landingPage.classList.add('hidden');
  chatInterface.classList.remove('hidden');
}

function showLanding() {
  chatInterface.classList.add('hidden');
  landingPage.classList.remove('hidden');
}

// Format timestamp
function formatTimestamp(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// Message handling
function createMessageElement(message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${message.type}`;

  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'message-avatar';
  
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', message.type === 'user' ? 'message-square' : 'bot');
  avatarDiv.appendChild(icon);

  const messageBubble = document.createElement('div');
  messageBubble.className = 'message-bubble';

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  contentDiv.textContent = message.content;

  const timestampDiv = document.createElement('div');
  timestampDiv.className = 'message-timestamp';
  timestampDiv.textContent = formatTimestamp(message.timestamp);

  messageBubble.appendChild(contentDiv);
  messageBubble.appendChild(timestampDiv);

  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(messageBubble);

  return messageDiv;
}

function addMessage(message) {
  messages.push(message);
  const messageElement = createMessageElement(message);
  messagesContainer.appendChild(messageElement);
  lucide.createIcons();
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleUserMessage(content) {
  // Add user message with current timestamp
  const userMessage = {
    type: 'user',
    content,
    timestamp: new Date()
  };
  addMessage(userMessage);

  // Simulate bot response with a delay
  setTimeout(() => {
    const botMessage = {
      type: 'bot',
      content: "Thank you for your message. I'm a demo chatbot interface. In a real implementation, I would process your query and provide agricultural advice.",
      timestamp: new Date()
    };
    addMessage(botMessage);
  }, 1000);
}

// Event listeners
startChatButton.addEventListener('click', showChat);
backButton.addEventListener('click', showLanding);

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message) {
    handleUserMessage(message);
    userInput.value = '';
  }
});

// Initialize chat messages
messages.forEach(message => {
  messagesContainer.appendChild(createMessageElement(message));
});
lucide.createIcons();