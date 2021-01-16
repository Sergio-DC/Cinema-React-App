import { TextField } from '../components/TextField/TextField';
import './ListOfTextFields.css';

export const ListOfTextFields = () => {
    return (
        <div className="custom_list">
            {/* <div className="child left">
                Emadsdsada
            </div>
            <div className="child">
               dsdssdasdas
    </div>*/}
            <input type="text" placeholder="Escribe"></input>
            <input type="text" placeholder="Escribe"></input>
            <input type="text" placeholder="Escribe"></input>
            <input type="text" placeholder="Escribe"></input>
            <input type="text" placeholder="Escribe"></input>
            <input type="text" placeholder="Escribe"></input>
            <TextField/>
            <TextField/>
        </div>

        )
}