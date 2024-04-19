import React, { useState } from 'react';
import i18next from 'i18next'
import './App.css';

function App() {
const clickChange = (event : any) => {
    console.log(lng)
    setLng(lng === 'ru' ? 'en' : 'ru');
}

const [lng, setLng] = useState('ru');


  i18next.init({
    lng: 'en',
    interpolation: {
      format: function(value, format, lng) {
          if (format === 'lowercase') return value.toLowerCase();
          return value;
      }
  },
    resources: {
      en: {
        translation: {
          name: 'Nikita',
          lastName: '{{last}}',
          age: '{{ageN, number}} years',
          country: '{{countryN, lowercase}}',
          people_zero: 'no people',
          people_one: '{{count}} man',
          people_other: '{{count}} peoples',
          car_bmw: 'i like bmw',
          car_audi: 'i like audi',
          car: 'i like car'
        },
      },
      ru: {
        translation: {
          name: 'Никита',
          lastName: '{{last}}',
          age: '{{ageN, number}} лет',
          country: '{{countryN, lowercase}}',
          people_zero: 'нет людей',
          people_one: '{{count}} человек',
          people_other: '{{count}} людей',
        },
      }
    }
  })

  return (
    <div className="App">
      <p>{i18next.t('name', {lng: lng})}</p>
     <p>{i18next.t('lastName', {last: lng === 'ru' ? 'Тараканов' : 'Tarakanov'})}</p> {/*  интерполяция */}
      <p>{i18next.t('age', {lng: lng, ageN: 10000})}</p>
      <p>{i18next.t('country', {lng: lng, countryN: lng === 'ru' ? 'БЕЛАРУСЬ' : 'BELARUS'})}</p>
      <p>{i18next.t('people', {lng: lng, count: 0})}</p>
      <p>{i18next.t('car', {context: 'bmw'})}</p>
      <p>{i18next.t('name')}</p>
      <p>{i18next.t('name')}</p>
      <button onClick={clickChange}>CHANGE LANGUAGE</button>
    </div>
  );
}

export default App;
