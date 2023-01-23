import { css } from '@emotion/react';
// import e from 'express';
// import fetch from 'node-fetch';
import { useEffect, useState } from 'react';
import App from './App.js';

const url = 'https://api.memegen.link/templates/';

export default function Select() {
  const [memeArr, setMemeArr] = useState([]);
  async function selectAsync() {
    const response = await fetch(url);
    // console.log(response.json());
    const arr = await response.json();
    console.log(arr);
    setMemeArr(arr);
  }
  useEffect(() => {
    const fetchData = async () => {
      await selectAsync();
      console.log('Hello World');
    };
    // console.log(fetchData());
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <select>
      <option>Choose a meme</option>
      {memeArr.map((meme) => {
        return <option key={meme.id}>{meme.id}</option>;
      })}
    </select>
  );
}
// to display list - use map, do delete - filter,
