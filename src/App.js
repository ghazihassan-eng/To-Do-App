import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp';

const App=()=>{
  const[item,setitem]=useState();
  const eventListen=(event)=>{
    setitem(event.target.value);
  }

  const[clickItem,setClickItem]=useState([]);
  const click=()=>{
    setClickItem( (prevVal)=>{
      return [...prevVal,item]
    } )
    setitem(" ");
  }

  return(
    <>
      <div className="container-fluid">
  <div className="row">
    <div className="col-sm">
      
    </div>
    <div className="col-sm">
     
      <div className="container-fluid child_div">
      <br/>
        <h1>TODO APP</h1>
        <br/>
        <input type="text" placeholder="Enter An Item" onChange={eventListen} value={item}></input>
        <Button className="btnadd" onClick={click}>
          <AddIcon/>
        </Button>
        <br/><hr/><br/>
        
          
          { clickItem.map( (val,index)=>{
            return <ListComp key={index} text={val}/>
          } ) }
        <br/><hr/>
        <br/>
        <p>ghazihassan480@gmail.com</p><br/>
      </div>
    </div>
    <div className="col-sm">
      
    </div>
  </div>
</div>
    </>

  )
}

export default App;