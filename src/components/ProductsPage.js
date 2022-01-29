import React, { useState, useEffect } from 'react';
import Products  from './Products';


function ProductsPage(){
	
	const [productsPage, setProductsPage] = useState([]);
    const [cantPage, setCantPage] = useState(0);
    const [pageActual, setPageActual] = useState(1);

    const pageNext = () => {
        if(pageActual < cantPage) {
            setPageActual(pageActual + 1);
        }
    }

    const pagePrevious = () => {
        if(pageActual > 1) {
            setPageActual(pageActual - 1);
        }
    }

    useEffect(() => {
        fetch("/api/products")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
              setCantPage(Math.ceil(products.data.length / 4));
          })
          .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch(`/api/products/page?page=${(pageActual - 1)}&size=4`)
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((products) => {
              setProductsPage(products.data)
            })
            .catch((error) => console.log(error));
        }, [pageActual]);
        console.log(productsPage);

    return(
		
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All Products in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Category</th>
										</tr>
									</thead>
									<tbody>
											{ productsPage.map((product, index) => {
												return < Products name ={product.name} price ={product.price} discount ={product.discount} category ={product.categoria.name} key ={index}  />
												
										   		})
											}
									</tbody>
									<div className="col-12">
                                		<button className="btn btn-primary mr-3" onClick={pagePrevious}>
                                        <i class="fas fa-angle-left"></i>
                               			 </button>
                                		<span>{pageActual} / {cantPage}</span>
                                		<button className="btn btn-primary ml-3" onClick={pageNext}>
                                        <i class="fas fa-angle-right"></i>
                                		</button>
                            </div>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default ProductsPage;