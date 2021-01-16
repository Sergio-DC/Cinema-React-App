import './LoginImage.css';
import Image from './bryan_griffin.png';

export const LoginImage = () => {
    return (
        <>
        <div className="ellipse">
            <div>
                <img src={Image} alt="doggy" width="101px" height="169px" className="profile_picture"/>
            </div>
        </div>
        </>
    )
}