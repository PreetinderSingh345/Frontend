import React from 'react';
import './App.css';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App() {
  const blogs = [
    {
      imgName: 'abstract.png',
      date: 'May 28, 2020',
      time: '2 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 2,
    },

    {
      imgName: 'inspired.png',
      date: 'Jan 13, 2019',
      time: '3 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 8,
    },

    {
      imgName: 'outdoor.png',
      date: 'Feb 10, 2018',
      time: '4 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 3,
    },

    {
      imgName: 'perfect-art.png',
      date: 'Dec 25, 2017',
      time: '5 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 4,
    },

    {
      imgName: 'reason.png',
      date: 'Nov 11, 2016',
      time: '6 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 10,
    },

    {
      imgName: 'young-painters.png',
      date: 'Oct 1, 2015',
      time: '7 mins',
      title: 'The future of abstract art and the culture ...',
      description:
        'Create a blog post suitable that summarises your post in a few short, punchy and sentences and entices your...',
      initialClapCount: 1,
    },
  ];

  return (
    <body>
      <Header />
      <Main blogs={blogs} />
      <Footer />
    </body>
  );
}

export default App;
