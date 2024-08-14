import React, { useReducer } from "react";

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

const reducer = (user, newDetails) => ({ ...user, ...newDetails }); //받은 계좌, 일처리 값

function User() {
  // user state 초기값으로 firsUser 객체에 할당
  const [user, dispatch] = useReducer(reducer, firstUser); //계좌(state), 요구하는 값

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          dispatch({ admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}

export default function UsereducerComplex2() {
  return <User />;
}
