import { useEffect, useRef } from "react";
// import { products } from "../../db/products";
// import { convertNum } from "../../middlewares/convertNum";
import "./styles.css";

export default function Carrousel({ images }) {
  const carrouselRef = useRef();
  let auto;
  const IsMoreOfOneImage = images.length > 1 ? true : false;
  useEffect(() => {
    if (!IsMoreOfOneImage) {
      carrouselRef.current.style.marginLeft = "0%";
      return;
    }

    carrouselRef.current.style.width = `${images.length}00%`;
    auto = setInterval(() => {
      nextImage();
    }, 5000);
  }, []);

  const backImage = () => {
    clearInterval(auto);
    const lastElement =
      carrouselRef.current.children[carrouselRef.current.children.length - 1];
    carrouselRef.current.style.transition = "margin ease .5s";
    carrouselRef.current.style.marginLeft = "0%";
    const transition = () => {
      carrouselRef.current.style.transition = "none";
      carrouselRef.current.insertAdjacentElement("afterbegin", lastElement);
      carrouselRef.current.style.marginLeft = "-100%";
    };
    carrouselRef.current.addEventListener("transitionend", transition);
    auto = setInterval(() => {
      nextImage();
    }, 5000);
  };
  const nextImage = () => {
    clearInterval(auto);
    const firstElement = carrouselRef.current.children[0];
    carrouselRef.current.style.transition = "margin ease .5s";
    carrouselRef.current.style.marginLeft = "-200%";
    const transition = () => {
      carrouselRef.current.style.transition = "none";
      carrouselRef.current.insertAdjacentElement("beforeend", firstElement);
      carrouselRef.current.style.marginLeft = "-100%";
    };
    carrouselRef.current.addEventListener("transitionend", transition);
    auto = setInterval(() => {
      nextImage();
    }, 5000);
  };

  return (
    <article className="carrousel-container">
      <div className="controllers">
        <button
          onClick={backImage}
          disabled={!IsMoreOfOneImage}
          className="controller controller-back"
        >
          {"<"}
        </button>
        <button
          onClick={nextImage}
          disabled={!IsMoreOfOneImage}
          className="controller controller-next"
        >
          {">"}
        </button>
      </div>
      <ul className="carrousel" ref={carrouselRef}>
        {images.map((image, index) => (
          <li key={index} className="image-container">
            <img className="carrousel__image" src={image} alt={index} />
            {/* {title && (
              <div>
                <p>
                  {title} ${convertNum(price)}
                </p>
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </article>
  );
}
