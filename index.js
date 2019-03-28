module.exports = function LocalDate(dateObject) {
  return {
    month: dateObject.getMonth(),
    year: dateObject.getFullYear(),
    date: dateObject.getDate(),
    day: dateObject.getDay()
  };
};
