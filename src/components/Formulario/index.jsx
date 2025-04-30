import { useState, useEffect } from "react";

const Formulario = () => {

    const[materiaA, setMateriaA] = useState(0);
    const[materiaB, setMateriaB] = useState(0);
    const[materiaC, setMateriaC] = useState(0);
    const[nome, setNome] =useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return() => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome Mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Materia A mudou para" + materiaA);
    }, [materiaA]);

    const alteraNome = (evento) => {
            setNome(estadoAnterior => {
                return evento.target.value;
            })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Aluno {nome}, Aprovado</p>
            )
        } else {
            return (
                <p>Aluno {nome}, Reprovado</p>
            )
        }
    }


    return(
        <form>

            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {/* {nome && materiaA && materiaB && materiaC ? renderizaResultado() : null} */}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario

