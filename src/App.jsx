import React, { useState } from "react";
import "./App.css";

const App = () => {
  const videos = [
    { id: 0, value: "https://www.youtube.com/embed/XQXsSWWoXaY" },
    { id: 1, value: "https://www.youtube.com/embed/Y-nf6D3wVhQ" },
    { id: 2, value: "https://www.youtube.com/embed/hd8ywccyIxk" },
    { id: 3, value: "https://www.youtube.com/embed/78rb3RTZFSk" },
  ];

  const [sliderData, setSliderData] = useState(videos[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = videos[index];
    setSliderData(slider);
  };

  return (
    <div className="w-full items-center flex flex-col mt-8 h-screen justify-center bg-red-900 px-8">
      <iframe
        width="560"
        height="315"
        src={sliderData.value}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-80 md:w-[500px] max-w-full"
      ></iframe>
      <div className="flex justify-center p-5">
        {videos.map((video, i) => (
          <div className="pl-5" key={video.id}>
            <iframe
              width="560"
              height="315"
              src={video.value}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className={`${
                sliderData.id == i ? "border-solid border-4 border-black" : ""
              } md:w-28 w-20 h-36`}
              onClick={() => handleClick(i)}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
