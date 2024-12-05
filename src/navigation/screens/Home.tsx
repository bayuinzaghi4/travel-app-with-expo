import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
import { Grid, Bell, Plane, User, Calendar, Search } from 'lucide-react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';


interface TravelRequestProps {
  requestNo: string;
  draftNo: string;
  locations: number;
  travelerName: string;
  travelerId: string;
  startDate: string;
  endDate: string;
}

const TravelRequest: React.FC<TravelRequestProps> = ({
  requestNo,
  draftNo,
  locations,
  travelerName,
  travelerId,
  startDate,
  endDate,
}) => (
  <View style={styles.card}>
    <View style={styles.requestHeader}>
      <Text style={styles.requestNo}>{requestNo}</Text>
      <Text style={styles.draftNo}>Draf No - {draftNo}</Text>
    </View>
    <View style={styles.requestDetails}>
      <View style={styles.row}>
        <Plane size={16} color="#666" />
        <Text style={styles.detailText}>Overseas</Text>
        <Text style={styles.separator}>----------------------</Text>
        <Text style={styles.locationText}>{locations} Location</Text>
      </View>
      <View style={styles.row}>
        <User size={16} color="#666" />
        <Text style={styles.detailText}>{travelerName} ({travelerId})</Text>
      </View>
      <View style={styles.row}>
        <Calendar size={16} color="#666" />
        <Text style={styles.detailText}>{startDate} / {endDate}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.uploadButton}>
      <Text style={styles.uploadButtonText}>Upload Document</Text>
    </TouchableOpacity>
  </View>
);

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FocusAwareStatusBar barStyle="light-content" backgroundColor="#3F51B5" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
          source={require('./../../assets/travelLogo.png')}
          style={styles.logo}/>
          <Text style={styles.headerTitle}>Travel System</Text>
          <Bell size={24} color="white" />
        </View>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.userName}>Adnan Mahfuzhon - ISTD</Text>
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
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Waiting</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <TravelRequest
          requestNo="TP-24-13810"
          draftNo="-"
          locations={1}
          travelerName="THAARIQ BASYAARAH"
          travelerId="02335050"
          startDate="08-10-2024"
          endDate="11-10-2024"
        />
        <TravelRequest
          requestNo="TP-24-13810"
          draftNo="-"
          locations={2}
          travelerName="THAARIQ BASYAARAH"
          travelerId="02335050"
          startDate="08-10-2024"
          endDate="11-10-2024"
        />
      </ScrollView>
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
  },
  welcomeText: {
    color: 'white',
    fontSize: 14,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  searchContainer: {
    margin: 16,
    position: 'relative',
  },
  logo: {
    width: 20,
    height: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    paddingRight: 40,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
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
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  requestNo: {
    fontSize: 16,
    fontWeight: '600',
  },
  draftNo: {
    color: '#666',
  },
  requestDetails: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    color: '#666',
    flex: 1,
  },
  separator: {
    color: '#ccc',
  },
  locationText: {
    color: '#FF9800',
  },
  uploadButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Home;

