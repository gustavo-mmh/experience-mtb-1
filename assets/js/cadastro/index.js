import { getExperienceMtbdocsID, subscribeToExperienceMtb } from "../firebase/experience-mtb.js";
import { checkboxTermos, formCadastro, limparDados, txtCidade, txtConfirmaSenha, txtDataNascimento, txtDocumento, txtEmail, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../ui.js';
import { bloqueioCadastro, validatePassword, VerificaModalidade } from "../validaForm.js";
import { file, getimg, metadata, newName, storageRef, uploadImagem } from "./storage/index.js";

export async function Cadastrar() {

    txtModalidade.addEventListener('change', () => {
        VerificaModalidade()
    })
    txtSenha.addEventListener('keyup', () => {
        validatePassword()
    })
    txtConfirmaSenha.addEventListener('keyup', () => {
        validatePassword()
    })
    checkboxTermos.addEventListener('click', () => {
        bloqueioCadastro()
    })
    getimg(txtFotoCard)
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
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtWhatsApp.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeRacing: txtModalidadeRacing.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: newName,
                        comprovante: '',
                        tipoPagmento: '',
                        comprovantePagamento: '',
                        status: 'Pendente',
                    }

                    uploadImagem(storageRef, file, metadata)
                    subscribeToExperienceMtb(subscription, ID);
                    alert("Cadastro Feito com Sucesso!!!")
                    limparDados()
                } else {
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtWhatsApp.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeChallenge: txtModalidadeChallenge.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: newName,
                        comprovante: '',
                        tipoPagmento: '',
                        comprovantePagamento: '',
                        status: 'Pendente',
                    }
                    uploadImagem(storageRef, file, metadata)
                    subscribeToExperienceMtb(subscription, ID);
                    alert("Cadastro Feito com Sucesso!!!")
                    limparDados()
                }
            }

        }
    }, false)
}