import React, { useState } from "react"
import { connect } from "react-redux";
import { addTodo } from "../store/reducers/actions";
 function Counter(props){
    var[newtodo,setNewtodo]=useState('');
    console.log(props)
    return(
       <div className="mybox">
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={()=>{props.dispatch(addTodo(newtodo))}}>Add Todo</button>
        <hr/>
        <h1>Counter:{props.c.count}</h1>
        <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
        <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
       </div>
    )
}

export default connect(function(store){return store})(Counter);                                      