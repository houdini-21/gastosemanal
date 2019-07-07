import React, {Component} from 'react';

class FormularioGasto extends Component {

			nombreGastos = React.createRef();
			cantidadGasto = React.createRef();

				crearGastos = (e) =>{
					e.preventDefault();

					const gasto ={
						nombreGasto : this.nombreGastos.current.value,
						cantidadGasto : this.cantidadGasto.current.value
					}
					console.log(gasto)

					this.props.agregarGasto(gasto);
					
					e.currentTarget.reset();
				}
    render(){
        return(
					<form onSubmit={this.crearGastos}>
							<h2>Agrega tus gastos aqui</h2>
							<div className="campo">
									<label>Nombre Gasto</label>
									<input ref={this.nombreGastos} className="u-full-width" type="text" placeholder="Ej. Transporte" />
							</div>

							<div className="campo">
									<label>Cantidad</label>
									<input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
							</div>

							<input className="button-primary u-full-width" type="submit" value="Agregar" />
					</form>       
 )
    }
}


export default FormularioGasto;