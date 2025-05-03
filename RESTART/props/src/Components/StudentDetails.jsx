// import React from "react";

const StudentDetails = (props) => {
  return (
    <div>
      <div>
        <p>Name: {props.name}</p>
        <p>Surname: {props.surname}</p>
        <p>Designation: {props.designation}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
