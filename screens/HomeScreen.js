// import React from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import { Text, FAB } from 'react-native-paper';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../assets/icon.png')} 
//           style={styles.logo}
//         />
//         <Text style={styles.logoText}>Welcome to Vehicle Maintenance App!</Text>
//       </View>

//       <Text style={styles.descriptionText}>
//       Add your first vehicle by clicking on the bottom right add button.</Text>

//       <FAB
//         style={styles.fab}
//         icon="plus"
//         onPress={() => navigation.navigate('AddEditVehicle')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     resizeMode: 'contain',
//   },
//   logoText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 16,
//   },
//   descriptionText: {
//     fontSize: 16,
//     marginTop: 16,
//     textAlign: 'center',
//     paddingHorizontal: 16,
//   },
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//     width: 56,
//     height: 56,
//     borderRadius: 28, // Half of the width and height
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });





//driving mode ka
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function HomeScreen() {
  // State to control visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Main content of the screen */}
      <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>Show Driving Mode</Text>
      </TouchableOpacity>

      {/* Modal component to show bottom sheet content */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.heading}>Driving</Text>
              <View style={styles.speedometerContainer}>
                <Text style={styles.kilometers}>2.3 km</Text>
                <Text style={styles.speed}>54</Text>
              </View>
              <View style={styles.specsContainer}>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Fuel consumption</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Engine</Text>
                  <Text style={styles.specValue}>90°C</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Fuel</Text>
                  <Text style={styles.specValue}>61%</Text>
                </View>
                <View style={styles.specRow}>
                  <Text style={styles.specLabel}>Tyres</Text>
                  <Text style={styles.specValue}> 29 PSI</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                <Text style={styles.closeButtonText}>Close driving mode</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#3a4a5a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  openButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#2a3a4a',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  speedometerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  kilometers: {
    fontSize: 16,
    color: '#8fa3b0',
    marginBottom: 5,
  },
  speed: {
    fontSize: 48,
    color: '#ffffff',
  },
  specsContainer: {
    marginTop: 20,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3a4a5a',
  },
  specLabel: {
    color: '#8fa3b0',
    fontSize: 16,
  },
  specValue: {
    color: '#ffffff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#3a4a5a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});



// export default HomeScreen;