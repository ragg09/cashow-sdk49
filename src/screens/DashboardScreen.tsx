import { Button, StyleSheet, Text, View } from 'react-native';
import { useGetExpenseTypesQuery } from '../redux/services/expenseTypeAPI';

const DashboardScreen = () => {
  const { data } = useGetExpenseTypesQuery();

  const onPressLearnMore = () => {
    console.warn(data);
  };
  return (
    <View style={styles.rootContainer}>
      <Text>DASHBOARDs</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
