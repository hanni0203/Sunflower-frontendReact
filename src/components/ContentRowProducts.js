import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total Products",
    valor: 0,
    icono: "fas fa-seedling",
}

let userInDb ={
    color:   "success",
    titulo: "Total Users",
    valor: 0,
    icono: "fas fa-user",
}

let categoriesInDb = {
    color:   "warning",
    titulo: "Total Categories",
    valor: 0,
    icono: "fas fa-columns",
} 

let newArray = [productInDataBase,userInDb,categoriesInDb];

class ContentRowProducts extends Component{
    constructor(){
        super();
        this.state = {
            countProduct:0,
            countUser:0,
            countCategory:0,

        };
    }

    componentDidMount(){
        let apiProducts = fetch('/api/products')
        let apiusers  =fetch('api/users')
        let apiCategories =fetch('api/categories')


        Promise.all([apiProducts, apiusers, apiCategories])
        .then (results => Promise.all(results.map(r => r.json())))
        
        .then( cantidad => {
            /* console.log(cantidad) */
               this.setState({
                countProduct: cantidad[0].meta.total,
                countUser:cantidad[1].meta.total,
                countCategory:cantidad[2].meta.total,
                })
        })
        .catch(error => {
           return console.log(error)
        })
        console.log('Se creó por primera vez')
    }

    componentDidUpdate(){
        console.log('componente cambió', this.state)
    }


    render(){
        newArray[0].valor = this.state.countProduct;
        newArray[1].valor = this.state.countUser;
        newArray[2].valor = this.state.countCategory;

        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {                                     
                     newArray.map((producto, index)=>{
                        return <SmallCard {...producto}  key= {index} />
                    }) 
                }      
            </div>
            </React.Fragment>
        )
    }
}
export default ContentRowProducts;