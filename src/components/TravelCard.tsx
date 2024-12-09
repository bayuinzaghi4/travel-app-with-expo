import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Plane, User, Calendar } from 'lucide-react-native';

interface TravelCardProps {
  referenceNumber: string;
  draftNumber?: string;
  travelType: string;
  locations: number;
  travelerName: string;
  travelerId: string;
  startDate: string;
  endDate: string;
  onUpload?: () => void;
  style?: object;
}

export const TravelCard: React.FC<TravelCardProps> = ({
  referenceNumber,
  draftNumber = '-',
  travelType,
  locations,
  travelerName,
  travelerId,
  startDate,
  endDate,
  onUpload,
  style
}) => {
  return (
    <View style={[styles.card, style]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.referenceNumber}>{referenceNumber}</Text>
        <View style={styles.draftContainer}>
          <Text style={styles.draftLabel}>Draf No</Text>
          <Text style={styles.draftNumber}>{draftNumber}</Text>
        </View>
      </View>

      {/* Travel Type Section */}
      <View style={styles.travelInfo}>
        <View style={styles.typeContainer}>
          <Plane size={16} color="#666" />
          <Text style={styles.travelType}>{travelType}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.divider}>------------------------</Text>
          <Text style={styles.locations}>{locations} Location</Text>
        </View>
      </View>

      {/* Traveler Info Section */}
      <View style={styles.travelerInfo}>
        <User size={16} color="#666" />
        <Text style={styles.travelerName}>
          {travelerName} ({travelerId})
        </Text>
      </View>

      {/* Date Range Section */}
      <View style={styles.dateContainer}>
        <Calendar size={16} color="#666" />
        <Text style={styles.dateText}>
          {startDate} / {endDate}
        </Text>
      </View>

      {/* Upload Button */}
      <TouchableOpacity 
        style={styles.uploadButton}
        onPress={onUpload}
      >
        <Text style={styles.uploadText}>Upload Document</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 1,
    marginBottom: 19,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 327
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  referenceNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  draftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  draftLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  draftNumber: {
    fontSize: 14,
    color: '#666',
  },
  travelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  travelType: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    color: '#ddd',
    marginHorizontal: 8,
  },
  locations: {
    fontSize: 14,
    color: '#ff6b00',
  },
  travelerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  travelerName: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  uploadButton: {
    backgroundColor: '#4052B6',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  uploadText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TravelCard;

// Usage example:
// <TravelCard
//   referenceNumber="TP-24-13810"
//   travelType="Overseas"
//   locations={1}
//   travelerName="THAARIQ BASYAARAH"
//   travelerId="02335050"
//   startDate="08-10-2024"
//   endDate="11-10-2024"
//   onUpload={() => console.log('Upload pressed')}
// />

