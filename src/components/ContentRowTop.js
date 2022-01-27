import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoryInDb from './CategoryInDb';
import ContentRowProducts from './ContentRowProducts';
import LastProduct from './LastProduct';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Product in DB -->*/}
						<LastProduct />
						{/*<!-- End content row last product in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoryInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;