import { getExperienceMtbdocsID, subscribeToExperienceMtb, uploadImagem } from "../firebase/experience-mtb.js";
import { login } from "../login/index.js";
import { checkboxTermos, formCadastro, limparDados, loading, loginDocumento, loginPais, loginPassword, txtCategoria, txtCidade, txtConfirmaSenha, txtDataNascimento, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../ui.js';
import { bloqueioCadastro, calculaIdade, filtraCategoria, filtraCategoriaSexo, validatePassword, VerificaModalidade } from "../validaForm.js";
import { file, getImgRef, imgRef, metadata } from "./storage/getImg.js";
// import { file, getimg, metadata, newName, storageRef } from "./storage/index.js";
let fotoCard1 = ''
export async function Cadastrar() {

    txtModalidade.addEventListener('change', () => {
        VerificaModalidade()
    })
    txtSenha.addEventListener('keyup', () => {
        validatePassword(formCadastro, txtConfirmaSenha, txtSenha)
    })
    txtConfirmaSenha.addEventListener('keyup', () => {
        validatePassword(formCadastro, txtConfirmaSenha, txtSenha)
    })
    checkboxTermos.addEventListener('click', () => {
        bloqueioCadastro()
    })
    txtDataNascimento.addEventListener('change', () => {
        let idade = calculaIdade(txtDataNascimento.value)
        filtraCategoria(idade)
    })
    txtCategoria.addEventListener('change', () => {
        let cat = txtCategoria.value
        filtraCategoriaSexo(cat)
    })
    getImgRef(txtFotoCard)
    formCadastro.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formCadastro.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            formCadastro.classList.add('was-validated')
        }
        else {
            const ID = txtPais.value + txtDocumento.value
            // Previne a submissão do formulário:
            const docsID = await getExperienceMtbdocsID()
            if (docsID.includes(ID) == true) {
                alert("Esse Documento já existe")
                txtDocumento.focus();
            }
            else {
                if (txtModalidade.value == "Racing") {
                    if (imgRef != null) {
                        fotoCard1 = imgRef
                    }
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtWhatsApp.value,
                        categoria: txtCategoria.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeRacing: txtModalidadeRacing.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: fotoCard1,
                        comprovantePagamento: '',
                        status: 'Pendente',
                    }
                    subscribeToExperienceMtb(subscription, ID);
                    loading.hidden = false
                    if (imgRef != null) {
                        let ref = `images/${imgRef}`
                        loginPais.value = txtPais.value
                        loginDocumento.value = txtDocumento.value
                        loginPassword.value = txtSenha.value
                        let redirec = 'modal'
                        uploadImagem(file, ref, metadata, redirec)
                        limparDados()
                    } else {
                        loginPais.value = txtPais.value
                        loginDocumento.value = txtDocumento.value
                        loginPassword.value = txtSenha.value
                        setTimeout(function () {
                            loading.hidden = false
                        }, 2000);

                        $("#cadastroModal").modal("hide");
                        $("#loginModal").modal("show");
                        limparDados()
                    }
                    alert("Cadastro Feito com Sucesso!!!")

                } else {
                    if (imgRef != null) {
                        fotoCard1 = imgRef
                    }
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtWhatsApp.value,
                        categoria: txtCategoria.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeChallenge: txtModalidadeChallenge.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: fotoCard1,
                        comprovantePagamento: '',
                        status: 'Pendente',
                    }
                    subscribeToExperienceMtb(subscription, ID);
                    loading.hidden = false
                    if (imgRef != null) {
                        let ref = `images/${imgRef}`
                        loginPais.value = txtPais.value
                        loginDocumento.value = txtDocumento.value
                        loginPassword.value = txtSenha.value
                        let redirec = 'modal'
                        uploadImagem(file, ref, metadata, redirec)
                        limparDados()
                    } else {
                        loginPais.value = txtPais.value
                        loginDocumento.value = txtDocumento.value
                        loginPassword.value = txtSenha.value
                        setTimeout(function () {
                            loading.hidden = false
                        }, 2000);

                        $("#cadastroModal").modal("hide");
                        $("#loginModal").modal("show");
                        limparDados()
                    }
                    alert("Cadastro Feito com Sucesso!!!")
                }
            }

        }
    }, false)
}