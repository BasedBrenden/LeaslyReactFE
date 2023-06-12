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
        <VStack space={3}
          borderRadius={5}
          h={250}
          p={50}
          ml={25}
          mr={25}>
          {item.leaserId &&
          <>
            <Text> {item.apartmentName}</Text>
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
          <Text fontSize={'xl'}>{item.title}</Text>
          <Text>{item.text}</Text>
        </VStack>
      </Center>
    );
  };

  return (
    <View flex={true} w={'100%'} h={325}>
      <Text fontSize={'xl'} textAlign={'center'}>Subleases Available </Text>
      <Carousel
        loop
        width={Dimensions.get('window').width}
        height={325}
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
