document.getElementById('enterBtn').addEventListener('click', () => {
  const code = document.getElementById('accessCode').value.trim();
  const message = document.getElementById('message');

  if (!code) {
    message.textContent = "Access code is required.";
    return;
  }

  message.textContent = "Verifying...";

  // في الربط الحقيقي، هتستبدل هذا الجزء بالتواصل مع الباك إند عبر fetch
  setTimeout(() => {
    message.textContent = "✔ Code accepted (this is just a placeholder)";
    // window.location.href = "https://decoded-link.com";
  }, 1000);
});
