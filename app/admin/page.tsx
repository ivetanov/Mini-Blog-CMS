"use client"
import { useState } from "react"
//import { auth } from "../firebase/config" nainstalovat
// import { useRouter } from "next/navigation"
// import { signOut } from "firebase/auth"
import NewPostForm from "@/components/NewPostForm/NewPostForm"
import NewTipForm from "@/components/NewTipForm/NewTipForm"

const AdminPage = () => {

  const logoutButtonStyle = "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105 w-fit ml-10 mt-3 lg:mt-0";

//   const [user] = useAuthState(auth)
//   const router = useRouter()
  const [formType, setFormType] = useState("post")


//   useEffect(() => {
//     if (!user) {
//       router.push("/sign-in")
//     }
//   }, [user, router])

//   if (!user) {
//     return null
//   }

  return (
    <div className="min-h-screen mx-10 shadow-xl mt-6 w-auto pb-6 rounded-xl">
      <div className="flex flex-row">
        <div className={`text-sm sm:text-base h-1/2 w-fit px-3 cursor-pointer whitespace-nowrap transition-all duration-200 
          ${formType === "post" ? "shadow-top-sm font-medium text-black" : "text-gray-400"}`} onClick={() => setFormType("post")}>
          publish new post
        </div>
        <div className={`text-sm sm:text-base h-1/2 w-fit px-3 cursor-pointer whitespace-nowrap transition-all duration-200 
          ${formType === "quote" ? "shadow-top-sm font-medium text-black" : "text-gray-400"}`} onClick={() => setFormType("quote")}>
          publish new tip
        </div>
      </div>
      {formType === "post" ? <NewPostForm /> : <NewTipForm />}
      <div className={logoutButtonStyle}>
        {/* <button onClick={() => signOut(auth)}>log-out</button> */}
      </div>
    </div>
  )
}

export default AdminPage
