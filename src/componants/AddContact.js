import React from "react";
import { Link, history } from "react-router-dom";
import Home from "./Home";
import { useState, useEffect } from "react";

const AddContact = () => {
  const [name, Setname] = useState();
  const [number, Setnumber] = useState();
 
//       useEffect(() => {
//   const phone=JSON.toString(localStorage)
//   console.log(phone)
//         }, []);


// console.table(JSON.stringify(localStorage))
// localStorage.forEach(e => {
//     console.log(e.name)
// });
var arr =[]
  const save = () => {

   var con =new Array((localStorage.getItem('contact')))
  //  con?console.log('a'):con=" "
   arr= [...con,name]
   arr=[...con,name]
   console.log(arr)
    localStorage.setItem("contact",arr);
  };
  
  return (
    <div className="addfrm">
      <div className="fbtn">
        <button><Link to="/">Close</Link> </button><label>Create contact</label>
        <button onClick={save}>Save</button>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            required
            onChange={(e) => Setname(e.target.value)}
          ></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone Number"
            required
            onChange={(e) => Setnumber(e.target.value)}
          ></input>
          <input type="number" placeholder="Phone Number2"></input>
        </div>
        <div>
          <textarea placeholder="Enter Notes"></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
