import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams, useHistory } from "react-router-dom";
import TutorialList from "../components/TutorialList";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UpdateForm from './UpdateForm'


const TutorialCard = (props) => {
  const initialFormValues = {
    name: "",
    category: "",
    description: "",
  };
  const [Data, setData] = useState([initialFormValues]);
  const params = useParams();
  const history = useHistory();
const location = useLocation();


  const fetchData = (e) => {
    axiosWithAuth()
      .get(`https://backend-how-to.herokuapp.com/api/posts`)
      .then((res) => setData(res.data, console.log(res.data)))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  if (!Data) {
    return <div> Loading Data.....</div>;
  }

  return (
    <div>
      <h1> My List</h1>
      {Data.map((arr, index) => (
          <div className="List"> 
        <p  key={index}>
          {" "}
          Name: {arr.name} Category : {arr.category}Description:{" "}
          {arr.description}
          {" "}
          <button onClick ={props.delete} id= {props.list}> Delete </button>
          <button onClick ={props.Update} id= {props.list}>            
           {/* <Link to="/dashboard/UpdateForm">Update Form</Link> */}
 Update </button>


 {/* <Switch>
 <Route path="/dashboard/UpdateForm" component={UpdateForm} />{" "}
 </Switch> */}
        </p>
        </div>
      ))}
            </div>
  );
};

export default TutorialCard;
