// import React from "react";

// import styles from './Cards.module.scss'

// function Cards() {
//   return (
//     <div className={styles.container}>
//       <section>
//         <img src="" alt="discover places" />
//         <article>
//           <h3>Descubrí lugares</h3>
//           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum quaerat incidunt alias. Architecto labore incidunt aliquam tempora, vitae totam debitis? Officia soluta dolores iusto a. Qui, odit? Dolore, libero.</p>
//         </article>
//       </section>
//       <section>
//         <img src="" alt="discover places" />
//         <article>
//           <h3>Hacé conocer tu lugar</h3>
//           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum quaerat incidunt alias. Architecto labore incidunt aliquam tempora, vitae totam debitis? Officia soluta dolores iusto a. Qui, odit? Dolore, libero.</p>
//         </article>
//       </section>
//     </div>
//   );
// }

// export default Cards;

//----------------------------
import React from 'react';
import styles from './Cards.module.scss'
/*import {Slideshow, Slide, TextoSlide} from './Slider/Slider' */
// import img1 from './img/1.jpg';
// import img2 from './img/2.jpg';
// import img3 from './img/3.jpg';
// import img4 from './img/4.jpg';

function Cards() {
	return (
		<div className={styles.container}>
			<h3>Productos Destacados</h3>
			{/* <Slideshow controles={true}>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow> */}

			<h3>Destacados</h3>
			{/* <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide colorFondo="navy">
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow> */}
		</div>
	);
}
 
export default Cards;