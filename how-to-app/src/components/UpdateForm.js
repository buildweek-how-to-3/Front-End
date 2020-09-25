import React, {useState,useEffect} from 'react'
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'



const UpdateForm = (id,props) => {

const initialFormValues = {
    name: "",
    category: "",
    description:"",
  };

    const location = useLocation();
    const params = useParams();
    const { push } = useHistory();
    const [item, setItem] = useState(initialFormValues)


  // when the component mounts:
  // populate to form with the item data
  // 1. if we have data at `location.state.item` use that
  // 2. else, make api call to fetch data by the id

  useEffect(() => {
    if (location.state) {
      setItem(location.state);
    } else {
      // make api request for item data
      // "/itemById/:id"
      axiosWithAuth().get(`https://backend-how-to.herokuapp.com/api/posts/${id}`)
        .then(res => setItem(res.data))
        .catch(err => console.log(err));
    }
  }, [location]);


  const updatedHowTo = ()=>{

    props.updateHowTo()

  }

  const changeHandler = e => {
    e.persist();
    
 
    setItem({
        ...item,
        [e.target.name]: [e.target.value]
      });
    
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(item)
        // make a PUT request to edit the item
        axiosWithAuth()
          .put(`https://backend-how-to.herokuapp.com/api/posts/${3}`, item)
          .then(res => {
            // res.data ==> full array with updated item
            setItem(res.data);
            push(`/dashboard`);
            console.log(res.data)
          })
          .catch(err => console.log(err));
      };


    return(

<div>
<form onSubmit = {handleSubmit}>
    <h2>Update How To </h2>
<input 
autoComplete="off"
type = "text"
name = "name"
onChange = {changeHandler}
placeholder="name"
value={item.name}
/>

<input 
autoComplete="off"
type = "text"
name = "category"
onChange = {changeHandler}
placeholder="category"
value={item.category}
/>

<input 
autoComplete="off"
type = "text"
name = "description"
onChange = {changeHandler}
placeholder="description"
value={item.description}
/>

<button>Update</button>


</form>
</div> //Close Div

    )
 

}

export default UpdateForm