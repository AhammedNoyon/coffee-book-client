import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [dbUsers, setDbUsers] = useState(loadedUsers);
  // console.log(loadedUser);
  const handleDeleteUser = (_id) => {
    console.log("Delete user id ", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
              const remainingDbUsers = dbUsers.filter(
                (dbUser) => dbUser._id !== _id
              );
              setDbUsers(remainingDbUsers);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-11/12 md:w-3/4 mx-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Total Users: ( {dbUsers.length} )</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dbUsers.map((dbUser) => (
            <tr key={dbUser?._id}>
              <th>1</th>
              <td>{dbUser?.name}</td>
              <td>{dbUser?.email}</td>
              <td>{dbUser?.createdAt}</td>
              <td className="flex gap-2">
                <button className="btn">Edit</button>
                <button
                  onClick={() => handleDeleteUser(dbUser._id)}
                  className="btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
