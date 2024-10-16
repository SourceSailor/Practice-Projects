import "./App.css";

function App() {
  const inputClass = "border border-gray-300 pl-2 bg-slate-100";
  return (
    <>
      <form className="flex flex-col m-auto text-left">
        <fieldset className="flex flex-col m-auto border py-5 px-4">
          <legend className="text-xl">Personal Information</legend>

          <label htmlFor="" className="text-lg font-bold mb-3">
            What's your name?
          </label>

          <div className="flex flex-row gap-4">
            <input
              className={inputClass}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <input
              className={inputClass}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
