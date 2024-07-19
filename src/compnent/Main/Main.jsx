import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import Card from "../Card/Card";
import icon1 from "../../assets/bulb_icon.png";
import icon2 from "../../assets/code_icon.png";
import icon3 from "../../assets/compass_icon.png";
import icon4 from "../../assets/message_icon.png";
import { IoMdSend } from "react-icons/io";
import { FaImage, FaMicrophone } from "react-icons/fa";
import { Context } from "../../Context/ContextProvider";
import Markdown from "markdown-to-jsx";

function Main() {
  const {
    onSent,
    responses,
    loading,
    setInput,
    input,
  } = useContext(Context);
  const [dataSent, setDataSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    onSent();
    setDataSent(true);
  };

  return (
    <div class="h-screen w-full flex flex-col overflow-hidden">
      <div className="p-3 flex justify-between items-center w-full">
        <div className="w-full">
          <p className="ml-2 font-normal text-xl">Gemini</p>
        </div>
        <div className="flex items-center rounded-full w-auto">
          <img
            className="w-8 h-8 rounded-full"
            src={assets.user_icon}
            alt="User Icon"
          />
        </div>
      </div>
      <div className="flex-grow flex flex-col relative overflow-hidden">
        <div className="bg-white flex flex-col w-full flex-grow overflow-y-auto p-4 items-center">
          {!dataSent ? (
            <div className="w-full flex-grow">
              <div className="mx-auto max-w-[844px] flex flex-col justify-start">
                <span className="w-full flex justify-start">
                  <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                    Hello, Kashif
                  </h1>
                </span>
                <span className="flex justify-start">
                  <p className="text-2xl sm:text-[48px] text-black opacity-30 font-semibold">
                    How can I help you today?
                  </p>
                </span>
              </div>
              <div className="flex flex-col items-center mt-6 sm:mt-10">
                <div className="w-full">
                  <div className="mx-auto max-w-[850px]">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 md:gap-4">
                      <Card
                        text="As a social trend expert, explain a term"
                        icon={icon1}
                      />
                      <Card
                        text="Create a futuristic image of a car"
                        icon={icon2}
                      />
                      <Card
                        text="Find hotels for a New Year’s trip to San Francisco"
                        icon={icon3}
                      />
                      <Card
                        text="Suggest a Python library to solve a problem"
                        icon={icon4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="result flex-grow w-full flex flex-col items-center">
              {responses.map((response, index) => (
                <div key={index} className="response-item mb-4 w-full max-w-[800px]">
                  <div className="result-title flex items-center mb-2">
                    <img
                      src={assets.user_icon}
                      alt="User"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <p className="text-xl font-semibold">{response.prompt}</p>
                  </div>
                  <div className="result-data flex items-start">
                    <img
                      src={assets.gemini_icon}
                      alt="Gemini"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div className="p-4 rounded-lg shadow-sm flex-grow text-[15px] leading-9">
                      <Markdown>{response.response}</Markdown>
                      <hr />
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="w-full flex flex-col items-center gap-[10px]">
                  <hr className="border-none w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] hr-animated" />
                  <hr className="border-none w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] hr-animated" />
                  <hr className="border-none w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] hr-animated" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div class="     px-4 bg-white ">
    <form onSubmit={handleSend} class="flex items-center border rounded-full shadow-sm p-3 mx-auto bg-gray-100  w-full max-w-[750px]">
        <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
            class="flex-grow bg-gray-100 outline-none text-gray-700 placeholder-gray-500"
        />
        <div class="flex items-center space-x-3 opacity-65">
            <FaImage />
            <FaMicrophone />
            <button type="submit">
                <IoMdSend />
            </button>
        </div>
    </form>
    <div class="text-xs text-center text-gray-500 mt-2">
        Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://example.com" class="text-blue-500">Your privacy & Gemini Apps</a>
    </div>
</div>


  

</div>
  
  );
}

export default Main;
