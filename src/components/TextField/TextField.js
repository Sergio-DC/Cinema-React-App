import './TextField.css';

export const TextField = ({marginTopVal}) => {
    return (
        <div className="custom_textfield" style={{marginTop: marginTopVal}}>
            <div className="custom_label">Email</div>
            <input type="text" placeholder="Ingresa un email"/>
        </div>
    )
}