const format = require('date-fns/format');

const { changelogConfig } = require('./path.util');

const getNextDayOfTheWeek = (
  dayName,
  excludeToday = true,
  refDate = new Date()
) => {
  const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
    dayName.slice(0, 3).toLowerCase()
  );
  if (dayOfWeek < 0) return null;

  const weekModifier = 7 * changelogConfig['release-weeks'];

  refDate.setHours(0, 0, 0, 0);
  refDate.setDate(
    refDate.getDate() +
      +!!excludeToday +
      ((dayOfWeek + weekModifier - refDate.getDay() - +!!excludeToday) %
        weekModifier)
  );

  return refDate;
};

const getVersionReleaseDate = () =>
  format(
    getNextDayOfTheWeek(changelogConfig['release-day-of-week'], false),
    'dd/MM/yyyy'
  );

module.exports = {
  getNextDayOfTheWeek,
  getVersionReleaseDate,
};
