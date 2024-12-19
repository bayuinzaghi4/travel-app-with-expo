import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { Menu, Bell, Search, Plane, Upload, ChevronRight, Clock, FileText, ArrowLeft } from 'lucide-react-native';

interface TravelRequest {
  id: string;
  draftNo: string;
  locations: string[];
  traveler: string;
  startDate: string;
  endDate: string;
}

export function TravelSystem() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Open');
  const [searchQuery, setSearchQuery] = useState('');
  
  const drawerAnimation = React.useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    const toValue = isDrawerOpen ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-280, 0],
  });

  const sampleRequests: TravelRequest[] = [
    {
      id: 'TP-24-13810',
      draftNo: 'Draft No',
      locations: ['Overseas'],
      traveler: 'THAARIQ BASYAARAH (02335050)',
      startDate: '08-10-2024',
      endDate: '11-10-2024',
    },
    {
      id: 'TP-24-13810',
      draftNo: 'Draft No',
      locations: ['Japan', 'China'],
      traveler: 'THAARIQ BASYAARAH (02335050)',
      startDate: '08-10-2024',
      endDate: '11-10-2024',
    },
  ];

  const renderDrawer = () => (
    <Animated.View 
      style={[
        styles.drawer,
        {
          transform: [{ translateX }],
        },
      ]}
    >
      <View style={styles.drawerHeader}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.backButton}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.drawerTitle}>Travel System</Text>
      </View>
      <View style={styles.drawerContent}>
        <TouchableOpacity style={styles.drawerItem}>
          <FileText color="#fff" size={20} />
          <Text style={styles.drawerItemText}>Travel Settlement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <FileText color="#fff" size={20} />
          <Text style={styles.drawerItemText}>Approval</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Clock color="#fff" size={20} />
          <Text style={styles.drawerItemText}>History</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Menu color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Travel Settlement</Text>
        <TouchableOpacity>
          <Bell color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Search color="#666" size={20} style={styles.searchIcon} />
        </View>

        <View style={styles.tabs}>
          {['Open', 'Draft', 'Waiting'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.requestsList}>
          {sampleRequests.map((request, index) => (
            <View key={index} style={styles.requestCard}>
              <View style={styles.requestHeader}>
                <Text style={styles.requestId}>{request.id}</Text>
                <View style={styles.draftNo}>
                  <Text style={styles.draftNoText}>{request.draftNo}</Text>
                  <ChevronRight color="#666" size={16} />
                </View>
              </View>
              
              <View style={styles.locationContainer}>
                <Plane color="#666" size={16} />
                <Text style={styles.locationText}>
                  {request.locations.join(' ')}
                </Text>
                <Text style={styles.locationCount}>
                  {request.locations.length} Location
                </Text>
              </View>

              <Text style={styles.travelerName}>{request.traveler}</Text>
              <Text style={styles.dates}>
                {request.startDate} / {request.endDate}
              </Text>

              <TouchableOpacity style={styles.uploadButton}>
                <Upload color="#fff" size={16} />
                <Text style={styles.uploadButtonText}>Upload Document</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {renderDrawer()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#3949AB',
    paddingTop: Platform.OS === 'android' ? 40 : 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#3949AB',
    borderRadius: 4,
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  requestsList: {
    flex: 1,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  requestId: {
    fontSize: 16,
    fontWeight: '600',
  },
  draftNo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  draftNoText: {
    color: '#666',
    marginRight: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    marginLeft: 8,
    marginRight: 8,
    color: '#666',
  },
  locationCount: {
    color: '#FF9800',
  },
  travelerName: {
    marginBottom: 4,
    color: '#666',
  },
  dates: {
    color: '#666',
    marginBottom: 12,
  },
  uploadButton: {
    backgroundColor: '#3949AB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 4,
  },
  uploadButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 280,
    backgroundColor: '#3949AB',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  drawerHeader: {
    padding: 16,
    paddingLeft: 56,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  drawerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  drawerContent: {
    padding: 16,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  drawerItemText: {
    color: '#fff',
    marginLeft: 16,
    fontSize: 16,
  },
});

