// Inicializa o EmailJS com sua chave pública
emailjs.init('ocQyrnfRuER8Oa-dc');

// Captura o botão de envio
const btn = document.getElementById('button');

// Lida com o envio do formulário
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Altera o valor do botão enquanto o e-mail está sendo enviado
    btn.value = 'Enviando...';

    // IDs do serviço e do template
    const serviceID = 'service_ik7rvam';
    const templateID = 'template_yjwuh7r';

    // Envia o formulário usando o serviço e template do EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar E-mail'; // Restaura o botão ao estado original
            alert('Mensagem enviada com sucesso!'); // Alerta de sucesso
            document.getElementById('form').reset(); // Limpa o formulário
        })
        .catch(err => {
            btn.value = 'Enviar E-mail'; // Restaura o botão em caso de erro
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.'); // Alerta de erro
            console.error('Erro:', err);
        });
});
