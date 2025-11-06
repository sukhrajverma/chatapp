
import React, { useEffect, useState } from "react";

import $ from 'jquery'
import { useNavigate } from 'react-router-dom';



function Users() {
  const [users, setUsers] = useState([]);

  let goto = useNavigate();

  useEffect(() => {
    // PHP API se data fetch karna
    let uid = sessionStorage.getItem('userid');
    fetch(`https://abhyuday.fivedollarsaas.com/apis/chatapis/apis.php?action=mambers&uid=${uid}`)
      .then((response) => response.json())
      .then((data) => {
        
        setUsers(data); // userArr ko state me store karo
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  function chat(uid){

    
     goto(`/chat/${uid}`);

  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Active Users</h2>

      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>phone</th>
            <th>Chat</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.uname}</td>
                <td>{user.uphone}</td>
                <td><button onClick={()=>chat(user.uid)}>chat</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
