import { StyleSheet } from 'react-native';
import { lightColors } from '../context/ThemeContext';

export const makeStyles = (colors: typeof lightColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  progressDot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.emojiOptionBg,
  },
  progressDotActive: {
    backgroundColor: '#4CAF50',
  },
  slide: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.title,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.subtitle,
    lineHeight: 24,
  },
  featureList: {
    width: '100%',
    gap: 10,
    marginTop: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    gap: 12,
    overflow: 'hidden',
  },
  featureEmoji: {
    fontSize: 28,
  },
  featureText: {
    flex: 1,
    flexShrink: 1,
    fontSize: 13,
    color: colors.text,
    lineHeight: 13,
    flexWrap: 'wrap',
    paddingRight: 8,
  },
  featureTitle: {
    fontWeight: '600',
    color: colors.title,
    fontSize: 15,
    marginBottom: 2,
    flexShrink: 1,
  },
  form: {
    width: '100%',
    gap: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorder,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 4,
    color: colors.input,
  },
  emojiLabel: {
    fontSize: 14,
    color: colors.subtitle,
    marginBottom: 8,
  },
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  emojiOption: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: colors.emojiOptionBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiSelected: {
    backgroundColor: colors.emojiSelectedBg,
    borderWidth: 2,
    borderColor: colors.emojiSelectedBorder,
  },
  emojiOptionText: {
    fontSize: 24,
  },
  footer: {
    gap: 12,
  },
  btnNext: {
    backgroundColor: '#4CAF50',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  btnNextText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnSkip: {
    alignItems: 'center',
    padding: 8,
  },
  btnSkipText: {
    color: colors.subtitle,
    fontSize: 15,
  },
});