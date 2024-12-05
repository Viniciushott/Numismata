document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !email || !mensagem) {
            event.preventDefault();
            alert("Todos os campos são obrigatórios!");
        } else {
            alert("Mensagem enviada com sucesso!");
        }
    });
});