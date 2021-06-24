import React from "react";
import "./estilo.css";


function Modalq(){
    return(
        <div className="modal fade" id="quemsomos-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <dialog className="modal-content">
                    <header className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Descubra mais sobre nós</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </header>
                    <main className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Quem somos:</label>
                                <textarea readonly className="form-control" id="exampleFormControlTextarea1" rows="7">Somos a Carrenho & Ferreira Lanches, nascida em 1989 na cidade de Campinas. Nós prezamos pela qualidade, sabor e valor dos nossos lanches. Estamos ampliando nossas franquias para te atender em qualquer lugar do país. Esperamos que goste e se sinta acolhido em nossos recintos. Obrigado pela preferência. Assinado: Thiago Carrenho Ferreira.</textarea>
                            </div>
                        </form>
                    </main>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </dialog>
            </div>
        </div>    
    );
}

export default Modalq;