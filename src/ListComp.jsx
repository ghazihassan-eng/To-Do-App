import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


const ListComp=(props)=>{
    const[val,setval]=useState(false);
    const cutit=()=>{
        setval(true)
    }
    return( 
        <div className="todo">
        
        <li style={{ textDecoration: val ? "line-through" : 'none' }} > 
        <span onClick={cutit}><DeleteIcon className="dlt"/></span>
         {props.text}  </li>
        </div>
    )
}
export default ListComp