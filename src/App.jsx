
import React, { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {

    const apiUserGetall = "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await fetch(apiUserGetall);

      const data = await response.json();

      setUsers(data);

    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-5 text-purple-700">
        Users List
      </h1>

      <table className="w-full border-collapse border border-gray-300">

        <thead>
          <tr className="bg-gray-100">

            <th className="border border-gray-300 p-3 text-left">
              Name
            </th>

            <th className="border border-gray-300 p-3 text-left">
              Username
            </th>

            <th className="border border-gray-300 p-3 text-left">
              Email
            </th>

          </tr>
        </thead>

        <tbody>

          {users.map((item) => (

            <tr key={item.id} className="hover:bg-purple-50">

              <td className="border border-gray-300 p-3">
                {item.name}
              </td>

              <td className="border border-gray-300 p-3">
                {item.username}
              </td>

              <td className="border border-gray-300 p-3">
                {item.email}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;
