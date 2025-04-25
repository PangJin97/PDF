import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    height:50,
    backgroundColor:'orange'
  },
  headerTitle:{
    fontSize:30,
    color:'white'
  }
})












