import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<section>
				<div>
					<p>SOBRE NOSOTROS</p>
					<nav>
						<ul>
							<li>
								<Link to="#">
									Quienes somos
								</Link>
							</li>
							<li>
								<Link to="#">
									Términos y condiciones
								</Link>
							</li>
							<li>
								<Link to="#">
									Política de privacidad
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div>
					<p>REDES SOCIALES</p>
					<nav>
						<ul>
						<li>
							<Link to="#">
								Facebook
							</Link>
						</li>
						<li>
							<Link to="#">
								Instagram
							</Link>
						</li>
						<li>
							<Link to="#">
								Twitter
							</Link>
						</li>
						</ul>
					</nav>
				</div>
			</section>
			<section>
				<small>Copyright © 2022 fiambala.com</small>
				<small>Dirección</small>
				<small>Todos los derechos reservados.</small>
			</section>
		</footer>
	)
}

export default Footer;