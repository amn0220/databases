import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };
  }

  render(){
    return (

      <section className='library'><h1 className='album-title'>albums</h1><h2>curated for easy listening</h2>
      {
        this.state.albums.map( (album, index) =>
        <Link to={`/album/${album.slug}`} key={index}>
        <img src={album.albumCover} alt={album.title} />
        <div>title: {album.title}</div>
        <div>artist: {album.artist}</div>
        <div>number of songs: {album.songs.length}</div>
        </Link>
       )
      }
      </section>
    );
  }
}

export default Library;
