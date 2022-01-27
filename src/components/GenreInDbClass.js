import React, { Component } from 'react';
import Genre  from './Genre';


class GenreInDbClass extends Component {
    constructor(){
        super();
        this.state = {
            color: '',
            genresList: []
        };
    }

componentDidMount(){
    fetch('/api/genres')
    .then( respuesta => {
       return respuesta.json()
    })
    .then( genres => {
        this.setState({genresList: genres.data})
    })
    .catch(error => console.log(error))
    // console.log('Se creó por primera vez')
}

// componentDidUpdate(){
//     console.log('componente cambió', this.state)
// }


cambiarFondo(){
    this.setState({
        color:'bg-secondary'
    });
}

render(){
    // let genres = [
    //     {genre: 'Acción'},
    //     {genre: 'Animación'},
    //     {genre: 'Aventura'},
    //     {genre: 'Ciencia Ficción'},
    //     {genre: 'Comedia'},
    //     {genre: 'Documental'},
    //     {genre: 'Drama'},
    //     {genre: 'Fantasia'},
    //     {genre: 'Infantiles'},
    //     {genre: 'Musical'}
    // ]
    return(
       
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={()=>this.cambiarFondo()}>Genres in Data Base</h6>
                </div>
                <div className={"card-body " + this.state.color}>
                    <div className="row">
                        {
                            this.state.genresList.map((genre,index)=>{
                                return  <Genre  {...genre}  key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

}
export default GenreInDbClass;

