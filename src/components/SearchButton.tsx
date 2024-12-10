import { StyleSheet,  View, TextInput, ViewStyle } from 'react-native';
import React from 'react';
import { Search } from 'lucide-react-native';

interface SearchButton {
    onPress?: () => void;
    style?: ViewStyle;
    placeholder: string;
}


const SearchButton: React.FC<SearchButton> = ({
onPress,
style,
placeholder
}) => {
  return (
    <View style={[styles.searchContainer, style]}>
        <TextInput
        onPress={onPress}
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        />
        <Search size={20} color="#666" style={styles.searchIcon} />
      </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
        margin: 3,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 15,
        position: 'relative',
      },
      searchInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        paddingRight: 40,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        height: 46,
        width: 328
      },
      searchIcon: {
        position: 'absolute',
        right: 12,
        top: 12,
      },
})

export default SearchButton;
