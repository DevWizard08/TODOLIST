import React, { useState } from 'react';
import './index.css';
import List from './List';


const App = ()=> {

    const [inputList,setInputlist] = useState();
    const [Items,setItmes] = useState([]);

    const inputEvent = (event)=> {
       setInputlist(event.target.value);
    };

    const listOfitems = ()=> {
     setItmes((value) =>{
        return [...value,inputList]
     });
     setInputlist("");
    };

    const deleteItems = (id) =>{
      //console.log("deleted");
      setItmes((oldTimes) =>{
         return oldTimes.filter((arrElem,index)=>{
           return index !== id;
         })
      })
    }


   

    return(
     <>
        <div className="main_div">
        <div className="centre_div">
        <br />
        <h1>ToDo LIST</h1>
        <br />
        <input type="text" placeholder="Add a ITEM" onChange={inputEvent}  value={inputList}/>
        <button onClick={listOfitems}> + </button>

        <ol>
          { 
            Items.map( (itemVal,index) => (
             <List 
             key ={index}
             id = {index}
             text = {itemVal}
             onSelect={deleteItems}
             />
             ) )
           }
            </ol>



        </div>

        </div>
     </>
    )
}

export default App;


