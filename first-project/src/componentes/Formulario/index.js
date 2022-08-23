import './Formulario.css';
import CampoTexto from '../CampoTexto'

const Formulario = (props) => {
    return (
        <section className="Formulario">
            <form>
                <h2>Cadastro</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome..."/>
                <CampoTexto label="Idade" placeholder="Digite a sua idade..."/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo..."/>
            </form>
        </section>
    )
}

export default Formulario;