import React, {Fragment, useState, useEffect } from "react";
import axios from 'axios';
import "./estilo.css";


function Clima() {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);

    let getWeather = async (lat, long) =>{
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather",{
            params:{
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metrics'
            }

        });
        setWeather(res.data);
        console.log(res.data);
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude);
            setLocation(true)
        })
    }, [])

    
    if(location == false){
        return(
            <Fragment>
                <strong>Você precisa habilitar a localização no browser \0/</strong>
            </Fragment>
        )
    }else if(weather == false){
        return(
            <Fragment>
                Carregando a tela...
            </Fragment>
        )
    }else{
        return(
        <Fragment>


            <section className="bg-light" id="receita">
                <div className="container-fluid row justify-content-center">
                    <article className="card borda-card-2 card-largura col-12 col-md-4 p-0 m-4">
                    <img src="/images/clima.jpg" className="card-img-top card-posicionamento" alt="tigela com salada de abacate, vista superior"/>
                        <div className="card-body">
                            <h5 className="card-title">Clima na sua cidade por API: </h5>
                            <p><i>{weather['weather'][0]['description']} e você está na cidade de {weather['name']} pelas suas coordenadas.</i></p> 
                            <ul>
                                <li className="card-text">Temperatura atual: {weather['main']['temp']} °</li>
                                <li className="card-text">Temperatura máxima: {weather['main']['temp_max']} °</li>
                                <li className="card-text">Temperatura mínima: {weather['main']['temp_min']} °</li>
                                <li className="card-text">Úmidade: {weather['main']['humidity']} %</li>
                            </ul>                       
                        </div>
                    </article>
                </div>
            </section>
            
        </Fragment>
        )
    }
}
export default Clima;