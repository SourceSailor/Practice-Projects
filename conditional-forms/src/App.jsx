import { useState } from "react";

import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([
    {
      id: "",
      question: "",
      answer: "",
    },
  ]);

  function updateUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  function handlePrompt(e, index) {}

  // Get today's date
  const today = new Date();

  // Calculate the date 18 years ago from today
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  // Min Date
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  // Max Date
  const formattedMaxDate = `${maxDate.getFullYear()}-${(maxDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${maxDate.getDate().toString().padStart(2, "0")}`;

  const inputClass = "border border-gray-300 pl-2 bg-slate-100 py-1";
  const labelClass = "text-lg font-bold mb-1";
  const fieldSetClass = "flex flex-col m-auto border py-5 px-4 gap-5 w-1/2";

  console.log(prompts);

  return (
    <>
      <form className="flex flex-col m-auto text-left w-full">
        {/* Personal Info Section */}
        <fieldset className={fieldSetClass}>
          <legend className="text-xl">Personal Information</legend>

          {/* Name */}
          <div>
            <label className={labelClass}>What's your name?</label>

            <div className="flex flex-row gap-4">
              <input
                className={inputClass}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={updateUserInfo}
              />
              <input
                className={inputClass}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={updateUserInfo}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className={labelClass}>What's your email?</label>

            <input
              className={`${inputClass}  w-3/4`}
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              value={userInfo.email}
              onChange={updateUserInfo}
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className={labelClass}>What's your date of birth?</label>

            <input
              className={`${inputClass} w-1/3`}
              min={formattedMaxDate}
              max={formattedToday}
              type="date"
              name="dob"
              id="dob"
              value={userInfo.dob}
              onChange={updateUserInfo}
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className={labelClass}>What's your gender?</label>

            <select
              className={`${inputClass} w-1/3`}
              name="gender"
              id="gender"
              value={userInfo.gender}
              onChange={updateUserInfo}
            >
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mtw">MTW</option>
              <option value="wtm">WTM</option>
              <option value="non-binary">Non-binary</option>
            </select>
          </div>
        </fieldset>

        {/* Prompts Section */}
        <fieldset className={`${fieldSetClass} mt-10`}>
          <legend className="text-xl">Prompts</legend>

          {/* Prompts */}
          <div className="flex flex-col gap-4">
            {prompts.map((prompt, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <select
                  className={inputClass}
                  value={prompt.question}
                  onChange={handlePrompt}
                  name="prompt"
                  id="prompt"
                >
                  <option>Add Prompt</option>
                  <option value="What is your favorite food?">
                    What is your favorite food?
                  </option>
                  <option value="What is your favorite drink?">
                    What is your favorite drink?
                  </option>
                  <option value="What is your favorite activity?">
                    What is your favorite activity?
                  </option>
                  <option value="What is your favorite place to travel?">
                    What is your favorite place to travel?
                  </option>
                </select>

                {/* Prompt Answers */}
                <textarea
                  className={inputClass}
                  name="prompt-answer"
                  id="prompt-answer"
                  value={prompt.answer}
                  onChange={handlePrompt}
                />
                <button className="p-2 w-28 rounded-lg bg-stone-200 hover:bg-stone-300">
                  Add Prompt
                </button>
              </div>
            ))}
            {/* Prompt Select */}
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
