import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  // need state to track whether showing the front or back
  const [showFront, setShowFront] = useState(true)

  const { name, hp, sprites } = pokemon

  // toggle whether to show the front or back sprite
  const handleClick = () => {
    setShowFront((showFront) => !showFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={ showFront ? sprites.front : sprites.back } />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp } hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;