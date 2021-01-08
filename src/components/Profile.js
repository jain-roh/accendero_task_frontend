import React,{useState} from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [userData,setUserData]=useState(null);
  if (!currentUser) {
    // console.log(currentUser)
    return <Redirect to="/login" />;
  }
  var userD=jwt_decode(currentUser.auth_token);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.auth_token.substring(0, 20)} ...{" "}
        {currentUser.auth_token.substring(currentUser.auth_token.length - 20)}
        {/* {currentUser} */}

      </p>
      <p>

        ID : {userD.sub}
</p>
      
<p>
  Name : {userD.name}
</p>


    </div>
  );
};

export default Profile;
