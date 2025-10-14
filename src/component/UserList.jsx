import { createPortal } from "react-dom";
import { MdOutlineCancel } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import api from "../services/axiosInstance";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserList({ users, onClick, fetchUsers }) {
  async function handleClick(id) {
    try {
      await api.delete(`/user/${id}`);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  }

  return createPortal(
    <>
      <div
        onClick={() => {
          onClick();
        }}
        className=" fixed inset-0 bg-black/50 flex justify-center items-center "
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="z-20 w-[90%] rounded-md"
        >
          <h1 className="font-bold text-2xl text-center p-2 bg-white text-black relative">
            All Users
            <button
              className="hover:cursor-pointer"
              onClick={(e) => {
                onClick();
              }}
            >
              <MdOutlineCancel className="absolute right-5 top-2" />
            </button>
          </h1>

          <table className="w-full bg-white text-black">
            <thead className="bg-gray-200">
              <tr>
                <th className="font-semibold p-2">First Name</th>
                <th className="font-semibold p-2">Last Name</th>
                <th className="font-semibold p-2">Email</th>
                <th className="font-semibold p-2">Contact Number</th>
                <th className="font-semibold p-2">Action</th>
                <th className="font-semibold p-2">view</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstName || "-"}</td>
                  <td>{user.lastName || "-"}</td>
                  <td>{user.email || "-"}</td>
                  <td>{user.contactNumber || "-"}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleClick(user._id);
                      }}
                    >
                      <FaTrashAlt size={12} className="hover:cursor-pointer" />
                    </button>
                  </td>
                  <td>
                    <Link className="flex justify-center" to={`/Users/${user._id}`}>
                      <FaEye size={14} className="hover:cursor-pointer" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>,
    document.body
  );
}

export default UserList;
