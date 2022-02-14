import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from './Spinner.gif'

function PokemonCard(props) {
  const pokemonIndex = props.url.split('/')[props.url.split('/').length - 2]
  const [imageLoading, setImageLoading] = useState(true)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-3  mb-3">
      <NavLink to={`pokemon/${pokemonIndex}`} className="link-card-pokemon">

        <div className="card card-pokemon">
          <div className="card-header">
            <h6>{pokemonIndex}</h6>
          </div>
          <div className="card-body mx-auto">
            <div className="card-img-top ">
              {
                imageLoading ?
                  <img src={Spinner} className="rounded d-block mx-auto" alt="loading" />
                  : null
              }
              <img
                onLoad={() => setImageLoading(false)}
                src={imageUrl}
                alt={props.name}
                className="rounded d-block mx-auto" />
            </div>
            <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
          </div>
        </div>

      </NavLink>
    </div>
  );
}

export default PokemonCard;