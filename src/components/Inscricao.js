import { useHistory } from 'react-router-dom'

import Formulario from './projects/Formulario'
import styles from './Inscricao.module.css'
function Inscrição(){

    const history = useHistory()
    function createPost(project){
        // initalize cost and services
        project.cost=0
        project.services=[]

        fetch("http://localhost:5000/projects",{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{
                console.log(data)
                //redirect
                history.push('/projects', {message:'projeto criado com sucesso'})
            })
        .catch((err) => console.log(err))
 
    }

    return (
        <div className={styles.newproject_container}>
          <h1>Formulario de inscrição <a href="https://jorgesoares2997.github.io/portfolio/landing%20page/landingpage.html" target='_blank'><abbr title="Escola De Musica Elias Mendes Barbosa">EMEMB</abbr></a></h1>
            <p> Clique no link e Conheça a Escola </p>
            <Formulario handleSubmit={createPost} btnText='Enviar'/>
        </div>
        )
} export default Inscrição