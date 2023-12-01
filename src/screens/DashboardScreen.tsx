import { StyleSheet, Text, View } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>DASHBOARD</Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
