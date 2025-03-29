import React from 'react';
import img1 from '../assets/img/especial.png'; // Imagen de Goku
import img2 from '../assets/img/epecial2.png';
import img3 from '../assets/img/especial3.png';
import Footer from '../components/footer.js';


const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                
                <div className="col-md-5 text-center">
                <h2 className="title-outline">Historia de los celtic de boston</h2>
                    <p className="rounded-text">
                    Los Boston Celtics son uno de los equipos más emblemáticos de la NBA, con una historia llena de éxitos, leyendas y rivalidades. Fundados en 1946, los Celtics han dejado una huella imborrable en el baloncesto profesional.
                    </p>
                    <img 
                        src={img1} 
                        alt="Goku" 
                        className="img-fluid rounded-circle" 
                        style={{ width: '200px', border: '2px solid red' }} 
                    />
                </div>

                <div className="col-md-5 text-center">
                    <h2 className='title-outline2'>inicios del equipo de los celtic de boston</h2>
                    <p className="rounded-text">
                    Fundación y primeros años (1946-1956)
                    El equipo fue fundado en Boston, Massachusetts, como parte de la Basketball Association of America (BAA), que luego se fusionó con la National Basketball League (NBL) para formar la NBA en 1949.
                    En 1950, los Celtics contrataron a Red Auerbach como entrenador, quien revolucionó el equipo con su estilo de juego rápido y defensivo.
                    </p>
                    <img 
                        src={img2} 
                        alt="Goku" 
                        className="img-fluid rounded-circle" 
                        style={{ width: '200px', border: '2px solid blue' }} 
                    />
                </div>
                <div className="col-md-5 text-center">
                    <h2 className='title-outline3'>Era dorada: La dinastía de Bill Russell (1957-1969)</h2>
                    <p className="rounded-text">
                       En el Draft de 1956, los Celtics seleccionaron a Bill Russell, quien se convertiría en el pilar del equipo.
                       Con Russell como líder defensivo y reboteador, y con jugadores como Bob Cousy, John Havlicek y Sam Jones, los Celtics dominaron la liga.
                       Desde 1957 hasta 1969, el equipo ganó 11 campeonatos en 13 temporadas, incluyendo 8 títulos consecutivos (1959-1966), un récord aún imbatido.
                    </p>
                    <img 
                        src={img3} 
                        alt="Trunks" 
                        className="img-fluid rounded-circle" 
                        style={{ width: '200px', border: '2px solid orange' }} 
                    />
                </div>
                
            </div>


            
            <Footer />
        </div>
    );
};

export default App;