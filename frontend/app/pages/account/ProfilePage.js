import React, {useState, useEffect} from 'react';
import {auth, db} from '../../util/FirebaseFuncs';
import {getDoc, doc, updateDoc} from 'firebase/firestore';
import ApartmentSubleaseBoard from '../../components/ApartmentSubleaseBoard';
import ApartmentReviews from '../../components/ApartmentReviews';
import {MaterialIcons} from 'react-native-vector-icons';
import {View, Center} from 'native-base';

import './ProfilePage.css';


export default function ProfilePage() {
  const [listings, setListings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userPFP, setUserPFP] = useState('');

  const getPFP = async () =>{
    const docRef = doc(db, 'userData', auth.currentUser.displayName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data().user.Inbox);
      setUserPFP(docSnap.data().user.photo);
    } else {
    // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const changePFP = (newPFP) =>{
    const docRef = doc(db, 'userData', auth.currentUser.displayName);
    updateDoc(docRef, {
      'user.photo': newPFP,
    });
    setUserPFP(newPFP);
  };

  const showDropdown = () =>{
    document.querySelector('.dropdownContent').classList.toggle('show');
  };
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
      res.json().then((review) => {
        // Setting data for reviews
        setReviews(review);
      }),
    );
    getPFP();
  }, []);

  return (
    <View>
      <Center w={'100%'} pl={'10%'} pr={'10%'}m={'auto'} backgroundColor={'rgb(22, 22, 26)'}>
        <div id="profileContainer">
          <div id="userInfoContainer">
            <h1 className="userName">{auth.currentUser.displayName}'s account info</h1>
            <div className="profilePhotoContainer">
              <h1>Profile Photo</h1>
              <img className="indivUserImg" src={userPFP} />
              <div className="photoChangeDiv" onClick={()=>{
                showDropdown();
              }}>
                <MaterialIcons name="edit" size={32} color="#c54cc5" />
                <div className="dropdownContent">
                  <div className="dropdownItem" onClick={()=>{
                    changePFP('https://favim.com/pd/p/orig/2019/02/22/dog-puppy-cute-Favim.com-6921035.jpg');
                  }}>
                    <p>Puppy1</p>
                  </div>
                  <div className="dropdownItem" onClick={()=>{
                    changePFP('https://us.123rf.com/450wm/mindsparx/mindsparx2303/mindsparx230304504/200539608-portrait-of-a-beautiful-siberian-husky-dog-with-sunglasses.jpg?ver=6');
                  }}>
                    <p>Puppy2</p>
                  </div>
                  <div className="dropdownItem" onClick={()=>{
                    changePFP('https://i.pinimg.com/736x/d5/78/20/d57820fa95585c8c0d1811301d31da1f--instagram-dog-diy-dog-toys.jpg');
                  }}>
                    <p>Puppy3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1>Your listings</h1>
          <ApartmentSubleaseBoard listings={listings} />

          <h1>Your reviews</h1>
          <div className="reviews">
            <ApartmentReviews reviews={reviews} />
          </div>
        </div>
      </Center>
    </View>
  );
}

export {
  ProfilePage,
};
