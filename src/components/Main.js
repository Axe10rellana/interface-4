import Components from "./Components";
import Layouts from "./Layouts";
import Utilities from "./Utilities";

const Main = () => {
  return (
    <div className="main">
      <h2>COMPONENTS</h2>
      <div className="cards">
        <Components />
      </div>
      <h2>LAYOUTS</h2>
      <div className="cards">
        <Layouts />
      </div>
      <h2>UTILITIES</h2>
      <div className="cards">
        <Utilities />
      </div>
    </div>
  );
};

export default Main;
