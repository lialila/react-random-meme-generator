// import { url } from 'inspector';
import { useState } from 'react';

export default function App() {
  const [imgUrl, setImgUrl] = useState(
    'https://api.memegen.link/images/leo/I_have/_no_clue/.png',
  );
  const [topText, setTopText] = useState(
    'https://api.memegen.link/images/doge.png',
  );
  const [bottomText, setBottomText] = useState('');
  function memeGenerator() {
    return (
      <img
        alt="the meme with your text"
        src={`https://api.memegen.link/images/leo/${topText}/${bottomText}.png`}
      />
    );
  }
  console.log(topText, bottomText);
  return (
    <div
      style={{
        height: '500vh',
        margin: '00px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        // backgroundImage: url(imgUrl),
        fontWeight: '800',
        fontSize: '20px',
        letterSpacing: '2px',
        color: 'Black',
      }}
    >
      <p>Top Text</p>
      <label htmlFor="Top text">
        <input
          onChange={() => setTopText(memeGenerator)}
          value={topText}
          style={{
            alignItems: 'center',
            borderRadius: '20px',
          }}
        />
      </label>

      <p>Bottom text</p>
      <label htmlFor="Bottom text">
        <input
          onChange={(e) => setBottomText(memeGenerator)}
          value={bottomText}
          style={{ borderRadius: '20px' }}
        />
      </label>
      <p>Meme template selector</p>
      <select
        style={{
          margin: '32px 0',
          borderRadius: '20px',
        }}
      >
        Meme template selector
      </select>

      <button
        style={{
          padding: '5px 20px',
          borderRadius: '20px',
          backgroundColor: '#8d99ae',
        }}
      >
        Generate
      </button>
      <br />
      <button
        style={{
          padding: '5px 27px',
          borderRadius: '20px',
          backgroundColor: '#d90429',
        }}
      >
        Submit
      </button>
      <div>
        <img alt="your meme will be here" src={imgUrl} />
      </div>
    </div>
  );
}
