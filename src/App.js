/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { url } from 'inspector';
import { useEffect, useState } from 'react';

export default function App() {
  // to change the template text
  const [topText, setTopText] = useState('_');
  const [bottomText, setBottomText] = useState('');

  // to change id
  const [memeId, setMemeId] = useState('aag');
  const memeUrl = `https://api.memegen.link/images/${memeId}/${topText}/${bottomText}.png`;

  const url = 'https://api.memegen.link/templates/';
  const [memeArr, setMemeArr] = useState([]);
  useEffect(() => {
    async function selectAsync() {
      const response = await fetch(url);
      const arr = await response.json();
      setMemeArr(arr);
    }
    const fetchData = async () => {
      await selectAsync();
      // console.log('Hello World');
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  const idM = memeArr.map((meme) => {
    return meme.id;
  });
  setMemeId(idM);

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
      <select>
        <option>Choose a meme</option>
        {memeArr.map((meme) => {
          return <option key={meme.id}>{meme.id}</option>;
        })}
      </select>
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
