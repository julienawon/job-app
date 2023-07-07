import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");


  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Adrian</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            placeholder='Search for your favorite job'
            onChange={() => {}}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => router.push('/search')}  
          >
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
        )}
        />
      </View>
    </View>
  )
}

export default Welcome