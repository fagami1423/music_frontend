import Sidebar from "../components/SideBar";
import Content from "../components/Content";
import Chatbot from "../components/Chatbot";

function Main(props) {
  return (
    <div className="row pt-5">
      <div className="col-4">
        <Sidebar title="Engine Ears Music" />
      </div>
      <div className="col-8">
        
        <div className="row">
            <Content content={props.content} />
        </div>
        <div className="row">
          <Chatbot />
        </div>

      </div>
    </div>
  )
};

export default Main;
