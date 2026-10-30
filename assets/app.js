(() => {
  const $ = (selector) => document.querySelector(selector);
  const terminal = $("#terminal");
  const input = $("#command-input");
  const form = $("#command-form");
  const modules = [
    { name: "CORE", status: "ativo", description: "Roteador de comandos locais" },
    { name: "MEMORY", status: "planejado", description: "Memória persistente e contexto" },
    { name: "SCAN", status: "planejado", description: "Pesquisa e coleta de informações" },
    { name: "ANALYTICS", status: "planejado", description: "Análise de dados e relatórios" },
    { name: "VOICE", status: "planejado", description: "Entrada e saída de voz" },
    { name: "ACTION + GUARD", status: "planejado", description: "Execução autorizada e segurança" }
  ];

  function line(text, type = "response-line") {
    const div = document.createElement("div");
    div.className = `terminal-line ${type}`;
    div.textContent = text;
    terminal.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function execute(raw) {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    line(`ATLAS › ${raw}`, "user-line");
    let response;
    switch (command) {
      case "/ajuda":
      case "ajuda":
      case "help":
        response = "Comandos disponíveis: /ajuda, /status, /modulos, /sobre e /limpar.";
        break;
      case "/status":
      case "status":
        response = "CORE: ativo localmente. MEMORY, SCAN, ANALYTICS, VOICE e ACTION: ainda não conectados. Nenhum serviço externo foi chamado.";
        break;
      case "/modulos":
      case "modulos":
        response = "Módulos: " + modules.map(m => `${m.name} (${m.status})`).join(" · ");
        break;
      case "/sobre":
      case "sobre":
        response = "ATLAS Core 0.1.0 — protótipo independente. Esta versão roteia comandos locais no navegador; ainda não é um assistente de IA conectado.";
        break;
      case "/limpar":
      case "limpar":
        terminal.innerHTML = "";
        response = "Terminal limpo. Core continua ativo.";
        break;
      default:
        response = "Comando não reconhecido. Este Core ainda aceita apenas comandos internos. Digite /ajuda para consultar a lista.";
    }
    if (response) line(response);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    execute(input.value);
    input.value = "";
    input.focus();
  });

  document.querySelectorAll("[data-command]").forEach(button => {
    button.addEventListener("click", () => execute(button.dataset.command));
  });

  $("#focus-command").addEventListener("click", () => {
    $("#command-panel").scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus();
  });
  $("#core-command").addEventListener("click", () => {
    showView("overview");
    execute("/status");
    $("#command-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  function showView(view) {
    document.querySelectorAll(".view").forEach(el => el.classList.add("hidden"));
    $(`#${view}-view`).classList.remove("hidden");
    document.querySelectorAll(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === view));
    $("#page-title").textContent = ({ overview: "Visão geral", core: "Core", modules: "Módulos" })[view];
  }
  document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));

  function updateClock() {
    $("#clock").textContent = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date());
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
