import React, { useState } from "react";

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

function User() {
  // user state 초기값으로 firsUser 객체에 할당
  const [user, setUser] = useState(firstUser);
  // user = {admin: true} onClick 이벤트 발생 후 user 정보 전부 삭제되고 Admin 남는 오류발생
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
          setUser({ ...user, admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}

export default function UsereducerComplex1() {
  return <User />;
}
