import React from 'react';
import { useState, useEffect } from 'react';
import './Records.css';
import Record from '../Record';
import iconGenre from '../../assets/icon-genre.svg';
import iconGrid from '../../assets/icon-grid.svg';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_RECORDS } from '../../Constants/apiEndPoints';
import { v4 as uuidv4 } from 'uuid';
import genreBollywood from '../../assets/genre-bollywood.png';
import genreCountry from '../../assets/genre-country.png';
import genrePop from '../../assets/genre-pop.png';
import genreRock from '../../assets/genre-rock.png';

function Records() {
  const [records, setRecords] = useState(null);
  const [grouped, setGrouped] = useState(false);
  const [category, setCategory] = useState('all');

  const categories = ['all', 'bollywood', 'country', 'pop', 'rock'];
  const categoryImages = [
    '',
    genreBollywood,
    genreCountry,
    genrePop,
    genreRock,
  ];

  useEffect(() => {
    makeRequest(GET_ALL_RECORDS)
      .then((response) => {
        setRecords(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function handleGrouped() {
    setGrouped(!grouped);
    setCategory('all');
  }

  function handleCategory(event) {
    const selectedCategory = event.target.textContent;

    setCategory(selectedCategory);
  }

  return (
    <main id="records" data-testid="records">
      {records ? (
        <>
          <div id="records-heading">
            {grouped ? <span>genres</span> : <span>all songs</span>}

            <img
              src={grouped ? iconGrid : iconGenre}
              alt=""
              onClick={handleGrouped}
              data-testid="grouped-icon"
            />
          </div>

          {grouped && (
            <div id="genres">
              {categories.map((category, index) => (
                <div
                  className="genre"
                  onClick={handleCategory}
                  data-testid={category}
                >
                  <img src={categoryImages[index]} alt="" />
                  <span>{category}</span>
                </div>
              ))}
            </div>
          )}

          <div id="records-content">
            {records.map((record) => {
              const recordCategory = record.genre.name.toLowerCase();

              return (
                (category === 'all' || recordCategory === category) && (
                  <Record
                    key={uuidv4()}
                    id={record.id}
                    recordName={record.name}
                    artistName={record.artist.name}
                    imageUrl={record.imageUrl}
                  />
                )
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div id="loading">Loading...</div>
        </>
      )}
    </main>
  );
}

export default Records;
