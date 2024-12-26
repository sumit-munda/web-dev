import { useState } from "react";

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Angles", age: 45 },
// ];

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  const userCount = users.length;
  const avgAge = users.reduce((accu, cur) => accu + cur.age, 0) / userCount;

  console.log(avgAge);

  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((cur, index) => {
          return (
            <li key={index}>
              {cur.name} is {cur.age} year old.
            </li>
          );
        })}
      </ul>
      <p>Total users: {userCount}</p>
      <p>Total avg age: {avgAge}</p>
    </div>
  );
};

export default DerivedState;
