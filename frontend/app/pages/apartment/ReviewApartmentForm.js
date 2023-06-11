import React, {useState} from 'react';
import {auth} from '../../util/FirebaseFuncs';
import {useRoute} from '@react-navigation/native';

export default function ReviewApartment() {
  const route = useRoute();
  const apartmentName = route.params.apartmentName;
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    const data = {
      userId: auth.currentUser.displayName,
      apartmentName: apartmentName,
      rating: rating,
      description: comment,
    };
    console.log(data);
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/reviews/' + apartmentName, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log('Success!');
      document.querySelector('.reviewStatus').innerHTML = 'Review Submitted!';
    }).catch((error) => {
      document.querySelector('.reviewStatus').innerHTML = 'Error: ' + error;
    });
  };
  return (
    <div>
      <p> comments</p>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <p> rating </p>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="button" onClick={handleSubmit}>Submit Review!</button>
      <p className="reviewStatus"> </p>
    </div>
  );
}
