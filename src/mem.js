import React, { useState, useEffect } from "react";

export default function mem() {
  const [topText, setToptext] = useState("");
  const [bottomText, setBottomtext] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then(({ data }) => {
        setAllMemes(data.memes);
      });
  }, []);

  const handleSubmit = (e) => {
    event.preventDefault();
    const randomnum = floor.Math(Math.random() * allMemes.length);
    setRandomImg(allMemes[randomnum].url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="top문장입력"
          value={topText}
          onChange={(e) => setToptext(e.target.value)}
        />
        <input
          placeholder="bottom문장입력"
          value={bottomText}
          onChange={(e) => setBottomtext(e.target.value)}
        />
        <button>Gen</button>
      </form>
      <img src={randomImg} />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
    </div>
  );
}
