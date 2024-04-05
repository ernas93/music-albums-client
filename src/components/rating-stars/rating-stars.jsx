import { useState } from 'react';
import { BsStar } from 'react-icons/bs';

const stars = [1, 2, 3, 4, 5];

export const RatingStars = ({ album }) => {
  const [isRated, setIsRated] = useState(false);

  const sendRating = (score) => {
    setIsRated(true);

    const data = {
      rating: score,
    };

    fetch(`http://localhost:3000/albums/${album.id}/rating`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        alert('something went wrong.');
        setIsRated(false);
      }
    });
  };

  if (isRated) {
    return <div>Thanks for rating!</div>;
  }

  return (
    <div style={{ margin: '12px 0' }}>
      {stars.map((score) => (
        <BsStar
          style={{ cursor: 'pointer' }}
          key={score}
          size={30}
          onClick={() => sendRating(score)}
        />
      ))}
    </div>
  );
};
