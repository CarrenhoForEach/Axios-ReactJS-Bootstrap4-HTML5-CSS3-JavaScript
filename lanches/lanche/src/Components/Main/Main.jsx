import React from "react";
import "./estilo.css";


function Main() {
    return (
        <main>
            <section id="carrousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="/images/carrossel_lanche1.jpg" className="d-block w-100 imagem-carrossel-um" alt="..."/>
                            <div className="carousel-caption d-none d-md-block h-50">
                                <h1 className="estilo-titulo display-4">Experimente nossos lanches!</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="/images/carrossel_lanche2.jpg" className="d-block w-100 imagem-carrossel-dois" alt="..."/>
                            <div className="carousel-caption d-none d-md-block h-50">
                                <h1 className="estilo-titulo display-4">Opções de personalização do seu lanche!</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="/images/carrossel_lanche3.jpg" className="d-block w-100 imagem-carrossel-tres" alt="..."/>
                            <div className="carousel-caption d-none d-md-block h-50">
                                <h1 className="estilo-titulo display-4">Economize com nossas promoções!</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="/images/carrossel_lanche4.jpg" className="d-block w-100 imagem-carrossel-quatro" alt="..."/>
                            <div className="carousel-caption d-none d-md-block h-50">
                                <h1 className="estilo-titulo display-4">Caso surja necessidade fazemos entregas a domicilio!</h1>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>

            <section id="titulos">
                <h2 className="text-center estilo-titulo cor-nova pt-5">Lanches para economizar e se alimentar com muitas opções</h2>
                <p className="text-center text-secondary pb-4">Nossos lanches ajudam você a aproveitar melhor os alimentos, economizar, ganhar tempo e praticidade</p>
                
            </section>

            <section className="bg-light" id="receita">
                <div className="container-fluid row justify-content-center">
                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/lanche_desenho.jpg" className="card-img-top card-posicionamento" alt="tigela com salada de abacate, vista superior"/>
                        <div className="card-body">
                            <h5 className="card-title">X-Bacon</h5>
                            <p className="card-text">Bacon, hambúrguer de carne e queijo</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                        </div>
                    </article>


                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/lanche_desenho.jpg" className="card-img-top card-posicionamento" alt="tigela de mingau com kiwi, vista superior"/>
                        <div className="card-body">
                            <h5 className="card-title">X-Burguer</h5>
                            <p className="card-text">Hambúrguer de carne e queijo</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                        </div>
                    </article>

                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/lanche_desenho.jpg" className="card-img-top card-posicionamento" alt="prato com mix de vegetais e mão de pessoa adicionando azeite, vista superior"/>
                        <div className="card-body">
                            <h5 className="card-title">X-Eggs</h5>
                            <p className="card-text">Ovo, hambúrguer de carne e queijo</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                        </div>
                    </article>

                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/lanche_desenho.jpg" className="card-img-top card-posicionamento" alt="prato de salada de pimentões com alguns ingredientes ao lado, vista superior"/>
                        <div className="card-body">
                            <h5 className="card-title">X-Eggs Bacon</h5>
                            <p className="card-text">Ovo, bacon, hambúrguer de carne e queijo</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                        </div>
                    </article>

                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/promocao.jpg" className="card-img-top card-posicionamento" alt="tigela com salada de vegetais estilo oriental, vista de cima"/>
                        <div className="card-body">
                            <h5 className="card-title">Promoção Light</h5>
                            <p className="card-text">Se o lanche tem alface e não tem bacon, ganha 10% de desconto.</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                            <input readonly className="botao-cor3" name="valorlight" value="Valor: $$$" />
                        </div>
                    </article>

                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/promocao.jpg" className="card-img-top card-posicionamento" alt="tigela com beterrabas e dentes de alho assados em primeiro plano, com ingredientes ao fundo"/>
                        <div className="card-body">
                            <h5 className="card-title">Promoção Muita Carne</h5>
                            <p className="card-text">A cada 3 porções de carne o cliente só paga 2. Se o lanche tiver 6 porções, o cliente pagará 4. Assim por diante...</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                            <input readonly className="botao-cor3" name="valormuitacarne" value="Valor: $$$" />
                        </div>
                    </article>

                    <article className="card borda-card card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/promocao.jpg" className="card-img-top card-posicionamento" alt="tigela com beterrabas e dentes de alho assados em primeiro plano, com ingredientes ao fundo"/>
                        <div className="card-body">
                            <h5 className="card-title">Promoção Muito Queijo</h5>
                            <p className="card-text">A cada 3 porções de queijo o cliente só paga 2. Se o lanche tiver 6 porções, o cliente pagará 4. Assim por diante...</p>
                            <a href="/#" className="btn botao-cor">comprar!!!</a>
                            <a href="/#" className="btn botao-cor2">Personalizar lanche!!!</a>
                            <input readonly className="botao-cor3" name="valormuitoqueijo" value="Valor: $$$" />
                        </div>
                    </article>

                </div>
            </section>

        </main>
    
    );
}
export default Main;