import memesData from "../MemesData";

export default function Meme() {
  function getMeme() {
    const meme = memesData.data.memes;
    const randomNumber = Math.random(Math.floor() * meme.length);
    console.log(meme[randomNumber].url);
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMeme}>
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
