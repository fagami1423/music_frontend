

import { Link } from "react-router-dom";

function Sidebar(props){
    return (
        <div className="justify-content-center border-right-3">
            {/* Navigation links go here */}
            <div className="col mr-5 mt-3">
                <div className="row">
                    <h1>{props.title}</h1>
                </div>
                <div className="row justify-content-center mt-4">
                   
                    <img className="custom-circle rounded-circle music-background" src={process.env.PUBLIC_URL+'/sidebar.gif'} alt="no Sidebar"></img>
                    
                </div>
                <div className="row">
                
                    <ul className="justify-content-left">
                        <li className="list-group-item border-0 active"><Link className="text-light text-decoration-none" to="/">Homepage</Link></li>
                        <li className="list-group-item border-0"><Link className="text-light text-decoration-none" to="/musiclist">Music List</Link></li>
                        <li className="list-group-item border-0"><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
            </div>
            
            
      </div>
    )
};

export default Sidebar;