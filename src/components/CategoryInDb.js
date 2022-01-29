import React, { Component } from 'react';
import Category  from './Category';

class CategoryInDb extends Component {
    constructor(){
        super();
        this.state = {
            color: '',
            categoryList: []
        };
    }

componentDidMount(){
    fetch('/api/categories')
    .then( respuesta => {
       return respuesta.json()
    })
    .then( category => {
        this.setState({categoryList: category.data})
    })
    .catch(error => console.log(error))
    console.log('Se creó por primera vez')
}

componentDidUpdate(){
    console.log('componente cambió', this.state)
}


cambiarFondo(){
    this.setState({
        color:'bg-secondary'
    });
}

render(){
  
    return(
       
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.cambiarFondo()}>Categories in Data Base</h6>
                </div>
                <div className={"card-body " + this.state.color}>
                    <div className="row">
                        {
                            this.state.categoryList.map((category,index)=>{
                                return  <Category  {...category}  key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

}
export default CategoryInDb;

