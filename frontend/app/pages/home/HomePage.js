import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {
  Button,
  Center,
  Flex,
  HStack,
  Text,
  View,
} from 'native-base';

import backgroundImage from '../../../assets/backgrounds/school.jpg';
import ApartmentCarousel from '../../components/Apartment Carousel';

function HomePage(props) {
  const {navigation} = props;
  const [data, setData] = useState([]);

  const jumbo = {
    pt: '12rem',
    width: '100%',
    height: '30rem',
  };

  const titleText = {
    letterSpacing: 'sm',
    bold: true,
  };

  useEffect(() => {
    fetch('https://leaslybackend2-env.eba-p3eyijpv.us-east-1.elasticbeanstalk.com/api/sortedSubleases').then((response) => response.json()).then((sublets) => {
      setData({
        listings: sublets,
      });
    });
  }, []);

  return (
    <View
      h={'100%'}>
      <ImageBackground source={{uri: backgroundImage}} w="100%">
        <Flex {...jumbo}>
          <Center>
            <Text {...titleText} fontSize="4xl">Welcome to Leasly</Text>
            <Text {...titleText} fontSize="2xl">Find your dream apartment in San Marcos. Browse our listings and search for the perfect home with ease. Start your search today!</Text>
          </Center>
        </Flex>
      </ImageBackground>
      <ApartmentCarousel listings={data.listings}/>
      <Center backgroundColor={'rgb(22, 22, 26)'}>
        <HStack mt={'auto'} space={10}>
          <Button onPress={() => navigation.navigate('addApartment', {apartmentName: 'none'})}>Create a New Listing</Button>
          <Button onPress={() => navigation.navigate('allApartments')}>View All Apartments</Button>
        </HStack>
      </Center>
    </View>
  );
}

export default HomePage;
