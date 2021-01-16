import './CustomButton.css';

export const CustomButton = ({marginTopVal}) => {
    return (
        <button className="custom_button" style={{marginTop: marginTopVal}}>Login</button>
    )
}