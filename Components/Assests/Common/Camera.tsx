import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  launchCamera,
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';

// TypeScript: Define a function to open the camera
const CameraScreen: React.FC = () => {
  // Function to open the camera
  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo', // Take a photo
      cameraType: 'back', // Use the back camera (you can also use 'front')
      saveToPhotos: true, // Optionally save the photo to the gallery
    };

    // Launch the camera and handle the response
    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
      } else if (response.errorCode) {
        Alert.alert('Camera Error: ' + response.errorMessage);
      } else {
        // The response contains the image data
        const { uri } = response.assets ? response.assets[0] : {}; // Get URI of the captured image
        if (uri) {
          console.log('Captured Image URI:', uri);
          // You can now display or upload the image using the URI
        }
      }
    });
  };

  return (
    <TouchableOpacity onPress={openCamera}>
      <Icon name="camera" size={35} color="#999" />
    </TouchableOpacity>
  );
};

export default CameraScreen;
