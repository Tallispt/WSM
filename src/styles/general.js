import metrics from './metrics.js';
import colors from './colors.js';
import fonts from './fonts.js';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;