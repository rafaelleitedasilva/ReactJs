import './Formulario.css';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="Formulario">
            <form>
                <h2>Cadastro</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome..."/>
                <CampoTexto label="Idade" placeholder="Digite a sua idade..."/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo..."/>
                <ListaSuspensa itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;