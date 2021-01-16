import './LoginImage.css';
import Image from './bryan_griffin.png';

export const LoginImage = ({marginTopVal}) => {
    return (
        <>
        <div className="ellipse" style={{marginTop: marginTopVal, marginLeft: 55}}>
            <div>
                <img src={Image} alt="doggy" width="101px" height="169px" className="profile_picture"/>
            </div>
        </div>
        </>
    )
}