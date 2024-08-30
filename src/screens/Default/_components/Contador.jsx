import { useEffect, useState } from "react";

const Contador = ()=>{

    const [contador, setContador] = useState(10);

    const handleContador=()=>{
        setContador(contador+1)
    };
    //Esta funcion especial se ejecuta cuando el componente se  haya montado []
    useEffect(()=>{
        setContador(12);
    },[])

    //Esta funcion especial se ejecuta cuando haya cambiado el valor de contador
    //[contador]
    useEffect(()=>{
        if(contador === 15){
            alert('contador es 15')
        }
    }, [contador])


 return (
    <div>
        <h1>Componente contador</h1>
        <h3>{contador}</h3>
        <div>
            <button onClick={handleContador}>Aumentar</button>
        </div>
    </div>
 )
};

export default Contador;