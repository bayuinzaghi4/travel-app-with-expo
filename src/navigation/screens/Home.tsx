import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList
} from 'react-native';
import { Bell, Search } from 'lucide-react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import TravelCard from '../../components/TravelCard';
import Button from '../../components/Button';
import travelData from './dummy';

const Home: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('open');

  const handleButtonPress = (buttonName: string): void => {
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };

  const getButtonColor = (buttonName: string) => {
    return activeButton === buttonName ? '#3F51B5' : '#fff';
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.container1}>
            <Image 
              source={require('./../../assets/travelLogo.png')}
              style={styles.logo}
            />
            <Text style={styles.headerTitle}>Travel System</Text>
          </View>
          <Bell size={24} color="white" />
        </View>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.userName}>Dias Bayu Inzaghi - ISTD</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <Search size={20} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.tabs}>
        {/* Button pertama */}
        <Button 
          title="Open" 
          onPress={() => handleButtonPress('open')} 
          style={StyleSheet.flatten([styles.ButtonCard, { backgroundColor: getButtonColor('open') }])}
          textStyle={styles.titlee}
        />
        {/* Button kedua */}
        <Button 
          title="Draft" 
          onPress={() => handleButtonPress('draft')} 
          style={StyleSheet.flatten([styles.ButtonCard, { backgroundColor: getButtonColor('draft') }])}
          textStyle={styles.titlee}
        />
        {/* Button ketiga */}
        <Button 
          title="Waiting" 
          onPress={() => handleButtonPress('waiting')} 
          style={StyleSheet.flatten([styles.ButtonCard, { backgroundColor: getButtonColor('waiting') }])}
          textStyle={styles.titlee}
        />
      </View>

          <FlatList
            contentContainerStyle={styles.flatListContainer}
            data={travelData}
            renderItem={({ item }) =>
            <TravelCard
            key={item.id}
            referenceNumber={item.referenceNumber}
            travelType={item.travelType}
            locations={item.locations}
            travelerName={item.travelerName}
            travelerId={item.travelerId}
            startDate={item.startDate}
            endDate={item.endDate}
            />
          }
          keyExtractor={item => item.id}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3F51B5',
    padding: 16,
    paddingTop: 8,
    height: 109
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    textAlign: 'center'
  },
  welcomeText: {
    marginTop: 15,
    color: 'white',
    fontSize: 11,
  },
  userName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchContainer: {
    margin: 3,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 15,
    position: 'relative',
  },
  logo: {
    width: 20,
    height: 20,
  },
  titlee: {
    fontSize: 12
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: '#D5D5D5',
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  tab: {
    marginRight: 16,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3F51B5',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#3F51B5',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  ButtonCard: {
    width: 100,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  flatListContainer: {
    flexGrow: 1,  // Pastikan FlatList menggunakan ruang yang tersedia
    paddingHorizontal: 16,
    justifyContent: 'center', // Memusatkan item
    alignItems: 'center'  // Memusatkan item secara horisontal
  }
});

export default Home;
