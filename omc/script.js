document.addEventListener('DOMContentLoaded', () => {
    const waBtn = document.getElementById('wa-btn');
    const waChatWindow = document.getElementById('wa-chat-window');
    const waClose = document.getElementById('wa-close');
    const waMessages = document.getElementById('wa-messages');
    const waInput = document.getElementById('wa-input');
    const waSend = document.getElementById('wa-send');
    const waStatus = document.getElementById('wa-status');

    let chatState = 0; // 0: not opened, 1: first message sent, 2: waiting for user reply, 3: final message sent

    const typingHTML = `
        <div class="msg-bubble msg-in msg-typing" id="typing-indicator">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    `;

    const scrollToBottom = () => {
        waMessages.scrollTop = waMessages.scrollHeight;
    };

    const setStatus = (status) => {
        waStatus.textContent = status;
    };

    const addMessage = (text, type = 'in') => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `msg-bubble msg-${type}`;
        msgDiv.textContent = text;
        waMessages.appendChild(msgDiv);
        scrollToBottom();
    };

    const showTyping = () => {
        setStatus('digitando...');
        waMessages.insertAdjacentHTML('beforeend', typingHTML);
        scrollToBottom();
    };

    const hideTyping = () => {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
        setStatus('Online');
    };

    const initChatFlow = () => {
        if (chatState === 0) {
            chatState = 1;
            // Clear initial
            waMessages.innerHTML = '';
            
            // Show typing indicator for 2 seconds
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                addMessage('Olá, como posso ajudar?');
                chatState = 2; // Waiting for user input
            }, 2000);
        }
    };

    const handleUserSend = () => {
        const userText = waInput.value.trim();
        if (!userText || chatState !== 2) return;

        // Add user message
        addMessage(userText, 'out');
        waInput.value = '';
        chatState = 3;

        // Show typing indicator for Laione's reply
        setTimeout(() => {
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                addMessage('Maravilha! Vamos te ajudar. Faz assim me chama no WhatsApp que estou lá te esperando');
                
                // Show redirect button
                setTimeout(() => {
                    const btnContainer = document.createElement('div');
                    btnContainer.className = 'msg-bubble msg-in';
                    btnContainer.style.background = 'transparent';
                    btnContainer.style.boxShadow = 'none';
                    btnContainer.style.padding = '0';
                    btnContainer.style.marginTop = '10px';
                    
                    const encodedMsg = encodeURIComponent("Olá, Laione " + userText);
                    const waUrl = `https://wa.me/5591984938236?text=${encodedMsg}`;
                    
                    btnContainer.innerHTML = `<a href="${waUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #fff; padding: 10px 20px; border-radius: 25px; text-decoration: none; font-weight: bold; font-size: 0.95rem; box-shadow: 0 4px 6px rgba(37, 211, 102, 0.3);">Chamar no WhatsApp</a>`;
                    
                    waMessages.appendChild(btnContainer);
                    scrollToBottom();
                }, 1000);

            }, 2500);
            
        }, 500);
    };

    // Event Listeners
    waBtn.addEventListener('click', () => {
        waChatWindow.classList.remove('hidden');
        waBtn.style.display = 'none';
        initChatFlow();
    });

    waClose.addEventListener('click', () => {
        waChatWindow.classList.add('hidden');
        waBtn.style.display = 'flex';
    });

    waSend.addEventListener('click', handleUserSend);

    waInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserSend();
        }
    });

    // Also connect Hero CTA to open widget (Removed as button is removed)
});
