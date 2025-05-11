const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');

    function addMessage(content, role) {
      const msg = document.createElement('div');
      msg.className = `message ${role}`;
      msg.textContent = content;
      chatBox.appendChild(msg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
      const message = userInput.value.trim();
      if (!message) return;

      addMessage(message, 'user');
      userInput.value = '';

      // Simulation IA
      setTimeout(() => {
        addMessage(`Tu as dit : "${message}"`, 'bot');
      }, 600);
    }