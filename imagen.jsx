import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage} from "@fortawesome/free-solid-svg-icons";

// import ModalImg from "./Modal";

const Imagen = ({titulo="VACIO",img="Sin Imagen",descripcion="Sin descripcion"}) => {
    const mostrar_imagen = () => {
        Swal.fire({
            imageUrl: img,
            imageWidth: 100,
            imageAlt: titulo,
            text:descripcion
          });
    }
    return(
        <div className="col-3">
            <div className='card my-3'>
                <div className='card-title ps-3 pt-3'>
                    <h3>{titulo}</h3>
                </div>
                <div className='card-img'>
                    <img className='img-fuid mx-auto rounded-top'src={img} style={{width:"100%",height:"200px"}} />
                </div>
                <div className='card-body'>
                    <button className='btn btn-outline-primary' onClick={mostrar_imagen}>
                        Ver Imagen
                        <FontAwesomeIcon icon={faImage}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Imagen;
// const Imagen = ({titulo="VACIO",img="Sin Imagen",descripcion="Sin descripcion",btn}) => {
//     return(
//         <div className="col-3">
//             <div className='card my-3'>
//                 <div className='card-title ps-3 pt-3'>
//                     <h3>{titulo}</h3>
//                 </div>
//                 <div className='card-img'>
//                     <img className='img-fuid mx-auto rounded-top'src={img} style={{width:"100%",height:"200px"}} />
//                 </div>
//                 <div className='card-body'>
//                     <p>{descripcion}</p>
//                     <ModalImg img={img} titulo={titulo}/>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Imagen;