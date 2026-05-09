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
  todayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  todayCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.title,
  },
  todayLabel: {
    fontSize: 14,
    color: colors.subtitle,
    marginTop: 4,
  },
  todayEmoji: {
    fontSize: 40,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: colors.emojiOptionBg,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  streakLabel: {
    fontSize: 16,
    color: colors.title,
    fontWeight: '600',
  },
  streakSub: {
    fontSize: 13,
    color: colors.subtitle,
    marginTop: 2,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
  },
  weekDay: {
    alignItems: 'center',
    flex: 1,
  },
  weekBarBg: {
    width: 28,
    backgroundColor: colors.emojiOptionBg,
    borderRadius: 6,
    height: 70,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  weekBarFill: {
    width: 28,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  weekDayLabel: {
    fontSize: 11,
    color: colors.subtitle,
    marginTop: 6,
  },
  allTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allTimeItem: {
    alignItems: 'center',
    flex: 1,
  },
  allTimeValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.title,
  },
  allTimeLabel: {
    fontSize: 12,
    color: colors.subtitle,
    marginTop: 4,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 15,
    color: colors.subtitle,
    textAlign: 'center',
  },
});