document.addEventListener("DOMContentLoaded", function() {
    console.log("Concept Cut Linktree Carregado!");
    
    // Adicionando tracking de cliques
    const buttons = document.querySelectorAll(".link-button");
    buttons.forEach(button => {
      button.addEventListener("click", function(e) {
        console.log("Clique em: " + this.innerText.trim());
        
        // Efeito de clique
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
    
    // Atualizar hora na barra de status
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      document.querySelector('.time').textContent = `${hours}:${minutes}`;
    }
    
    updateTime();
    setInterval(updateTime, 60000);
  });