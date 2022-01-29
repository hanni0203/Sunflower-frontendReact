import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class LastProduct extends Component{
    constructor(){
        super();
        this.state = {
            productList:[]
        };
    }
    componentDidMount(){
        fetch('/api/products')
        .then( result =>{
           return result.json();
        })
        .then(products => {
            this.setState({
                productList: products.data.pop()
            })
            console.log(this.state.productList.image)

        })
        .catch(error => console.log(error))
        console.log('Se creó por primera vez')
    }

    componentDidUpdate(){
        console.log('componente cambió', this.state)
    }

    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                           <h4>{this.state.productList.name}</h4> 
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src ={`/img/products/${this.state.productList.image}`} alt="img-product"/>
                        </div>
                        <p> {this.state.productList.description} </p>
                    </div>
                </div>
            </div>

        )
    }

}

export default LastProduct;

