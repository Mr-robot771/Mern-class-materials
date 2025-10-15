import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/axiosInstance";
import { IoMdArrowRoundBack } from "react-icons/io";

function UserPatch() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState("");

  const fetchUser = async () => {
    try {
      const res = await api.get(`/user/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="bg-white h-[100%] text-black flex flex-col items-center justify-center relative">
        <div className="p-5 relative z-100">
          <h1 className="mb-10 text-3xl font-bold text-center">User data</h1>
          <p className="mb-5">
            <span className="font-semibold">First Name:</span> {user.firstName}
          </p>
          <p className="mb-5">
            <span className="font-semibold">Last Name:</span> {user.lastName}
          </p>
          <p className="mb-5">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="mb-5">
            <span className="font-semibold">Contact Number:</span>
            {user.contactNumber}
          </p>
          <div className="absolute inset-0 bg-transparent shadow-xl rounded-md border-2 border-gray-50 shadow-blue-500 animate-pulse"></div>
        </div>
        <div>
          <button
            className="bg-violet-500 p-2 absolute top-5 right-5 flex gap-1 items-center rounded-md font-bold hover:cursor-pointer hover:bg-violet-500/90 text-white"
            onClick={() => {
              navigate(-1, { state: { opens: true } });
            }}
          >
            <IoMdArrowRoundBack />
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default UserPatch;
