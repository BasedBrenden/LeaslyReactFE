import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {
  Button,
  Center,
  Text,
  VStack,
  View,
} from 'native-base';
import Carousel from 'react-native-reanimated-carousel';

export default function ApartmentCarousel(props) {
  /* ---------------------------------- Props --------------------------------- */
  const {listings} = props;
  const navigate = useNavigation();

  /* ---------------------------- Utility Functions --------------------------- */
  const _renderItem = (index) => {
    const item = listings[index];
    return (
      <Center>
        <VStack
          space = {4}
          style={{
            shadowColor: '#5b43a9',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 1,
            shadowRadius: 40,
            elevation: 10, // This property is required for Android
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 3,
            backgroundColor: 'rgb(46, 46, 53)',
            width: 400,
            height: 325,
            padding: 50,
            margin: 25,
          }}>
          {item.leaserId &&
          <>
            <Text fontSize={'xl'}> {item.apartmentName}</Text>
            <Text>Poster: {item.leaserId}</Text>
            <Text>Floor Plan: {item.bedrooms} bed, {item.bathrooms} bath</Text>
            <Text>Price: ${item.rent}/month</Text>
            <Text>{item.description}</Text>
            <Button
              onPress={() => navigate('messages', {sublet: item.leaserId})}>
                Message
            </Button>
          </>
          }
        </VStack>
      </Center>
    );
  };

  return (
    <View flex={true} w={'100%'} h={Dimensions.get('window').height / 3}>
      <Text fontSize={'xl'} textAlign={'center'}>Subleases Available </Text>
      <Carousel
        loop
        width={Dimensions.get('window').width}
        height={400}
        autoPlay={true}
        data={listings}
        scrollAnimationDuration={1500}
        autoPlayInterval={8000}
        renderItem={({index}) => _renderItem(index)}
      />
    </View>
  );
}

export {
  ApartmentCarousel,
};
