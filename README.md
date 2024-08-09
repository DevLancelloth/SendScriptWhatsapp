# Script de Envio Automático de Mensagens

Este script automatiza o envio de mensagens em plataformas de mensagens baseadas na web, como o WhatsApp Web. Ele está configurado para enviar a mensagem "Eu te amo!!❤️" a cada 1 hora.

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instruções de Uso](#instruções-de-uso)
- [Personalização](#personalização)
  - [Alterando a Mensagem](#alterando-a-mensagem)
  - [Alterando o Intervalo de Envio](#alterando-o-intervalo-de-envio)
- [Considerações Importantes](#considerações-importantes)
- [Conclusão](#conclusão)

## Introdução

Automatizar tarefas repetitivas pode economizar tempo e garantir consistência. Este script em JavaScript permite que você envie mensagens pré-definidas automaticamente em intervalos regulares usando a interface web de aplicativos de mensagens. Originalmente projetado para o WhatsApp Web, ele pode ser adaptado para outras plataformas com estruturas DOM semelhantes.

## Pré-requisitos

- **Navegador Web**: Utilize um navegador moderno como Google Chrome, Mozilla Firefox ou Microsoft Edge.
- **Acesso à Plataforma de Mensagens**: Certifique-se de que está logado e possui uma conversa aberta na plataforma de mensagens onde deseja utilizar o script (por exemplo, [WhatsApp Web](https://web.whatsapp.com/)).

## Instruções de Uso

1. **Abra a Conversa Desejada**:

   - Navegue até a plataforma de mensagens e abra a conversa onde deseja que as mensagens sejam enviadas automaticamente.

2. **Acesse o Console do Desenvolvedor**:

   - **Google Chrome**:
     - Windows/Linux: Pressione `Ctrl + Shift + J`.
     - macOS: Pressione `Cmd + Option + J`.
   - **Mozilla Firefox**:
     - Windows/Linux: Pressione `Ctrl + Shift + K`.
     - macOS: Pressione `Cmd + Option + K`.
   - **Microsoft Edge**:
     - Windows/Linux: Pressione `Ctrl + Shift + I` e selecione a aba "Console".
     - macOS: Pressione `Cmd + Option + I` e selecione a aba "Console".

3. **Cole o Script no Console**:

   Copie e cole o seguinte código no console:

   ```javascript
   async function enviarScript(scriptText){
       const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
       const main = document.querySelector("#main");
       const textarea = main.querySelector(`div[contenteditable="true"]`);
   
       if(!textarea) throw new Error("Não há uma conversa aberta");
   
       for(const line of lines){
           console.log(line);
   
           textarea.focus();
           document.execCommand('insertText', false, line);
           textarea.dispatchEvent(new Event('change', {bubbles: true}));
   
           setTimeout(() => {
               (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
           }, 100);
   
           if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
       }
   
       return lines.length;
   }
   
   // Função para enviar a mensagem "Eu te amo!!❤️"
   function enviarMensagemDeAmor() {
       enviarScript(`Eu te amo!!❤️`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error);
   }
   
   // Definindo o intervalo de 1 hora (3600000 milissegundos) para enviar a mensagem repetidamente
   setInterval(enviarMensagemDeAmor, 3600000);
   
   // Enviar a primeira mensagem imediatamente
   enviarMensagemDeAmor();
   ```

4. **Execute o Script**:

   Após colar o código, pressione `Enter` para executá-lo. A mensagem "Eu te amo!!❤️" será enviada imediatamente e, subsequentemente, a cada 1 hora.

## Personalização

Você pode ajustar o script para atender às suas necessidades específicas, alterando a mensagem enviada e o intervalo de envio.

### Alterando a Mensagem

Para modificar a mensagem que será enviada:

1. **Localize a Função de Envio de Mensagem**:

   Encontre a seguinte parte do código:

   ```javascript
   enviarScript(`Eu te amo!!❤️`)
   ```

2. **Substitua o Conteúdo da Mensagem**:

   Altere o texto dentro das crases (``) pela mensagem desejada. Por exemplo:

   ```javascript
   enviarScript(`Lembrete: Reunião às 15h.`)
   ```

3. **Salve e Execute**:

   Após fazer a alteração, execute novamente o script no console.

### Alterando o Intervalo de Envio

Para modificar a frequência com que as mensagens são enviadas:

1. **Localize a Função `setInterval`**:

   Encontre a seguinte linha:

   ```javascript
   setInterval(enviarMensagemDeAmor, 3600000);
   ```

2. **Substitua o Valor do Intervalo**:

   O segundo parâmetro da função `setInterval` representa o intervalo em milissegundos. Altere-o conforme desejado. Aqui estão alguns exemplos comuns:

   - **10 Segundos**: `10000`
   - **30 Minutos**: `1800000`
   - **1 Hora**: `3600000`
   - **24 Horas**: `86400000`

   Por exemplo, para enviar a mensagem a cada 30 minutos:

   ```javascript
   setInterval(enviarMensagemDeAmor, 1800000);
   ```

3. **Salve e Execute**:

   Após ajustar o intervalo, execute novamente o script no console.

## Considerações Importantes

- **Estabilidade do Script**: Este script depende da estrutura DOM da plataforma de mensagens. Alterações na interface da plataforma podem exigir ajustes no script.

- **Uso Responsável**: Utilize este script de maneira ética e responsável. Evite spam e respeite as diretrizes e termos de uso da plataforma de mensagens.

- **Interrupção do Script**: Para interromper a execução contínua do script, você pode:

  - **Fechar a Aba ou Janela do Navegador**: Simples e eficaz.
  
  - **Atualizar a Página**: Isso reiniciará o estado da página, interrompendo o script.
  
  - **Usar `clearInterval`**: Se você atribuir o retorno de `setInterval` a uma variável, pode posteriormente usá-la para parar o intervalo. Por exemplo:

    ```javascript
    const intervalo = setInterval(enviarMensagemDeAmor, 3600000);
    // Para parar o intervalo:
    clearInterval(intervalo);
    ```

- **Testes Pré-Operacionais**: Antes de implementar o script em uma conversa real, teste-o em uma conversa privada ou com um contato de confiança para garantir que funciona conforme o esperado.

## Conclusão

Este script oferece uma maneira simples e eficaz de automatizar o envio de mensagens em plataformas de mensagens baseadas na web. Com algumas personalizações, você pode adaptá-lo para diversas finalidades, desde lembretes automatizados até mensagens programadas. Lembre-se sempre de usar essa ferramenta de maneira ética e responsável.

Se tiver dúvidas ou precisar de assistência adicional, não hesite em procurar por recursos adicionais ou suporte especializado.
