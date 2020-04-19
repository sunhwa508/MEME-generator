import React, { useState, useEffect } from "react";

export default function Memegenerator() {
  let [topText, setTopText] = useState("");
  let [bottomText, setBottomText] = useState("");

  let [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  let [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setAllMemeImgs(data.memes);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    setRandomImg(allMemeImgs[randNum].url);
  };

  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />

        <button>Gen</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}
