

import { Link } from "react-router-dom";

function Sidebar(props){
    return (
        <div className="justify-content-center">
            {/* Navigation links go here */}
            <div className="col">
                <div className="row">
                    <h1>{props.title}</h1>
                </div>
                <div className="row justify-content-center custom-circle rounded-circle">
                    
                </div>
                <div className="row">
                
                    <ul className="list-group bg-secondary justify-content-center">
                        <li class="list-group-item border-0 bg-secondary active"><Link className="text-light text-decoration-none" to="/">Homepage</Link></li>
                        <li class="list-group-item border-0 bg-secondary"><Link className="text-light text-decoration-none" to="/musiclist">Music List</Link></li>
                        <li class="list-group-item border-0 bg-secondary"><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
            </div>
            
            
      </div>
    )
};

export default Sidebar;