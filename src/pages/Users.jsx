import { useApp } from "../context/AppContext";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../services/axiosInstance.js";
import UserList from "../component/UserList.jsx";
import { useLocation } from "react-router-dom";

const schema = z.object({
  firstName: z.string().nonempty("first name is required!"),
  lastName: z.string().nonempty("last name is required!"),
  password: z
    .string()
    .nonempty("password is required!")
    .min(8, "password must be at least 8 characters long! "),
  email: z.email("invalid email!").nonempty("email is required!"),
  contactNumber: z
    .string()
    .min(10, "Phone number should be at least 10 digits!"),
});

function Users() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { setTitle } = useApp();
  useEffect(() => {
    setTitle("Users");
  }, []);

  async function onSubmit(data) {
    console.log(data);
    console.log(import.meta.env.VITE_API_URL);
    try {
      console.log(api);
      await api.post("/user", data);
      reset({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: "",
      });
      console.log("User register succesfully");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const [users, setUsers] = useState([]);
  const fetchAllData = useCallback(async () => {
    try {
      const res = await api.get("user");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const location = useLocation();
  const { opens } = location.state || {};

  console.log(location);

  const [open, setOpen] = useState(opens || false);

  function showUser() {
    setOpen(!open);
  }
  return (
    <>
      <div className="w-full h-full bg-white text-black flex">
        <form
          className=" w-[70%] pt-2 px-20 flex flex-col gap-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-[2rem] font-bold text-center text-violet-500">
            User Form
          </h1>
          <div className="flex gap-5">
            <div className=" flex flex-col w-[50%]">
              <label htmlFor="" className="text-gray-600 font-bold">
                First Name
              </label>
              <input
                {...register("firstName")}
                type="text"
                className="focus:outline-0"
              />
              <hr className="text-violet-500" />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col  w-[50%] ">
              <label htmlFor="" className="text-gray-600 font-bold">
                Last Name
              </label>
              <input
                {...register("lastName")}
                type="text"
                className="focus:outline-0"
              />
              <hr className="text-violet-500" />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col">
            <label htmlFor="" className="text-gray-600 font-bold">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="focus:outline-0 "
            />
            <hr className="text-violet-500" />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className=" flex flex-col">
            <label htmlFor="" className="text-gray-600 font-bold">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="focus:outline-0 "
            />
            <hr className="text-violet-500" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className=" flex flex-col">
            <label htmlFor="" className="text-gray-600 font-bold">
              Phone Number
            </label>
            <input
              {...register("contactNumber")}
              type="number"
              className="focus:outline-none "
            />
            <hr className="text-violet-500" />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-violet-500 px-10 py-2 rounded-lg text-white font-bold hover:cursor-pointer shadow-lg hover:ease-in-out hover:scale-105 transition-transform hover:bg-violet-400 "
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Submitting" : "Add User"}
            </button>
          </div>
        </form>
        <div className=" w-[30%] flex relative">
          <button
            className="absolute right-5 top-4 shadow-lg p-3 font-semibold rounded-lg bg-violet-500 text-white hover:cursor-pointer hover:bg-violet-400"
            onClick={showUser}
          >
            Show Users
          </button>
          <img src="./add-user.png" alt="" className="object-contain" />
        </div>
      </div>
      {open && (
        <UserList users={users} onClick={showUser} fetchUsers={fetchAllData} />
      )}
    </>
  );
}

export default Users;
