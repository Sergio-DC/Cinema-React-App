import { CustomButton } from "../components/CustomButton/CustomButton"
import { LoginImage } from "../components/LoginImage/LoginImage"
import { TextField } from "../components/TextField/TextField"
import './Login.css';

export const Login = () => {
    const marginTopVal = 48;
    return (
        <div className="login_style">
            {/* <div id="_bg__frame_4_ek2" >
					<svg width="1440" height="1024" xmlns="http://www.w3.org/2000/svg">
						<path fill="#FFFFFF" d="M1 1 "/>
					</svg>
            </div> */}
            <div className="vector_3" >
                <svg width="719" height="635" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000000" stroke-width="1" stroke-linecap="" stroke-linejoin="MITER"  fill="#5E9163" d="M 717 633 C 505 422.5 329.99998474121094 509 219.99998474121094 403 C 109.99998474121094 297 183.99998474121094 245.5 201.99998474121094 169 C 255.5999984741211 55.80000305175781 89.66666412353516 9.166666984558105 0 0 L 0 633 L 717 633 Z"/>
                </svg>
            </div>
            <div className="vector_1" >
                <svg width="1446" height="276" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000000" stroke-width="1" stroke-linecap="" stroke-linejoin="MITER"  fill="#CE8A3A" d="M 0.2576678335157844 39.17482906180812 C 7.1894060665507675 48.375639074012476 156.6379158727833 425.82229514898995 768.9936788755301 204.5630183869946 C 1434.1232764483912 317.96091249208865 1463.5847225871291 127.91438010376277 1438.1180488061862 39.1910107116745 C 1417.748342722602 -31.77474428853366 471.22911335763416 9.60145604735515 0.2576678335157844 39.17482906180812 Z"/>
                </svg>
            </div>
            <div className="vector_2" >
                <svg width="729" height="591.51" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#000000" stroke-width="1" stroke-linecap="" stroke-linejoin="MITER"  fill="#9C1C1C" d="M 0 589.5107421875 C 214 267.0107421875 229.5 346.0107727050781 406.5 338.0107727050781 C 487.5 338.0107727050781 646 312.01075744628906 634.5 155.01075744628906 C 625.3000001907349 29.41075897216797 692.3333320617676 -0.6559019898995757 727 0.010764696635305882 L 727 589.5107421875 L 0 589.5107421875 Z"/>
                </svg>
            </div>
            <div className="custom_list">
                <LoginImage marginTopVal={marginTopVal}/>
                <TextField  marginTopVal={marginTopVal}/>
                <TextField marginTopVal={marginTopVal}/>
                <CustomButton marginTopVal={marginTopVal}/>
                <a className="register">Register</a>
            </div>

            
        </div>
    )
}