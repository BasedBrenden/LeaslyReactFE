import React, {useState, useEffect} from 'react';
import {auth} from '../../util/FirebaseFuncs';
import {useRoute} from '@react-navigation/native';


export default function AddApartmentPage(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const apartmentName = useRoute().params.apartmentName;
  const {navigation} = props;
  const [subleaseData, setSubleaseData] = useState({
    leaserId: '',
    apartmentName: '',
    rent: '',
    bedrooms: '',
    bathrooms: '',
    startDate: '',
    endDate: '',
    sqft: '',
    description: '',
    address: '',
  });


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setSubleaseData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        setSubleaseData((prevFormData) => ({
          ...prevFormData,
          leaserId: auth.currentUser.displayName,
          apartmentName: apartmentName,
        }));
      } else {
        setIsAuthenticated(false);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/subleases/' + subleaseData.apartmentName, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subleaseData),
    }).then((response) => {
      console.log(subleaseData);
      navigation.navigate('home');
    }).catch((error) => {
      console.log(error);
      // do something with the error, e.g. show an error message
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <h2 style={{color: 'black'}}>You need to sign in to add a new apartment.</h2>
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Rent:
          <input type="number" name="rent" value={subleaseData.rent} onChange={handleInputChange} />
        </label>
        <label>
          Bed:
          <input type="number" name="bedrooms" value={subleaseData.bedrooms} onChange={handleInputChange} />
        </label>
        <label>
          Bath:
          <input type="number" name="bathrooms" value={subleaseData.bathrooms} onChange={handleInputChange} />
        </label>
        <label>
          Sqft:
          <input type="number" name="sqft" value={subleaseData.sqft} onChange={handleInputChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" required pattern="\d{4}-\d{2}-\d{2}" value={subleaseData.startDate} onChange={handleInputChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" required pattern="\d{4}-\d{2}-\d{2}" value={subleaseData.endDate} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={subleaseData.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export {
  AddApartmentPage,
};
