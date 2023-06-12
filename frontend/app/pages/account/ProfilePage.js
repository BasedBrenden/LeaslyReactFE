import React, {useState, useEffect} from 'react';
import {auth} from '../../util/FirebaseFuncs';
import ApartmentSubleaseBoard from '../../components/ApartmentSubleaseBoard';
import ApartmentReviews from '../../components/ApartmentReviews';

export default function ProfilePage() {
  const [listings, setListings] = useState([]);
  const [reviews, setReviews] = useState([]);
  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the listings API
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/userSubleases/' + auth.currentUser.displayName).then((res) =>
      res.json().then((sublets) => {
        // Setting data for listings
        setListings(sublets);
      }),
    );

    // Using fetch to fetch the reviews API
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/userReviews/' + auth.currentUser.displayName).then((res) =>
      res.json().then((reviews) => {
        // Setting data for reviews
        setReviews(reviews);
      }),
    );
  }, []);

  return (
    <div>
      <h1 style={{color: 'black'}}>Username</h1>
      <p>{auth.currentUser.displayName}</p>
      <h1 style={{color: 'black'}}>Your listings</h1>
      {/* <div className="listings">
        {listings.map((sublet) =>
          <div key={sublet.rent}>
            <ul>
              <li>Apartment name: {sublet.apartmentName}</li>
              <li>Price: ${sublet.rent}</li>
              <li>Start date: {sublet.startDate}</li>
              <li>End date: {sublet.endDate}</li>
              <li> Floor Plan: {sublet.bedrooms} bed, {sublet.bathrooms} bath</li>
              <li>Listing description: {sublet.description}</li>
            </ul>
          </div>,
        )}
      </div>
      */}
      <ApartmentSubleaseBoard listings={listings} />

      <h1 style={{color: 'black'}}>Your reviews</h1>
      <div className="reviews">
        <ApartmentReviews reviews={reviews} />
      </div>
    </div>
  );
}

export {
  ProfilePage,
};
