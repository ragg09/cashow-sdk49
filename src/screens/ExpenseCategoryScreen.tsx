import { StyleSheet, Text, View } from 'react-native';

const ExpenseCategoryScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Expense Type (Category)</Text>
    </View>
  );
};

export default ExpenseCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
