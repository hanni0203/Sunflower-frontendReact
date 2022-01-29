import React from 'react'


function Products (props) {

    return(
        <tr>
            <td> {props.name}  </td>
            <td> {props.price}  </td>
            <td> {props.discount} </td>
            <td> {props.category} </td>
        </tr>
    )
}

export default Products;