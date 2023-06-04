import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center bg-red-50 h-">
      <div className="flex flex-col gap-12 justify-center items-center p-8 text-black rounded-xl border-black border-[1px]">
        <h2 className="text-2xl font-bold">Portal Karyawan Jobii</h2>
        <div className="flex flex-col gap-6">
          <input className="border-b-2" type="email" placeholder="Email" />
          <input
            className="border-b-2"
            type="password"
            placeholder="Password"
          />
          <div className="flex flex-col gap-2 justify-center items-center">
            <Link
              className="p-2 text-center bg-blue-400 rounded-md w-[6rem]"
              to={"dashboard"}
            >
              Login
            </Link>
            <p className="text-gray-400">Tidak punya akun? kontak IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
