import React from 'react';

import style from './Login.module.scss';

const Login = () => {


	const handleOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>)  => {
		e.preventDefault();
		
	}

	return (
		<div className={style.loginContainer}>

			<h1 className={style.title}>Bienvenidos a Fiambalá</h1>
			<form 
				className={style.form} 
				onSubmit={handleOnSubmit}>

				<input type="text" name="email" placeholder='Ingresa tu correo'/>
				<input type="text" name="password" placeholder='Ingresa tu contraseña'/>
				<button className={style.btnSubmit} type="submit">Ingresar</button>
				<button className={style.btnGoogle}>Ingresar con google</button>	

			</form>
		</div>
	)
}

export default Login;