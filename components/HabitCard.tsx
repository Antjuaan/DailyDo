import { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Habit } from '../types/habit';

type Props = {
  habit: Habit;
  onPress: () => void;
  onLongPress: () => void;
  styles: any;
};

export default function HabitCard({ habit, onPress, onLongPress, styles }: Props) {
  const scale = useSharedValue(1);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    scale.value = withSequence(
      withTiming(0.95, { duration: 80 }),
      withSpring(1, { damping: 10 })
    );
  }, [habit.completed]);

  const handlePress = () => {
    scale.value = withSequence(
      withTiming(0.95, { duration: 80 }),
      withSpring(1, { damping: 10 })
    );
    onPress();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={{ borderRadius: 12, marginBottom: 12, overflow: 'hidden' }}>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          style={[styles.card, habit.completed && styles.cardCompleted, { borderRadius: 0, marginBottom: 0 }]}
          onPress={handlePress}
          onLongPress={onLongPress}
          activeOpacity={0.8}
        >
          <Text style={styles.emoji}>{habit.emoji}</Text>
          <Text style={[styles.name, habit.completed && styles.nameCompleted]}>
            {habit.name}
          </Text>
          <Text style={styles.check}>{habit.completed ? '✅' : '⬜'}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}