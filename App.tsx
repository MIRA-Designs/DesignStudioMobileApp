/**
 * DesignStudioMobileApp - Main Application
 * Custom design studio interface with search, featured image, and category navigation
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from 'react-native';

function App() {
  // Hook to detect if device is in dark mode
  const isDarkMode = useColorScheme() === 'dark';

  // Handler function for search input
  const handleSearch = (text: string) => {
    console.log('Search query:', text);
    // You can add search logic here later
  };

  // Handler function for category button press
  const handleCategoryPress = (category: string) => {
    Alert.alert('Category Selected', `You selected: ${category}`);
    // You can add navigation logic here later
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        
        {/* Header Section with App Title */}
        <View style={styles.header}>
          <Text style={[styles.appTitle, isDarkMode && styles.darkText]}>
            🎨 Design Studio
          </Text>
          <Text style={[styles.subtitle, isDarkMode && styles.darkSubtitle]}>
            Discover Amazing Designs
          </Text>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, isDarkMode && styles.darkSearchInput]}
            placeholder="Search for designs..."
            placeholderTextColor={isDarkMode ? '#999' : '#666'}
            onChangeText={handleSearch}
          />
        </View>

        {/* Featured Image Section */}
        <View style={styles.imageContainer}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
            Featured Design
          </Text>
          {/* Placeholder for your design studio image */}
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>
              📷 Add your design studio image here
            </Text>
            <Text style={styles.imagePath}>
              <Image 
                source={require('./assets/images/featured-design.png')} 
                style={styles.featuredImage}
                resizeMode="cover"
              />
            </Text>
          </View>
        </View>

        {/* Main Content Area */}
        <View style={styles.contentContainer}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
            Browse by Category
          </Text>
          <Text style={[styles.description, isDarkMode && styles.darkSubtitle]}>
            Select a category to explore our design collections
          </Text>
        </View>

      </ScrollView>

      {/* Bottom Footer with Category Icons */}
      <View style={[styles.footer, isDarkMode && styles.darkFooter]}>
        
        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => handleCategoryPress('Women')}
        >
          <Text style={styles.categoryIcon}>👩</Text>
          <Text style={[styles.categoryText, isDarkMode && styles.darkText]}>Women</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => handleCategoryPress('Men')}
        >
          <Text style={styles.categoryIcon}>👨</Text>
          <Text style={[styles.categoryText, isDarkMode && styles.darkText]}>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => handleCategoryPress('Kids')}
        >
          <Text style={styles.categoryIcon}>👶</Text>
          <Text style={[styles.categoryText, isDarkMode && styles.darkText]}>Kids</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoryButton}
          onPress={() => handleCategoryPress('Infants')}
        >
          <Text style={styles.categoryIcon}>🍼</Text>
          <Text style={[styles.categoryText, isDarkMode && styles.darkText]}>Infants</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

// Styles for all components
const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  
  // Scroll view
  scrollView: {
    flex: 1,
  },
  
  // Header section
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  darkText: {
    color: '#fff',
  },
  darkSubtitle: {
    color: '#ccc',
  },
  
  // Search bar
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkSearchInput: {
    backgroundColor: '#333',
    borderColor: '#555',
    color: '#fff',
  },
  
  // Image section
  imageContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: '#e9ecef',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dee2e6',
    borderStyle: 'dashed',
  },
  imagePlaceholderText: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 8,
  },
  imagePath: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  
  // Content area
  contentContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  
  // Footer with category buttons
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  darkFooter: {
    backgroundColor: '#333',
    borderTopColor: '#555',
  },
  
  // Category buttons
  categoryButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
});

export default App;
