//  functionality here
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-message');

sendButton.addEventListener('click', () => {
  // Get the user's message
  const message = userInput.value;

  // Clear the input field
  userInput.value = '';

  // Simulate a chat response from QSAAR
  const chatText = document.querySelector('.chat-text');
  chatText.textContent = `You: ${message}`;

  // Add a new chat bubble for QSAAR's response
  const newChatBubble = document.createElement('p');
  newChatBubble.classList.add('chat-text');
  newChatBubble.textContent = 'QSAAR: Thanks for your message! I\'m still under development, but I\'m learning more every day.';
  chatText.parentNode.insertBefore(newChatBubble, chatText.nextSibling);
});

