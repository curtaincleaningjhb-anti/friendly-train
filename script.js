document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('smsForm');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const statusDiv = document.getElementById('status');
  const sendButton = document.getElementById('sendButton');

  messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    charCount.textContent = `${length} / 160 characters`;
    
    if (length > 160) {
      charCount.style.color = '#e74c3c';
    } else {
      charCount.style.color = '#7f8c8d';
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const message = messageInput.value.trim();

    if (!phoneNumber || !message) {
      showStatus('Please fill in all fields', 'error');
      return;
    }

    if (!phoneNumber.startsWith('+')) {
      showStatus('Phone number must include country code (e.g., +1234567890)', 'error');
      return;
    }

    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    showStatus('Sending SMS...', 'info');

    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: phoneNumber,
          message: message
        })
      });

      const data = await response.json();

      if (response.ok) {
        showStatus('SMS sent successfully!', 'success');
        form.reset();
        charCount.textContent = '0 / 160 characters';
      } else {
        showStatus(`Error: ${data.error || 'Failed to send SMS'}`, 'error');
      }
    } catch (error) {
      showStatus(`Error: ${error.message}`, 'error');
    } finally {
      sendButton.disabled = false;
      sendButton.textContent = 'Send SMS';
    }
  });

  function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    statusDiv.style.display = 'block';
    
    if (type === 'success') {
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 5000);
    }
  }
});
