import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-w-96 mx-auto"
    >
      <div
        className="w-full p-6 rounded-lg
      shadow-md bg-gray-400 bg-clip-padding  backdrop-filter
      backdrop-blur-lg bg-opacity-0 "
      >
        <h1 className="text-3xl font-semibold text-center to-gray-500">
            Login
            <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10" ></input>

          </div>
          <div>
          <label htmlFor="" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="input input-bordered w-full h-10" ></input>
          </div>
          <Link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">
           { "Don't"} have an account? Signup
          </Link>
          <div>
            <button className="btn btn-block btn-sm  mt-2">Login</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter code for this file

// const Login = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center
//     min-w-96 mx-auto"
//     >
//       <div
//         className="w-full p-6 rounded-lg
//       shadow-md bg-gray-400 bg-clip-padding  backdrop-filter
//       backdrop-blur-lg bg-opacity-0 "
//       >
//         <h1 className="text-3xl font-semibold text-center to-gray-500">
//             Login
//             <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full h-10" ></input>

//           </div>
//           <div>
//           <label htmlFor="" className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="input input-bordered w-full h-10" ></input>
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">
//            { "Don't"} have an account? Signup
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm  mt-2">Login</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

