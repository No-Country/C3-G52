import React from 'react';

import style from './check.module.scss';

const CheckIn = () => {
	
	const handleOnSubmit = (e)  => {
		e.preventDefault();
		
	}
	const handleBLUR = (e)  => {
		e.preventDefault();
		alert("el evento se ejecutó ahora");
		
	}

	return (
		<div className={style.loginContainer}>

			<h1 className={style.title}>Bienvenidos a Fiambalá</h1>
			<form 
				className={style.form} 
				onSubmit={handleOnSubmit}>

				<input type="text" name="email" placeholder='Ingresa tu correo' autoFocus="true" onfocusout={handleBLUR} />
				<input type="text" name="password1" placeholder='Ingresa tu contraseña'/>
                <input type="text" name="password2" placeholder='Confirma tu contraseña'/>
				<button className={style.btnSubmit} type="submit">Registrarse</button>
				{/* <button className={style.btnGoogle}>Ingresar con google</button>	 */}

			</form>
		</div>
	)
}

export default CheckIn;

