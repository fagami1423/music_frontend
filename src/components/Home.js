import Sidebar from "./SideBar";
import Content from "./Content";



function Home(props) {
  return (
    <div className="row">
      <div className="col-4 bg-secondary">
        <Sidebar title="Engine Ears Music" />
      </div>
      <div className="col-8">
        <Content content={props.content} />
      </div>
    </div>
  )
};

export default Home;
