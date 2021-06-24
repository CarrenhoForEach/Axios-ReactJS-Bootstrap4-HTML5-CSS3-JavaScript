import React from "react";
import "./estilo.css";


function Modalc() {
    return (
        <div className="modal fade" id="contato-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <dialog className="modal-content">
                    <header className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Entre Em Contato</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </header>
                    <main className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="formGroupExampleInput">Nome Completo</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite aqui seu nome completo"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Endereço de e-mail</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Deixe seu comentário</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Insira o seu comentário..." rows="3"></textarea>
                            </div>
                        </form>
                    </main>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" className="btn botao-cor">Enviar</button>
                    </div>
                </dialog>
            </div>
        </div>

    );
}

export default Modalc;