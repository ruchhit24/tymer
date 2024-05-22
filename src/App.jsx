import React, { useEffect, useState } from "react";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleStart = () => {
    if (hr < 0 || min < 0 || sec <= 0) {
      alert("invalid input!!");
      return;
    } else {
      setIsStart(true);
    }
  };

  const handleReset = () => {
    setIsStart(false);
    setHr(0);
    setMin(0);
    setSec(0);
  };

  const handleInput = (e) => {
    // console.log(e.target.id , e.target.value)
    // console.log(typeof(e.target.value))
    const id = e.target.id;
    const val = parseInt(e.target.value);
    if (id === "hour") {
      setHr(val);
    } else if (id === "minute") {
      setMin(val);
    } else {
      setSec(val);
    }
  };

  const runTimer = () => {
    if (sec > 0) {
      setSec((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMin((m) => m - 1);
      setSec(59);
    } else if (min === 0) {
      setHr((h) => h - 1);
      setMin(59);
      setSec(59);
    }
    if (hr === 0 && min === 0 && sec === 0) {
      setHr(0);
      setMin(0);
      setSec(0);
    }
  };

  useEffect(() => {
    let tId;
    if (isStart) {
      tId = setInterval(runTimer, 1000);
    }
    setTimerId(tId);
    console.log("timer id = ", timerId);
    return () => clearInterval(tId);
  }, [isStart, hr, min, sec]);

  console.log(hr, min, sec);

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer();
  };
  return (
    <div className="w-full min-h-screen bg-gray-500">
      <div className="w-[500px] h-[500px] bg-gray-800 mx-auto absolute mt-20 left-[30%] rounded-lg">
        <div className="flex flex-col justify-center items-center w-full h-full">
          {!isStart ? (
            <>
              <h1 className="text-white mb-10 font-semibold text-3xl">
                Set Countdown!!
              </h1>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="HH"
                  id="hour"
                  onChange={handleInput}
                  className="w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black"
                />
                <span className="text-gray-300 text-3xl mt-2">:</span>
                <input
                  type="text"
                  placeholder="MM"
                  id="minute"
                  onChange={handleInput}
                  className="w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black"
                />
                <span className="text-gray-300 text-3xl mt-2">:</span>
                <input
                  type="text"
                  placeholder="SS"
                  id="second"
                  onChange={handleInput}
                  className="w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black"
                />
              </div>
              <div>
                <button
                  className="py-1 px-4 bg-purple-800 text-white rounded-lg cursor-pointer"
                  onClick={handleStart}
                >
                  Start
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-white mb-10 font-semibold text-3xl">
                Countdown!!
              </h1>
              <div className="flex gap-4 mb-4">
                <div className="text-white text-2xl w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black">
                  {hr < 10 ? `0${hr}` : hr}
                </div>
                <span className="text-gray-300 text-3xl mt-2">:</span>
                <div className="text-white text-2xl w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black">
                  {min < 10 ? `0${min}` : min}
                </div>
                <span className="text-gray-300 text-3xl mt-2">:</span>
                <div className="text-white text-2xl w-16 h-16 rounded-lg font-semibold p-4 focus:outline-none border border-black">
                  {sec < 10 ? `0${sec}` : sec}
                </div>
              </div>
              <div>
                <div className="flex gap-5">
                  {!isPaused ? (
                    <button
                      className="py-1 px-4 bg-purple-800 text-white rounded-lg cursor-pointer"
                      onClick={handlePause}
                    >
                      Pause
                    </button>
                  ) : (
                    <button
                      className="py-1 px-4 bg-green-800 text-white rounded-lg cursor-pointer"
                      onClick={handleResume}
                    >
                      Resume
                    </button>
                  )}
                  <button
                    className="py-1 px-4 bg-red-800 text-white rounded-lg cursor-pointer"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
{
  /* <div className="flex gap-5">
                <button
                  className="py-1 px-4 bg-purple-800 text-white rounded-lg cursor-pointer"
                  onClick={handleStart}
                >
                  Pause
                </button>
                <button
                  className="py-1 px-4 bg-red-800 text-white rounded-lg cursor-pointer"
                  onClick={handleStart}
                >
                  Reset
                </button>
              </div> */
}
