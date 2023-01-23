/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { url } from 'inspector';
import { useState } from 'react';
import Select from './Select';

export default function App() {
  // const aag = `https://api.memegen.link/images/aag.png`;

  // to change the template text
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // to change id
  const [memeId, setMemeId] = useState('doge');
  setMemeId();
  const memeUrl = `https://api.memegen.link/images/${memeId}/${topText}/${bottomText}.png`;

  return (
    <div>
      <header
        css={css`
          background-color: darkblue;
          padding: 15px;
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
        <input value={topText} onChange={(e) => setTopText(e.target.value)} />
        {console.log({ topText })}
      </label>
      <p>Bottom text</p>
      <label htmlFor="Bottom text">
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </label>

      <p>Meme selector</p>
      <Select />
      <p> Meme template selector</p>

      <button
        data-test-id="generate-meme"
        onClick={(e) => memeUrl(e.target.value)}
      >
        Generate
      </button>
      <br />
      <button>Download</button>
      <div>
        <img alt="your meme will be here" src={memeUrl} />
      </div>
    </div>
  );
}
