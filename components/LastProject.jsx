import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const LastProject = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => !prevState);
  }

  const styles = {
    card: {
      border: '1px solid #eeeeee',
      borderRadius: '3px',
      padding: '15px',
      width: '250px'
    },
    image: {
      height: '200px',
      width: '250px'
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
        <div style={styles.card}>
          <img
            style={styles.image}
            src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
          />

          <button onClick={handleClick}>Flip Card</button>
        </div>

        <div style={styles.card}>
          <img
            style={styles.image}
            src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
          />

          <button onClick={handleClick}>Flip Card</button>
        </div>
      </ReactCardFlip>
  );
}

export default LastProject;
