import Component from "./Component";

//imagenes
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";

const components = [
  {
    id: 1,
    title: "Logins",
    text: "29 items",
    image: image1,
  },
  {
    id: 2,
    title: "Registers",
    text: "16 items",
    image: image2,
  },
  {
    id: 3,
    title: "PopUp's",
    text: "23 items",
    image: image3,
  },
  {
    id: 4,
    title: "Tabs",
    text: "49 items",
    image: image4,
  },
  {
    id: 5,
    title: "Footers",
    text: "25 items",
    image: image5,
  },
  {
    id: 6,
    title: "Empty states",
    text: "17 items",
    image: image6,
  },
  {
    id: 7,
    title: "Calendars",
    text: "15 items",
    image: image7,
  },
  {
    id: 8,
    title: "Mailings",
    text: "13 items",
    image: image8,
  },
  {
    id: 9,
    title: "Lists",
    text: "26 items",
    image: image9,
  },
  {
    id: 10,
    title: "Galleries",
    text: "15 items",
    image: image10,
  },
  {
    id: 11,
    title: "Forms",
    text: "16 items",
    image: image11,
  },
  {
    id: 12,
    title: "Sliders",
    text: "41 items",
    image: image12,
  },
  {
    id: 13,
    title: "Stats",
    text: "50 items",
    image: image13,
  },
  {
    id: 14,
    title: "Testimones",
    text: "14 items",
    image: image14,
  },
  {
    id: 15,
    title: "Details",
    text: "22 items",
    image: image15,
  },
  {
    id: 16,
    title: "Pricing",
    text: "19 items",
    image: image16,
  },
  {
    id: 17,
    title: "Players",
    text: "227 items",
    image: image17,
  },
  {
    id: 18,
    title: "Themes",
    text: "26 items",
    image: image18,
  },
  {
    id: 19,
    title: "Nav",
    text: "38 items",
    image: image19,
  },
];

const Components = () => {
  return (
    <div className="container">
      <div className="row">
        {components.map((component, index) => (
          <div key={index} className="col-lg-2 col-sm-6">
            <Component
              title={component.title}
              image={component.image}
              text={component.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Components;
