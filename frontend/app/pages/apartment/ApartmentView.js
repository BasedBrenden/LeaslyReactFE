
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {MaterialIcons} from 'react-native-vector-icons';
import ApartmentReviews from '../../components/ApartmentReviews';
import ApartmentSubleaseBoard from '../../components/ApartmentSubleaseBoard';

import './ApartmentView.css';

/* needed functions
        - add image links
        - section that lists all sublistings on this apartment
        - button to send message to user to inquire about sublease redirects to messages passing the subleasers username.
        - button to post a subleasing, redirects to sublease button from HomePage.
    */


export default function ViewApartmentPage({ }) {
  const [apartmentInfo, setApartmentInfo] = useState({});
  const [amenities, setAmenities] = useState({});
  const [listings, setListings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const info = useRoute().params.apartment;
  useEffect(() => {
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/apartments/' + info).then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        console.log(data);
        setApartmentInfo(data);
        setAmenities(data.amenities);
        setListings(data.subleases);
        setReviews(data.reviews);
      }),
    );
    /*
    fetch(`https://leaslybackend.herokuapp.com/api/review?apartment=${info.name}`).then((res) =>
      res.json()).then((data) => {
      const tempArr = [];
      let tempNumber = 0;
      data.forEach((review) => {
        tempArr.push(review.rating);
        tempNumber += review.rating;
      });
      setApartmentRating(tempNumber / tempArr.length);
    });
    */
    console.log({apartmentInfo});
    // eslint-disable-next-line
  }, []);

  return (
    {/* View goes here, but i don't know how to make this one specifically light themed*/ },
    <div className="aptmntViewContainer">
      <div className="apartmentInfoContainer">
        <img className="apartmentImage" src={apartmentInfo.photo} />
        <div className="apartmentInfo">
          <p className="apartmentName"> {apartmentInfo.name}</p>
          <p> {apartmentInfo.rating}/5</p>
          <p> {apartmentInfo.address}</p>
          <a> {apartmentInfo.link} </a>
          <p> {apartmentInfo.phoneString}</p>
          <p> Amenities</p>
          <div className="amenitiesContainer">
            {/* 9 divs acting as cards, one for each amenitie, arranged in a flex container*/}
            {(amenities.hasPets) ?
              <div>
                <p> Pet Friendly </p>
                <MaterialIcons name="pets" size={32} color="white" />
              </div> :
              <div>
                <p> No Pets Allowed </p>
                <MaterialIcons name="pets" size={32} color="black" />
              </div>
            }
            {(amenities.hasPool) ?
              <div>
                <p> Facility Pool </p>
                <MaterialIcons name="spa" size={32} color="white" />
              </div> :
              <div>
                <p> No Pool </p>
                <MaterialIcons name="spa" size={32} color="black" />
              </div>
            }
            {(amenities.hasGym) ?
              <div>
                <p> Facility Gym </p>
                <MaterialIcons name="directions-run" size={32} color="white" />
              </div> :
              <div>
                <p> No Gym </p>
                <MaterialIcons name="directions-run" size={32} color="black" />
              </div>
            }
            {(amenities.incldUtilities) ?
              <div>
                <p> Utilities Included </p>
                <MaterialIcons name="ac-unit" size={32} color="white" />
              </div> :
              <div>
                <p> Utilities Not Included </p>
                <MaterialIcons name="ac-unit" size={32} color="black" />
              </div>
            }
            {(amenities.hasShuttleRoute) ?
              <div>
                <p> Bus Route</p>
                <MaterialIcons name="bus-alert" size={32} color="white" />
              </div> :
              <div>
                <p> No Bus Route </p>
                <MaterialIcons name="bus-alert" size={32} color="black" />
              </div>
            }
            {(amenities.hasIndvLeases) ?
              <div>
                <p> Individual lease</p>
                <MaterialIcons name="person" size={32} color="white" />
              </div> :
              <div>
                <p> No individual lease </p>
                <MaterialIcons name="person" size={32} color="black" />
              </div>
            }
            {(amenities.hasLaundry) ?
              <div>
                <p> Laundry included </p>
                <MaterialIcons name="dry-cleaning" size={32} color="white" />
              </div> :
              <div>
                <p> No Laundry </p>
                <MaterialIcons name="dry-cleaning" size={32} color="black" />
              </div>
            }
            {(amenities.hasFurnishedRoom) ?
              <div>
                <p> Furnished </p>
                <MaterialIcons name="king-bed" size={32} color="white" />
              </div> :
              <div>
                <p> Not Furnished </p>
                <MaterialIcons name="king-bed" size={32} color="black" />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="subleaseViewContainer">
        <ApartmentSubleaseBoard listings={listings} />
      </div>
      <div className="reviewViewContainer">
        <ApartmentReviews reviews={reviews} apartmentName={apartmentInfo.name}/>
      </div>
    </div>
  );
}

export {
  ViewApartmentPage,
};
