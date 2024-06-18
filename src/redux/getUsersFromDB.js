import { useEffect, useState } from "react";
import axios from "axios";

function users() {
  const [usersDB, setUsersDB] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsersDB(response.data);
      } catch (err) {
        console.err("Error fetching users:", err);
      }
      console.log(response.data);
    };
    fetchUsers();
  }, []);

  return usersDB;
}

export default users;
