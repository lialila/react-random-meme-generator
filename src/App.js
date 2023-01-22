import { css } from '@emotion/react';
// import { url } from 'inspector';
import { useState } from 'react';

export default function App() {
  const dogeUrl = 'https://api.memegen.link/images/doge.png';
  const aag = 'https://api.memegen.link/images/aag.png';
  // to generate memes
  const [imgUrl, setImgUrl] = useState(aag);
  // to put text on aag pic onChange
  const [topText, setTopText] = useState(aag);
  const [bottomText, setBottomText] = useState(aag);

  //  const [chosenTop, setChosenTop] = useState(doge);
  // const [doge, setDoge] = useState(dogeUrl);
  function textGenerator() {
    if (topText && !bottomText) {
      return (
        <img
          alt="meme with top text"
          src={`https://api.memegen.link/images/${imgUrl}/${topText}.png`}
        />
      );
    } else if (!topText && bottomText) {
      return (
        <img
          alt="meme with bottom text"
          src={`https://api.memegen.link/images/${imgUrl}/_/${bottomText}.png`}
        />
      );
    } else if (topText && bottomText) {
      return (
        <img
          alt="the meme with top and bottom text"
          src={`https://api.memegen.link/images/${imgUrl}/${topText}/${bottomText}.png`}
        />
      );
    }
  }
  console.log(topText, bottomText);
  function generateMeme() {}
  return (
    <div>
      <header
        css={css`
          background-color: blue;
          padding: 32px;
          font-size: 24px;
        `}
      >
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
          width="60px"
        />
        <p>Meme Generator</p>
      </header>
      <p>Top Text</p>
      <label htmlFor="Top text">
        <input onChange={() => setTopText(textGenerator)} value={topText} />
      </label>
      <p>Bottom text</p>
      <label htmlFor="Bottom text">
        <input
          onChange={(e) => setBottomText(textGenerator)}
          value={bottomText}
        />
      </label>
      <p>Meme selector</p>
      <select>Meme template selector</select>

      <button
        data-test-id="generate-meme"
        onClick={(e) => setDoge(generateMeme)}
      >
        Generate
      </button>
      <br />
      <button>Download</button>
      <div>
        <img alt="your meme will be here" src={imgUrl} />
      </div>
    </div>
  );
}
