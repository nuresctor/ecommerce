import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const LastProject = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => !prevState);
  }

  const styles = {
    // card: {
    //   border: '1px solid #eeeeee',
    //   borderRadius: '3px',
    //   padding: '15px',
    //   width: '250px'
    // },
    image: {
      height: 'auto',
      width: '100%'
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
        <div >
          <img
            style={styles.image}
            src="/bebida_front.jpg"
            onClick={handleClick}
          />

          
        </div>

        <div >
          <img
            style={styles.image}
            src="/bebida_back.jpg"
            onClick={handleClick}
          />

        </div>
      </ReactCardFlip>
  );
}

export default LastProject;
