function Pedido(props){
    const{ children } = props
    console.log('en pedido', Pedido)

    return(
        <div>
       <h1>Tu pedido es</h1>
       <p>{children}</p>
       </div>
    )
}

export default Pedido