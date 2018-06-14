function MatchDays(){
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var mapDays = {};
  var myDayslist = [];
  var dateValidation = function(date_entry){
    var regex = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/
    return regex.test(date_entry);
  }
  function sameWeekday(day1, day2){
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
  function getColor(date){
    return mapDays[returnDay(date)].color;
  }
  function highlight(date1, date2){
    for(var i = 0; i < weekDays.length; i++){
      var myDay = weekDays[i];
      mapDays = {day : myDay};
      myDayslist[i] = mapDays;
      if(myDay === returnDay(date1) && myDay === returnDay(date2)){
        myDayslist[i] = Object.assign({'color': 'green'}, mapDays);
        continue;
      }
      if(myDay === returnDay(date1)){
        myDayslist[i] = Object.assign({'color': 'red'},mapDays);
      }
      if(myDay === returnDay(date2)){
        myDayslist[i] = Object.assign({'color': 'blue'},mapDays);
      }
    }

    return myDayslist;
  }
  function changeFormat(date){
    var d = new Date(date);
    var options = {weekday:'long', month:'short', year:'numeric'};
    return d.toLocaleDateString('en-us', options);
  }
  return{
    dateValidation,
    sameWeekday,
    returnDay,
    highlight,
    getColor,
    changeFormat,
    myDayslist,
  }
}
