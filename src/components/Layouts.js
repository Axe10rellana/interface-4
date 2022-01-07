import Layout from "./Layout";

//imagenes
import image20 from "../assets/image20.jpg";
import image21 from "../assets/image21.png";
import image22 from "../assets/image22.png";
import image23 from "../assets/image23.png";
import image24 from "../assets/image24.png";
import image25 from "../assets/image25.png";

const layouts = [
  {
    id: 1,
    title: "Comings",
    text: "26 items",
    image: image20,
  },
  {
    id: 2,
    title: "Claims",
    text: "12 items",
    image: image21,
  },
  {
    id: 3,
    title: "Dashboards",
    text: "10 items",
    image: image22,
  },
  {
    id: 4,
    title: "Examples",
    text: "41 items",
    image: image23,
  },
  {
    id: 5,
    title: "404",
    text: "37 items",
    image: image24,
  },
  {
    id: 6,
    title: "AdWords",
    text: "10 items",
    image: image25,
  },
];

const Layouts = () => {
  return (
    <div className="container">
      <div className="row">
        {layouts.map((layout, index) => (
          <div key={index} className="col-lg-2 col-sm-6">
            <Layout
              title={layout.title}
              image={layout.image}
              text={layout.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layouts;
