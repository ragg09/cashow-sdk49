import { StyleSheet, Text, View, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment } from '../redux/features/counter/counterSlice';

const CounterScreen = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.rootContainer}>
      <Text>Testing {count}</Text>
      <View>
        <Button
          onPress={() => dispatch(increment())}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => dispatch(decrement())}
          title="minus"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
