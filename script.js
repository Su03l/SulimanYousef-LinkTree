const links = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    url: "https://wa.me/966590128804",
    icon: "message-circle",
  },
  {
    id: "twitter",
    title: "Twitter/X",
    url: "https://twitter.com/Su05l",
    icon: "twitter",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/Su03l",
    icon: "github",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/suliaman-yousef-36265a320",
    icon: "linkedin",
  },
  {
    id: "cv",
    title: "CV",
    url: "SULIMANYOUSEF.pdf",
    icon: "file-text",
  },
  {
    id: "profile",
    title: "Personal Profile",
    url: "https://sulimanyusef.vercel.app/",
    icon: "user",
  },
];

function buildLinkCard({ id, title, url, icon }) {
  const card = document.createElement("div");
  card.className = `group relative border-2 transition-all duration-300 rounded-2xl overflow-hidden 
    bg-white border-black hover:bg-black hover:text-white`;

  const btn = document.createElement("button");
  btn.className = "w-full p-4 flex items-center space-x-4 text-left";
  btn.onclick = () => window.open(url, "_blank");

  const iconWrap = document.createElement("div");
  iconWrap.className = `p-3 rounded-xl transition-all duration-300 group-hover:scale-110 
    bg-black text-white group-hover:bg-white group-hover:text-black`;
  iconWrap.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
  btn.appendChild(iconWrap);

  const titleSpan = document.createElement("span");
  titleSpan.className = `flex-1 font-semibold text-lg transition-colors duration-300 
    text-black group-hover:text-white`;
  titleSpan.textContent = title;
  btn.appendChild(titleSpan);

  const copyBtn = document.createElement("button");
  copyBtn.className = `p-2 rounded-lg transition-all duration-300 
    bg-black/10 hover:bg-black/20 text-black group-hover:text-white`;
  copyBtn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i>`;

  copyBtn.onclick = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-green-500 check-animate"></i>`;
      lucide.createIcons();

      // Show Copied Message
      const copiedMessage = document.createElement("div");
      copiedMessage.textContent = "✅ Copied to clipboard!";
      copiedMessage.className = `
        absolute bottom-[-60px] left-1/2 -translate-x-1/2 
        text-white text-sm font-semibold px-4 py-2 
        bg-black rounded-xl shadow-2xl opacity-0 
        transform scale-95 transition-all duration-300 
        border border-white 
        animate-pop-up z-50
      `;
      card.appendChild(copiedMessage);

      setTimeout(() => copiedMessage.classList.add("opacity-100", "scale-100"), 50);
      setTimeout(() => {
        copiedMessage.classList.remove("opacity-100");
        setTimeout(() => copiedMessage.remove(), 300);
      }, 2000);

      setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy" class="w-4 h-4"></i>`;
        lucide.createIcons();
      }, 2000);
    } catch {
      console.error("Copy failed.");
    }
  };

  btn.appendChild(copyBtn);
  card.appendChild(btn);
  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const linksContainer = document.getElementById("links");
  links.forEach((link) => {
    const card = buildLinkCard(link);
    linksContainer.appendChild(card);
  });

  lucide.createIcons();
});
