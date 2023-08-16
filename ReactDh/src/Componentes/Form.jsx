import { useState } from "react"

function Form(props){
    const [pedido, setPedido]= useState('')
    const [mensaje, setMensaje]= useState('')

function validacion(event){
    event.preventDefault()
    if (pedido !==''){
      
      props.onPedido(pedido)
      setMensaje('')
    } else{
        setMensaje('sin propina no hay pedido boton...')
    }

}

    return(
        <form onSubmit={validacion}>
            <label htmlFor="pedido">Pedido</label>
            <input type="text"
            id="pedido" 
            value={pedido} 
            onChange={e=> setPedido(e.target.value)} />
            {mensaje  ? <p>{mensaje}</p> : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form