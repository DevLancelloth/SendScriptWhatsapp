async function enviarScript(scriptText) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line);
  const main = document.querySelector("#main");
  const textarea = main.querySelector(`div[contenteditable="true"]`);

  if (!textarea) throw new Error("Não há uma conversa aberta");

  for (const line of lines) {
    console.log(line);

    textarea.focus();
    document.execCommand("insertText", false, line);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      (
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click();
    }, 100);

    if (lines.indexOf(line) !== lines.length - 1)
      await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return lines.length;
}

function enviarMensagemDeAmor() {
  enviarScript(`Eu te amo!!❤️`)
    .then((e) => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
}

setInterval(enviarMensagemDeAmor, 3600000);

enviarMensagemDeAmor();
