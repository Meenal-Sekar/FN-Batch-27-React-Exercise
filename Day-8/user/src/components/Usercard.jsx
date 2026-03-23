import React from 'react'

function Usercard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">

      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>

      <p className="text-gray-600">{user.username}</p>

      <p className="text-orange-500 text-sm">
        {user.company.name}
      </p>

      <p className="text-sm text-red-400">
        {user.address.city}
      </p>
    </div>
  );
}

export default Usercard