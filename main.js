document.getElementById('enterBtn').addEventListener('click', async () => {
  const code = document.getElementById('accessCode').value.trim();
  const message = document.getElementById('message');

  if (!code) {
    message.textContent = "Access code is required.";
    return;
  }

  message.textContent = "Verifying...";

  try {
    const response = await fetch('https://rico-secure-backend.onrender.com/verify-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: code,
        gameVersion: 'tool'
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      message.textContent = result.error || "Verification failed.";
      return;
    }

    message.textContent = "Access granted. Redirecting...";
    window.location.href = result.url;

  } catch (err) {
    console.error(err);
    message.textContent = "Connection error. Please try again.";
  }
});
