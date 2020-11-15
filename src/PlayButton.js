import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function PlayButton() {
  const [active, setActive] = useState(false)

  const handleChange = (event) => {
    event.preventDefault();
    setActive(true);
  }

  return (
    <div>
    { active === false &&
      <Button
        type="button"
        onClick={ handleChange }
      >
        Click to Play!
      </Button>
    }
    </div>
  )
};
