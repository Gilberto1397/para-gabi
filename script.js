function showMessagesSlowly() {
    const messages = document.getElementsByTagName('p');
    const tempo = 1500;
    let soma = 1500;

console.log(messages);
    for (const message of messages) {
        setTimeout(() => {
            message.style.cssText = 'opacity: 1';
        }, tempo + soma);
        soma+=1000;
    }
}

showMessagesSlowly();

