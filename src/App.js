import { useState } from 'react';

export default function App() {
  // const memeUrl =
  //   'https://api.memegen.link/images/doge/such_meme/very_skill.png';
  const [meme, setMeme] = useState();

  return (
    <div
      style={{
        height: '500vh',
        margin: '20px 40px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("https://api.memegen.link/images/ds/high_quality/small_file.jpg")`,
        fontWeight: '800',
        fontSize: '20px',
        letterSpacing: '2px',
        color: '#d90429',
      }}
    >
      <p>Top Text</p>
      <input
        style={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '20px',
        }}
        onChange={(event) => {
          console.log('event.currentTarget.value', event.currentTarget.value);
        }}
      />
      <br />
      <p>Bottom text</p>
      <input style={{ borderRadius: '20px' }} />
      <br />
      <selector style={{ color: '#2b2d42' }}>Meme template selector</selector>
      <br />
      <button
        style={{
          padding: '5px 20px',
          borderRadius: '20px',
          backgroundColor: '#8d99ae',
        }}
        // onClick={async () => {
        //   const res = await fetch(memeUrl);
        //   const memeBlob = await res.blob();
        //   const memeObjectURL = URL.createObjectURL(memeBlob);
        //   setMeme(memeObjectURL);
        //   useEffect(() => {
        //     fetchMeme();
        //   }, []);
        //   return (
        //     <>
        //       <img data-test-id="meme-image" src={meme} alt="icons" />
        //     </>
        //   );
        // }}
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
    </div>
  );

  /* Create a web app with React that allows for users to generate and download memes using the https://memegen.link/ website.

It should allow the user to:

 Enter text for the top and bottom of the meme
 The top text box needs to have a label element associated with it containing the text Top text
 The bottom text box needs to have a label element associated with it with the text Bottom text
 Both text boxes should be empty when the page first loads
 Preview the generated meme
 The image element needs to have an html attribute set as follows: data-test-id="meme-image"
 This image element should show a working image when the page first loads
 Change the meme template (the background image)
 The meme template selector element needs to have a label element associated with it containing the text Meme template
 If the user follows the steps below, the doge meme template needs to be selected:
Click on the label of the meme template selector
Clear any existing value (eg. with a text box)
Type the text doge
Hit enter
 Download the meme by clicking on a button
The button element needs to contain the text Download */
}
