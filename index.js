module.exports = function LocalDate(dateObject) {
  return {
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
    date: dateObject.getDate(),
    day: dateObject.getDay()
  };
};
