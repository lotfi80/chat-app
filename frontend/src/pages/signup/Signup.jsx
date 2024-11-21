import GenderCheckBox from "./GenderCheckBox"
import { Link } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
      const [inputs , setInputs] = useState({
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: '',
            gender : ''
      })
      const handleCheckBoxChange= (gender)=>{
            setInputs({...inputs,gender})

      }
      const handleSubmit = (e) => {
            e.preventDefault()
            console.log(inputs)
      }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded.lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sigup <span className="text-blue-500"> ChatApp</span> </h1>
            <form 
            onSubmit={handleSubmit}
            action="">
                  <div>
                        <label className="label p-2" htmlFor="">
                              <span className="text-base label-text">Full Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter Full Name"
                        className="w-full input input-bordered h-10 text-black "
                        value ={inputs.fullName} 
                        onChange={(e) => setInputs({...inputs , fullName: e.target.value})}
                        />
                       
                  </div>
                  <div>
                  <label className="label p-2" htmlFor="">
                              <span className="text-base label-text">User Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter User Name"
                        className="w-full input input-bordered h-10 text-black "
                        value ={inputs.userName} 
                        onChange={(e) => setInputs({...inputs , userName: e.target.value})}
                        />

                  </div>
                  <div>
                  <label className="label p-2" htmlFor="">
                              <span className="text-base label-text">Password</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter a Password"
                        className="w-full input input-bordered h-10 text-black "
                        value ={inputs.password} 
                        onChange={(e) => setInputs({...inputs , password: e.target.value})}/>

                  </div>
                  <div>
                  <label className="label p-2" htmlFor="">
                              <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="text" 
                        placeholder="Confirm your  Password"
                        className="w-full input input-bordered h-10 text-black "
                        value ={inputs.confirmPassword} 
                        onChange={(e) => setInputs({...inputs , confirmPassword: e.target.value})}
                        />

                  </div>
                  <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender= {inputs.gender}  />
                  <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">
           Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm  mt-2">Signup</button>
          </div>

            </form>
      </div>
    </div>
  )
}

export default Signup

// Starter code for this file

// import GenderCheckBox from "./GenderCheckBox"

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded.lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//       backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Sigup <span className="text-blue-500"> ChatApp</span> </h1>
//             <form action="">
//                   <div>
//                         <label className="label p-2" htmlFor="">
//                               <span className="text-base label-text">Full Name</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Enter Full Name"
//                         className="w-full input input-bordered h-10"/>
//                   </div>
//                   <div>
//                   <label className="label p-2" htmlFor="">
//                               <span className="text-base label-text">User Name</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Enter User Name"
//                         className="w-full input input-bordered h-10"/>

//                   </div>
//                   <div>
//                   <label className="label p-2" htmlFor="">
//                               <span className="text-base label-text">Password</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Enter a Password"
//                         className="w-full input input-bordered h-10"/>

//                   </div>
//                   <div>
//                   <label className="label p-2" htmlFor="">
//                               <span className="text-base label-text">Confirm Password</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Confirm your  Password"
//                         className="w-full input input-bordered h-10"/>

//                   </div>
//                   <GenderCheckBox />
//                   <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">
//            Already have an account? Login
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm  mt-2">Signup</button>
//           </div>

//             </form>
//       </div>
//     </div>
//   )
// }

// export default Signup