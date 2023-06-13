import React from 'react';
import './ApartmentSubleaseBoard.css';
import {useNavigation} from '@react-navigation/native';
import genericApartmentPhoto from '../../assets/apartments/generic_sublease.jpg';

const ApartmentSubleaseBoard = ({listings, apartmentName}) => {
  /* ---------------------------------- Props --------------------------------- */
  // const {navigation, listings} = props;
  const navigation = useNavigation();
  return (
    <div className="bountyContainer">
      <div className="bountyView">
        {(listings.length === 0) ? <p className="noSubleases"> No Current Subleases!</p> :
          listings.map((sublet, index) => {
            if (sublet.leaserId) {
              return (
                <div className="bountyCards" key={index}>
                  <img className="bountyImage" src={genericApartmentPhoto} />
                  <div className="bountyGeneral">
                    <p>{apartmentName}</p>
                    <p> Poster: {sublet.leaserId}</p>
                    <p> Floor Plan: {sublet.bedrooms} bed, {sublet.bathrooms} bath</p>
                    <p> Price: ${sublet.rent}/month</p>
                  </div>
                  <div className="bountyDescription">
                    <p> {sublet.description}</p>
                    <button type="button" className="aptmntViewButton" onClick={() => {
                      navigation.navigate('messages', {sublet: sublet.leaserId});
                    }}> Message </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default ApartmentSubleaseBoard;
