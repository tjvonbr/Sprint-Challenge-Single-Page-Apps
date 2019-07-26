import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    }

    getCharacters();
  }, []);

  return (
    <section className='character-list grid-view'>
      <div>
        {characters.map((char, index) => (
          <CharacterCard char={char} key={index} />
        ))}
      </div>
    </section>
  );
}