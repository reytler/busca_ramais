import React,{useState,useEffect} from 'react'
import Item from './Item'
import './Ramal.css'

var Ramal = (props)=>{
    const [inputSearch,setInputSearch] = useState('')
    const Ramais = props.ramais

    const Items = Ramais.map((item,i) =>{
        var classe = 'row'
        if(i % 2 === 0){
            classe = classe + ' par'
        }else{
            classe = classe + ' impar'
        }
        return(
            <tr key={i} className={classe}>
                <Item 
                    ramal={item.ramal} 
                    nome={item.pessoa} 
                    dpto={item.dpto} 
                    entidade={item.entidade}
                />
            </tr>
        )
    })

    useEffect(function(){
        props.Search(inputSearch)
    },[inputSearch])

    return(
        <div>
            <img src="http://portal.famp.edu.br/img/logo-white.1695c6fa.png" className="logo"/>
            <div className="header">
                <p>Buscar por:</p>
                <div>
                    <input type="radio" id="Colaborador" name="tipoBusca" value="Colaborador" onChange={props.checkColaborador}/>
                    <label htmlFor="Colaborador">Colaborador</label>
                </div>
                <div>
                    <input type="radio" id="Departamento" name="tipoBusca" value="Departamento" onChange={props.checkDepartamento}/>
                    <label htmlFor="Departamento">Departamento</label>
                </div>
                <div>
                    <input type="radio" id="Ramal" name="tipoBusca" value="Ramal" onChange={props.checkRamal}/>
                    <label htmlFor="Ramal">Ramal</label>
                </div> 
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
            </div>
            <table className="Table">
                <thead>
                    <tr>
                        <th>#Ramal</th>
                        <th>#Colaborador</th>
                        <th>#Departamento</th>
                        <th>#Entidade</th>
                    </tr>
                </thead>
                <tbody>
                    {Items}
                </tbody>
            </table>
        </div>
    )
}

export default Ramal