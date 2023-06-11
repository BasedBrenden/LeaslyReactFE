import React from 'react';
import {useNavigation} from '@react-navigation/native';
import testPFP from '../../assets/profile/dog.jpg';
import './ApartmentReviews.css';

export default function ApartmentReviews({reviews, ApartmentName}) {
  const navigation = useNavigation();
  return (
    <div className="reviewContainer">
      <p className="reviewTitle"> Reviews</p>
      <div className="reviewList">
        {(reviews.length === 0) ? <p className="noReviews"> No reviews yet! </p> :
          reviews.map((review) => (
            <div className="uniqueReview" key={review.userId}>
              <img className="reviewerPFP" src={testPFP}/>
              <p className="reviewerUsername">Name: {review.userId}</p>
              <p className="reviewerRating">Rating: {review.rating}/5</p>
              <p className="reviewerStory">{review.description}</p>
            </div>
          ))}
      </div>
      <button type="button" className="aptmntViewButton" onClick={() => {
        navigation.navigate('review', {ApartmentName});
      }}>
        Write a review!
      </button>
    </div>
  );
}

export {ApartmentReviews};
