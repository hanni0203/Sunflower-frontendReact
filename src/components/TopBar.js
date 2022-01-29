import React, { useState, useEffect }  from 'react';
import Cookies from 'universal-cookie';

function TopBar(){
	const cookies = new Cookies();
  	let getCookie = cookies.get('userEmail');

  	const [user, setUser] = useState({});

  useEffect(() => {
    if(getCookie !== undefined) {
      fetch(`/api/users/userEmail/${getCookie}`)
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((user) => {
            setUser(user.data)
        })
        .catch((error) => console.log(error));
    }
  }, []);

    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="" id="messagesDropdown">
							<i class="fas fa-id-card"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter">Profile</span>
							</a>
						</li>
						
						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small"> Hola! { user.nombre}</span>
								<img className="img-profile rounded-circle" src ={`/img/users/${getCookie?user.image_profile : 'user.jpg'}`} alt="user" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;