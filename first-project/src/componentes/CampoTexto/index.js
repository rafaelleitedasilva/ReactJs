import './CampoTexto.css';

const campoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label} </label>
            <input placeholder={props.placeholder} type="text"></input>
        </div>
    )
}

export default campoTexto;