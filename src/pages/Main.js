import Sidebar from "../components/SideBar";
import Content from "../components/Content";
import Chatbot from "../components/Chatbot";

function Main(props) {
  return (
    <div className="row pt-2">
      <div className="col-4">
        <Sidebar title="Engine Ears Music" />
      </div>
      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="row" style={{marginLeft:"0"}}>
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
