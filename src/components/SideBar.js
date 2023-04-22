import { Link, useLocation } from "react-router-dom";

function Sidebar(props){
    const location = useLocation();

    return (
        <div className="justify-content-center border-right-3">
            {/* Navigation links go here */}
            <div className="col mr-5 mt-2">
                <div className="row">
                    <h1>{props.title}</h1>
                </div>
                <div className="row mt-4">
                    
                    <ul className="nav flex-column sidebar-nav">
                        <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/musiclist" ? "active" : ""}`}>
                            <Link className="nav-link" to="/musiclist">Music</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="row justify-content-center mt-5">
                    <img className="custom-circle rounded-circle music-background" src={process.env.PUBLIC_URL+'/sidebar.gif'} alt="no Sidebar"></img>
                </div>
            </div>
      </div>
    )
};

export default Sidebar;
