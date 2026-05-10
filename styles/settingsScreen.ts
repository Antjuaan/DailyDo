import { StyleSheet } from 'react-native';
import { lightColors } from '../context/ThemeContext';

export const makeStyles = (colors: typeof lightColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: colors.title,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.subtitle,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontSize: 16,
    color: colors.text,
  },
  timePicker: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.inputBorder,
    paddingTop: 20,
  },
  timePickerLabel: {
    fontSize: 14,
    color: colors.subtitle,
    marginBottom: 16,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  timeUnit: {
    alignItems: 'center',
    gap: 8,
  },
  timeArrow: {
    fontSize: 20,
    color: '#4CAF50',
    paddingHorizontal: 16,
  },
  timeValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.title,
    width: 60,
    textAlign: 'center',
  },
  timeSeparator: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.title,
    marginBottom: 4,
  },
});