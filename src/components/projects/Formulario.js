import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from '../projects/Formulario.module.css'
function Formulario({ handleSubmit, btnText, projectData}){
    const [project, setProject] = useState(projectData ||{})

    const [sexo,setSexo] = useState([])
    const [curso, setCurso] = useState([])
    const [inst, setInst] = useState([])
    const [exp, setExp] = useState([])
    //sexo
    useEffect(() =>{
        fetch("http://localhost:5000/sexo",{
        method:"GET",
        headers:{
            'content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setSexo(data)
    })
    .catch((err) => console.log(err))
    }, [])
    //possui o instrumento
    useEffect(() =>{
        fetch("http://localhost:5000/inst",{
        method:"GET",
        headers:{
            'content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setInst(data)
    })
    .catch((err) => console.log(err))
    }, [])
    //experiencia
    useEffect(() =>{
        fetch("http://localhost:5000/exp",{
        method:"GET",
        headers:{
            'content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setExp(data)
    })
    .catch((err) => console.log(err))
    }, [])
    //curso
    useEffect(() =>{
        fetch("http://localhost:5000/curso",{
        method:"GET",
        headers:{
            'content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCurso(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
      
    }
    function handleSex(e){
        setProject({...project, Sex:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } } )
    }
    function handleCourse(e){
        setProject({...project, Course:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } } )
    }
    function handleExperience(e){
        setProject({...project, Experience:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } } )
    }
    function handleInstrument(e){
        setProject({...project, Instrument:{
            id:e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        } } )
    }
return(
    <form onSubmit={submit} className={styles.form}>
        
        <Input type='text' text='Nome ' name='name' placeholder='Nome do aluno' handleOnChange={handleChange}/>
        <Input type='text' text='Sobrenome' name='sobrenome' placeholder='Sobrenome' handleOnChange={handleChange} />
        <Input type='date' text='Data de Nascimento' name='idade' handleOnChange={handleChange} />
        <Input type='tel' text='Telefone' name='telefone' placeholder='(00) 0 0000-0000' handleOnChange={handleChange} />
        <Input type='tel' text='Whatsapp' name='whatsapp' placeholder='(00) 0 0000-0000' handleOnChange={handleChange} />
        <Input type='text' text='Endereço' name='endereco' handleOnChange={handleChange} />
        <Input type='email' text='Email' name='email' handleOnChange={handleChange} />
        <Select name='sexo_id' text='Sexo' options={sexo} handleOnChange={handleSex} value={project.Sex ? project.Sex.id : ''} />
        <Select name='curso_id' text='Curso de interesse' options={curso} handleOnChange={handleCourse} value={project.Course ? project.Course.id : ''} />
        <Select name='inst_id' text='Possui o instrumento' options={inst} handleOnChange={handleInstrument} value={project.Instrument ? project.Instrument.id : ''} />
        <Select name='exp_id' text='Experiência com o instrumento' options={exp} handleOnChange={handleExperience} value={project.Experience ? project.Experience.id : ''} />
        <SubmitButton text={btnText} />
    </form>
)
}export default Formulario