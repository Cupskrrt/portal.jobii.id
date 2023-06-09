import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const { login } = useAuth();
  const { getProfile } = useUser();
  const loginForm = useForm();

  const navigate = useNavigate();

  const { register, control, handleSubmit } = loginForm;

  const handleLogin = async (data) => {
    try {
      await login(data);
      navigate("/dashboard");
      await getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleLogin)}>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-12 justify-center items-center p-8 text-black rounded-xl border-black border-[1px]">
          <h2 className="text-2xl font-bold">Portal Karyawan Jobii</h2>
          <div className="flex flex-col gap-6">
            <input
              className="border-b-2"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="border-b-2"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <div className="flex flex-col gap-2 justify-center items-center">
              <button
                className="p-2 text-center bg-blue-400 rounded-md w-[6rem]"
                to={"dashboard"}
                onClick={handleSubmit(handleLogin)}
              >
                Login
              </button>
              <p className="text-gray-400">Tidak punya akun? kontak IT</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
