import { useForm, Controller } from "react-hook-form"
import Select from "react-select";
import { useRef } from "react";

//přidat omezení na delku znaku
const NewPostForm = () => {

    const { register, handleSubmit, reset, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const inputRef = useRef();

    const handleClick = () => {
      inputRef.current.click(); // spustí výběr souboru
    };

    const handleFileChange = (e) => { //smazat?
      // tady můžeš třeba odeslat soubor do databáze
      const file = e.target.files[0];
      console.log("Soubor připraven:", file);
    };

    const buttonStyle =
      "hover:bg-cyan-500 bg-cyan-600 transition-transform duration-200 hover:scale-105 text-white my-2 py-1 px-3 rounded-md font-sans cursor-pointer";

    const options = [
      { value: "morning-routines", label: "Morning Routines"},
      { value: "productivity-hacks", label: "Productivity Hacks"},
      { value: "planning-and-lists", label: "Planning & Lists"},
      { value: "focus-and-distractions", label: "Focus & Distractions"},
      { value: "daily-habits", label: "Daily Habits"}
    ]

      const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgb(229 231 235)", // ekvivalent bg-gray-200
      width: "80%", // ekvivalent w-4/5
      height: "26px", // height-6 je příliš malé, proto zvětšeno
      borderRadius: "4px", // ekvivalent rounded-sm
      // borderColor: state.isFocused ? "blue" : "gray",
      borderColor: "rgb(229 231 235)",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.5)" : "none",
      "&:hover": {
        borderColor: "gray",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "white", // Tailwind bg-gray-200
      borderRadius: "4px" // ekvivalent rounded-sm

    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#374151", // Tailwind text-gray-700
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#374151",
      "&:hover": {
        backgroundColor: "#d1d5db",
        color: "black",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
      width: "80%"
    })
  };


  return (
    <div className="border-2 border-pink-400 p-7 flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-5 w-full">
        <div className="border-2 border-violet-400 flex flex-col w-1/2 gap-4">
          <input {...register("title")} placeholder="title" className="bg-gray-200 w-4/5 pl-2 rounded-sm"></input>
          <input {...register("description")} placeholder="description" className="bg-gray-200 w-4/5 pl-2 rounded-sm"></input>
          <input {...register("author")} placeholder="author" className="bg-gray-200 w-4/5 pl-2 rounded-sm"></input>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Select {...field} options={options} styles={customStyles}/>
            )}
          />
        </div>
        <div className="border-2 border-violet-400 flex flex-col w-1/2 gap-5">
          <textarea {...register("content")} placeholder="content" className="bg-gray-200 rounded-sm pl-2 h-20"></textarea>
          <div>
            {/* <input type="file"
            className="bg-gray-200 w-auto border-2 border-gray-400"
            accept="image/*"
            /> */}
            <input
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              type="button"
              onClick={handleClick}
              className="bg-gray-100 hover:bg-white text-gray-500 px-4 py-2 rounded cursor-pointer border-2 border-gray-300"
          >
            🖼️ upload image
          </button>
          </div>
        </div>
      </form>
      <button className={`${buttonStyle} w-fit mt-5`} type="submit">publish post</button>
    </div>
  )
}

export default NewPostForm
