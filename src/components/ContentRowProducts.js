import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total Products",
    valor: 0,
    icono: "fas fa-film",
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
    icono: "fas fa-award",
} 

let newArray = [productInDataBase,userInDb,categoriesInDb];
let array=[];

class ContentRowProducts extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
        };
    }


    componentDidMount(){
        let apiProducts = fetch('/api/products')
        let apiusers  =fetch('api/users')
        let apiCategories =fetch('api/categories')


        Promise.all([apiProducts, apiusers, apiCategories])
        .then (results => Promise.all(results.map(r => r.json())))
            /* return ([products.json(), categories.json(), users.json()]) */
        
        .then( cantidad => {
            console.log(cantidad)
            cantidad.map(element => {
               this.setState({
                    count:element.meta.total
                })
               array.push(this.state.count);
               for (let i=0; i<array.length;i++){
                    for (let j=i; j< i+1; j++){
                        newArray[j].valor = array[i]
                    }
                }
                console.log (newArray)
            })
/*             console.log(newArray)
            console.log(array)
 */            
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