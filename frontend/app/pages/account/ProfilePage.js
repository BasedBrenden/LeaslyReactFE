import React, {useState, useEffect} from 'react';
import {auth} from '../../util/FirebaseFuncs';

export default function ProfilePage() {
  const [data, setdata] = useState({
    listings: [],
    reviews: [],
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the listings API
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/userSubleases/' + auth.currentUser.displayName).then((res) =>
      res.json().then((sublets) => {
        // Setting data for listings
        setdata({...data,
          listings: sublets});
      }),
    );

    // Using fetch to fetch the reviews API
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/userReviews/' + auth.currentUser.displayName).then((res) =>
      res.json().then((reviews) => {
        // Setting data for reviews
        setdata({...data,
          reviews: reviews});
      }),
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 style={{color: 'black'}}>Username</h1>
      <p>{auth.currentUser.displayName}</p>
      <h1 style={{color: 'black'}}>Your listings</h1>
      <div className="listings">
        {data.listings.map((sublet) =>
          <div key={sublet.rent}>
            <ul>
              <li>Apartment name: </li>
              <li>Price: {sublet.rent}</li>
              <li>Start date: {sublet.startDate}</li>
              <li>End date: {sublet.endDate}</li>
              <li> Floor Plan: {sublet.bedrooms} bed, {sublet.bathrooms} bath</li>
              <li>Listing description: {sublet.description}</li>
            </ul>
          </div>,
        )}

      </div>

      <h1 style={{color: 'black'}}>Your reviews</h1>
      <div className="reviews">
        {data.reviews.map((review) =>
          <div key={review.userId}>
            <ul>
              <li>Apartment name: </li>
              <li>Rating: {review.rating}</li>
              <li>Comment: {review.description}</li>
            </ul>
          </div>,
        )}
      </div>
    </div>
  );
}

export {
  ProfilePage,
};
