var form = document.getElementsByTagName('form')[0];
const txtPais = document.getElementById('txtPais');
const txtNome = document.getElementById('txtNome');
const txtDocumento = document.getElementById('txtDocumento');
const txtDataNascimento = document.getElementById('txtDataNascimento');
const txtEmail = document.getElementById('txtEmail');
const txtCidade = document.getElementById('txtCidade');
const txtWhatsApp = document.getElementById('txtWhatsApp');
const txtTamanhoCamiseta = document.getElementById('txtTamanhoCamiseta');
const txtModalidade = document.getElementById('txtModalidade');
const txtModalidadeRacing = document.getElementById('txtModalidadeRacing');
const txtModalidadeChallenge = document.getElementById('txtModalidadeChallenge');
const txtNomeEquipe = document.getElementById('txtNomeEquipe');
const txtSenha = document.getElementById('txtSenha');
const txtFotoCard = document.getElementById('txtFotoCard');
const btnCadastrar = document.getElementById('btnCadastrar');
const modalidade = document.getElementById("txtModalidade");
const racing = document.getElementById("racing");
const challenge = document.getElementById("challenge");
const input = document.querySelector('input');

function VerificaModalidade() {
    if (modalidade.value == "Racing") {
        racing.style.display = "block";
        var required = document.createAttribute("required");
        txtModalidadeRacing.setAttributeNode(required);
        challenge.style.display = "none";
        txtModalidadeChallenge.removeAttribute("required");
    } else {
        challenge.style.display = "block";
        var required = document.createAttribute("required");
        txtModalidadeChallenge.setAttributeNode(required);
        racing.style.display = "none";
        txtModalidadeRacing.removeAttribute("required");
    }
}

txtEmail.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // email field is valid.
    if (txtEmail.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        error.innerHTML = ""; // Reset the content of the message
        error.className = "error"; // Reset the visual state of the message
    }
}, false);