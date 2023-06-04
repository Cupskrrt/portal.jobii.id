const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
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
            <button className="p-2 bg-blue-400 rounded-md w-[6rem]">
              Login
            </button>
            <p className="text-gray-400">Tidak punya akun? kontak IT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
