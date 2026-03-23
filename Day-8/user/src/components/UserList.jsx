import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import Usercard from './Usercard';
import { getUsers } from '../services/api';

function UserList()
{
    const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

    useEffect(() => {

    const fetchUsers = async () => {
      const response = await getUsers()

      // const data = await response.json();

      setUsers(response);
      setLoading(false);
    };

    fetchUsers();

  }, []);

   if (loading) return <Loader />;




    return(

      <>
        <div className="grid gap-6 p-6
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3">

      {users.map((a1) => (
        <Usercard key={a1.id} user={a1} />
      ))}

       </div>

      </>

    )
}

export default UserList