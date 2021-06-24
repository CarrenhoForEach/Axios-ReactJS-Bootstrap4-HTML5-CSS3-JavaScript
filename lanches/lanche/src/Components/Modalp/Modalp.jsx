import React from "react";
import "./estilo.css";


function Modalp() {
    return (
        <div className="modal fade" id="personalizacao-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <dialog className="modal-content">
                    <header className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Defina a quantidade de cada item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </header>
                    <main className="modal-body">
                        <form action="confirmar.html" method="GET">
                            <div className="">
                                <label className="forca">Alface:</label>
                                <input type="text" name="alfacequantidade" className="" id="inlineFormCustomSelectPref" placeholder="Digite a quantidade"/>
                            </div>

                            <div className="">
                                <label className="forca">Bacon:</label>
                                <input name="baconquantidade" className="" id="inlineFormCustomSelectPref" placeholder="Digite a quantidade"/>
                            </div>
                            <div className="">
                                <label className="forca">Hambúrguer:</label>
                                <input type="text" name="hamburguerquantidade" className="" id="inlineFormCustomSelectPref" placeholder="Digite a quantidade"/>
                            </div>

                            <div className="">
                                <label className="forca">Ovo:</label>
                                <input type="text" name="ovoquantidade" className="" id="inlineFormCustomSelectPref" placeholder="Digite a quantidade"/>
                            </div>

                            <div className="">
                                <label className="forca">Queijo:</label>
                                <input type="text" name="queijoquantidade" className="" id="inlineFormCustomSelectPref" placeholder="Digite a quantidade" />
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn botao-cor">Enviar</button>
                            </div>
            
                        </form>
                    </main>
                </dialog>
            </div>
        </div>
    );
}

export default Modalp;