import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams, useHistory } from "react-router-dom";
import TutorialCard from "../components/TutorialCard";
import TutorialList from "../components/TutorialList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import UpdateForm from './UpdateForm'
import PrivateRoute from "./PrivateRoute";

export const Dashboard = () => {
  const initialFormValues = {
    name: "",
    category: "",
    description:"",
  };

  const [List, setList] = useState(initialFormValues);
  const [data, setData] = useState();
  const { params } = useParams();

  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://backend-how-to.herokuapp.com/api/posts/users/1`, List)
      .then((res) => {
        // console.log("New Friend");
        console.log(res.data);
        setList(res.data)
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setList({
      ...List,

      [e.target.name]: e.target.value,
    });
    console.log(List);
  };

  const deleteHowTo = id => {
    axiosWithAuth().delete(`https://backend-how-to.herokuapp.com/api/posts/${id}`)
    .then((res) => {
      history.push("/dashboard")
      setList(res.data)
      console.log(res.data)
    })
    .catch((error) => console.log(error))
  }

  const updateHowTo = (id, updatedHowTo) => {
    axiosWithAuth().put(`https://backend-how-to.herokuapp.com/api/posts/${id}`,updatedHowTo)
    .then((res) => {
      setList(res.data)
      history.push("/dashboard")
      console.log(res.data)
    })
    .catch((error) => console.log(error))
  }

  const edit = e => {
    e.preventDefault();
    updateHowTo(3,handleChange)
    console.log(List + "Update Req")
    history.push(`/dashboard`)
  }

  const Delete = e => {
    
    e.preventDefault()
    deleteHowTo(2);
    console.log(List + "Delete Req")
    history.push("/dashboard")
  }

  if (!List) {
    return <div> Loading Data.....</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
       id={List.id}
          type="text"
          name="name"
          value={List.name}
          placeholder="name"
          onChange={handleChange}
        ></input>

        <input
    id={List.id}
          type="text"
          name="category"
          value={List.category}
          placeholder="category"
          onChange={handleChange}
        ></input>

        <input
    id={List.id}
          type="text"
          name="description"
          value={List.description}
          placeholder="description"
          onChange={handleChange}
        ></input>
        <button>Add How To</button>
      </form>

      {/* <Route path="TutorialCard/users/"    component= {TutorialCard}> */}
   
        <TutorialCard   delete= {Delete} list={List.id} Update={edit}/>
        <UpdateForm />
  
      {/* </Route> */}

{/* <TutorialCard /> */}
      
    </div>
  );










  //   return (
  //     // <div>
  //       {/* <h1> Add Your How To </h1>

  // {/* <div> */}

  // <Route path="/data/:id">

  //   <TutorialCard />
  // {/* </div> */}

  //       {/* {HowTo.map((arr, index) => (
  //         <span key={index} >
  //           <h2>Name: {arr.name}</h2>
  //           <h3>Category: {arr.category}</h3>
  //           <i>Description: {arr.description}</i>
  //         </span>
  //       ))} */}
  //     {/* </div> */}
  //   );
};




// let HowTo = [
  //   {
  //     name: "How To Build an App",
  //     category: "React",
  //     description: "Tech",
  //   },
  //   {
  //     name: "How to Code",
  //     category: "html",
  //     description: "Unit 1",
  //   },
  //   {
  //     name: "Learn Flexbox",
  //     category: "CSS",
  //     description: "Learn responsive design",
  //   },
  // ];





  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  //   setData({...data, 
  //     name: data.name,
  //     category: data.category,
  //     description: data.description,
  //   });

  //   console.log(data);
  //   console.log(HowTo);
  // };