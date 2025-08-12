function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    showToast("تم نسخ الرابط!");
  });
}

function showToast(message) {
  const toast = document.getElementById("custom-toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}
