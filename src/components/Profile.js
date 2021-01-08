import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    // console.log(currentUser)
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          {/* <strong>{currentUser.email}</strong> Profile */}
          Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.auth_token.substring(0, 20)} ...{" "}
        {currentUser.auth_token.substring(currentUser.auth_token.length - 20)}
        {/* {currentUser} */}
      </p>
      {/* <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Work:</strong> {currentUser.workspace_id}
      </p> */}
      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;
