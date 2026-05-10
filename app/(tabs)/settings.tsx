import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { makeStyles } from '../../styles/settingsScreen';
import { cancelAllNotifications, scheduleReminderNotification } from '../../utils/notifications';

const NOTIFICATION_KEY = 'notification_settings';

export default function SettingsScreen() {
  const [enabled, setEnabled] = useState(false);
  const [hour, setHour] = useState(20);
  const [minute, setMinute] = useState(0);
  const { colors, toggleTheme, theme } = useTheme();
  const styles = makeStyles(colors);

  useEffect(() => {
    const load = async () => {
      const stored = await AsyncStorage.getItem(NOTIFICATION_KEY);
      if (stored) {
        const { enabled, hour, minute } = JSON.parse(stored);
        setEnabled(enabled);
        setHour(hour);
        setMinute(minute);
      }
    };
    load();
  }, []);

  const save = async (newEnabled: boolean, newHour: number, newMinute: number) => {
    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify({ enabled: newEnabled, hour: newHour, minute: newMinute }));
    if (newEnabled) {
      await scheduleReminderNotification(newHour, newMinute);
    } else {
      await cancelAllNotifications();
    }
  };

  const toggleEnabled = async (value: boolean) => {
    setEnabled(value);
    await save(value, hour, minute);
    if (value) {
      Alert.alert('Notifications enabled', `You will be reminded every day at ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
    }
  };

  const changeHour = (delta: number) => {
    const newHour = (hour + delta + 24) % 24;
    setHour(newHour);
    if (enabled) save(enabled, newHour, minute);
  };

  const changeMinute = (delta: number) => {
    const newMinute = (minute + delta + 60) % 60;
    setMinute(newMinute);
    if (enabled) save(enabled, hour, newMinute);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings ⚙️</Text>

      {/* Theme */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Dark mode</Text>
            <Switch
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{ false: '#ddd', true: '#4CAF50' }}
              thumbColor="#fff"
            />
          </View>
        </View>
      </View>

      {/* Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Daily reminder</Text>
            <Switch
              value={enabled}
              onValueChange={toggleEnabled}
              trackColor={{ false: '#ddd', true: '#4CAF50' }}
              thumbColor="#fff"
            />
          </View>

          {enabled && (
            <View style={styles.timePicker}>
              <Text style={styles.timePickerLabel}>Reminder time</Text>
              <View style={styles.timeRow}>
                <View style={styles.timeUnit}>
                  <TouchableOpacity onPress={() => changeHour(1)}>
                    <Text style={styles.timeArrow}>▲</Text>
                  </TouchableOpacity>
                  <Text style={styles.timeValue}>{String(hour).padStart(2, '0')}</Text>
                  <TouchableOpacity onPress={() => changeHour(-1)}>
                    <Text style={styles.timeArrow}>▼</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.timeSeparator}>:</Text>
                <View style={styles.timeUnit}>
                  <TouchableOpacity onPress={() => changeMinute(5)}>
                    <Text style={styles.timeArrow}>▲</Text>
                  </TouchableOpacity>
                  <Text style={styles.timeValue}>{String(minute).padStart(2, '0')}</Text>
                  <TouchableOpacity onPress={() => changeMinute(-5)}>
                    <Text style={styles.timeArrow}>▼</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}