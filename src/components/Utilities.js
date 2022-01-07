import Utilitie from "./Utilitie";

//imagenes
import image26 from "../assets/image26.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.jpg";
import image29 from "../assets/image29.jpg";

const utilities = [
  {
    id: 1,
    title: "Brand colors",
    text: "9 bandings",
    image: image26,
  },
  {
    id: 2,
    title: "Textures",
    text: "21 items",
    image: image27,
  },
  {
    id: 3,
    title: "Logos",
    text: "57 items",
    image: image28,
  },
  {
    id: 4,
    title: "We Likes",
    text: "14 likes",
    image: image29,
  },
];

const Utilities = () => {
  return (
    <div className="container">
      <div className="row">
        {utilities.map((utilitie, index) => (
          <div key={index} className="col-lg-2 col-sm-6">
            <Utilitie
              title={utilitie.title}
              image={utilitie.image}
              text={utilitie.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utilities;
