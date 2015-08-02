var Datetime = (function() {
  dateDigitToString = function(num) {
    return num < 10 ? '0' + num : num;
  };

  function Datetime() {}
  Datetime.getFormattedDate = function(datetime) {

    var currentDate = new Date(),
      year = dateDigitToString(datetime['year']),
      month = dateDigitToString(datetime['month']),
      date = dateDigitToString(datetime['day']),
      hour = dateDigitToString(datetime['hour']),
      minute = dateDigitToString(datetime['minute']),
      second = dateDigitToString(datetime['second']),
      formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
  };
  return Datetime;
})();


module.exports = Datetime;
