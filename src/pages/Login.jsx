import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.email().min(1, "Email is required"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 character long"),
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-black flex flex-col justify-center items-center shadow-lg bg-gray-200 p-5 rounded-sm">
            <h1 className="text-3xl mb-5 font-bold">Login</h1>

            <div className="flex mb-3 flex-col gap-y-1 ">
              <label htmlFor="email">Email:</label>
              <input
                className="border px-2 py-1 rounded-md "
                type="text"
                placeholder="Enter your email"
                id="email"
                {...register("email")}
                name="email"
                autoFocus
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password">Password:</label>
              <div className="relative">
                <input
                  className="border px-2 py-1 rounded-md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  id="password"
                  {...register("password")}
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 bottom-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-wrap w-45 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className="border px-4 py-1 bg-blue-700 border-none text-white font-bold rounded-md hover:cursor-pointer hover:bg-blue-500 disabled:opacity-30"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
