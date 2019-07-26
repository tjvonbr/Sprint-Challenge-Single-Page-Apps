import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
        axios
          .get('https://rickandmortyapi.com/api/episode/')
          .then(response => {
            console.log(response.data.results);
            setEpisodes(response.data.results);
          })
          .catch(error => {
            console.log('Server Error', error);
          })
        }

        getEpisodes();
    }, []);

    return (
      <section className="episode-list grid-view">
        <div>
          {episodes.map((episode, index) => (
            <EpisodeCard episode={episode} key={index} />
          ))}
        </div>
      </section>
    );
}