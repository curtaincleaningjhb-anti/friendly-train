document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${targetTab}Tab`).classList.add('active');
    });
  });

  initSMSTab();
  initEmailTab();
});

function initSMSTab() {
  const form = document.getElementById('smsForm');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const statusDiv = document.getElementById('status');
  const sendButton = document.getElementById('sendButton');
  const messageHistory = document.getElementById('messageHistory');

  loadMessageHistory();

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
        loadMessageHistory();
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

  async function loadMessageHistory() {
    try {
      const response = await fetch('/api/messages');
      const messages = await response.json();
      
      if (messages.length === 0) {
        messageHistory.innerHTML = '<p class="no-messages">No messages sent yet</p>';
      } else {
        displayMessages(messages);
      }
    } catch (error) {
      messageHistory.innerHTML = '<p class="error">Failed to load message history</p>';
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function displayMessages(messages) {
    messageHistory.innerHTML = messages.map(msg => {
      const date = new Date(msg.created_at);
      const formattedDate = date.toLocaleString();
      const safePhoneNumber = escapeHtml(msg.phone_number);
      const safeMessage = escapeHtml(msg.message);
      const safeStatus = escapeHtml(msg.status);
      
      return `
        <div class="message-item">
          <div class="message-header">
            <span class="phone-number">${safePhoneNumber}</span>
            <span class="message-date">${formattedDate}</span>
          </div>
          <div class="message-body">${safeMessage}</div>
          <div class="message-footer">
            <span class="message-status status-${safeStatus}">${safeStatus}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function initEmailTab() {
  const emailForm = document.getElementById('emailForm');
  const emailStatus = document.getElementById('emailStatus');
  const sendEmailButton = document.getElementById('sendEmailButton');
  const emailHistory = document.getElementById('emailHistory');

  loadEmailHistory();

  emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const recipientEmail = document.getElementById('recipientEmail').value.trim();
    const subject = document.getElementById('emailSubject').value.trim();
    const message = document.getElementById('emailMessage').value.trim();

    if (!recipientEmail || !subject || !message) {
      showEmailStatus('Please fill in all fields', 'error');
      return;
    }

    sendEmailButton.disabled = true;
    sendEmailButton.textContent = 'Sending...';
    showEmailStatus('Sending email...', 'info');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: subject,
          message: message
        })
      });

      const data = await response.json();

      if (response.ok) {
        showEmailStatus('Email sent successfully!', 'success');
        emailForm.reset();
        loadEmailHistory();
      } else {
        showEmailStatus(`Error: ${data.error || 'Failed to send email'}`, 'error');
      }
    } catch (error) {
      showEmailStatus(`Error: ${error.message}`, 'error');
    } finally {
      sendEmailButton.disabled = false;
      sendEmailButton.textContent = 'Send Email';
    }
  });

  function showEmailStatus(message, type) {
    emailStatus.textContent = message;
    emailStatus.className = `status ${type}`;
    emailStatus.style.display = 'block';
    
    if (type === 'success') {
      setTimeout(() => {
        emailStatus.style.display = 'none';
      }, 5000);
    }
  }

  async function loadEmailHistory() {
    try {
      const response = await fetch('/api/emails');
      const emails = await response.json();
      
      if (emails.length === 0) {
        emailHistory.innerHTML = '<p class="no-messages">No emails sent yet</p>';
      } else {
        displayEmails(emails);
      }
    } catch (error) {
      emailHistory.innerHTML = '<p class="error">Failed to load email history</p>';
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function displayEmails(emails) {
    emailHistory.innerHTML = emails.map(email => {
      const date = new Date(email.created_at);
      const formattedDate = date.toLocaleString();
      const safeEmail = escapeHtml(email.recipient_email);
      const safeSubject = escapeHtml(email.subject);
      const safeMessage = escapeHtml(email.message);
      const safeStatus = escapeHtml(email.status);
      
      return `
        <div class="message-item">
          <div class="message-header">
            <span class="phone-number">${safeEmail}</span>
            <span class="message-date">${formattedDate}</span>
          </div>
          <div class="message-body">
            <strong>Subject:</strong> ${safeSubject}<br>
            ${safeMessage}
          </div>
          <div class="message-footer">
            <span class="message-status status-${safeStatus}">${safeStatus}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}
