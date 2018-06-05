function MatchDays(){
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dateValidation = function(date_entry){
    //var regex = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/
    var regex = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
    return regex.test(date_entry);
  }
  function sameWeekday(day1 , day2){
    var d1 = new Date(day1);
    var d2 = new Date(day2);
    var check1 =  weekDays[d1.getDay()];
    var check2 =  weekDays[d2.getDay()];
    return check1.endsWith(check2);
  }
  function returnDay(day){
    var d = new Date(day);
    return weekDays[d.getDay()];
  }
  return{
    dateValidation,
    sameWeekday,
    returnDay
  }
}
