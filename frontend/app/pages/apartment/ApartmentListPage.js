import React, {useState, useEffect} from 'react';
import './ApartmentListPage.css';

export default function ApartmentListPage(props) {
  const [allApartmentsArr, setAllApartmentsArr] = useState([]);
  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/apartments').then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        console.log(data);
        setAllApartmentsArr(data);
      }),
    );
  }, []);


  const {navigation} = props;
  return (
    <div className="mainContainer">
      <div className="listContainer">
        {allApartmentsArr.map((apartment) =>
          <div className="apartmentCard" key={apartment.name}>
            <img src={apartment.photo} alt="n/a" />
            <p>{apartment.name}</p>
            {/* on click, get the apartments name and pass that as a  prop to apartmntview.js.
                      or pass the apartments name itself to navigate("")*/}
            {/* :id will replace /00. :id is simply the UUID for the apartment that they are clicking on, or just apartment.name for now */}
            <button className="generalBtn" type="button" onClick={() => {
              navigation.navigate('viewApartment', {apartment});
            }}>More Info</button>
          </div>)}
      </div>
    </div>
  );
}

export {
  ApartmentListPage,
};
