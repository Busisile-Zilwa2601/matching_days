describe("Matching Days function", function(){
  it("It should return true when a date has the same day", function(){
    var days = MatchDays();
    assert.deepEqual(days.sameWeekday('2000-01-12', '2000-01-12'), true);
  });
  it("It should return a day which the date occurs", function(){
    var days = MatchDays();
    assert.deepEqual(days.returnDay('2018-06-05'), 'Tuesday' );
  });
  it("It should return a day which the date occurs", function(){
    var days = MatchDays();
    assert.deepEqual(days.returnDay('2000-01-12'), 'Wednesday' );
  });
  it("Used date validation, It should return true for a correct format and false for incorrect", function(){
    var days = MatchDays();
    assert.deepEqual(days.dateValidation('2000-01-12'),true );
    assert.deepEqual(days.dateValidation('12-01-2000'),false );
  });
  it("It should return all days of the week inside the object mapDays", function(){
    var days = MatchDays();
    assert.deepEqual(days.highlight(), {Sunday: {day: "Sunday"}, Monday: {day: "Monday"}, Tuesday: { day: "Tuesday"}, Wednesday: {day: "Wednesday"}, Thursday: {day: "Thursday"}, Friday: {day: "Friday"}, Saturday: {day: "Saturday"}});
  });
  it("It should highlight green when the dates occor on the same day", function(){
    var days = MatchDays();
    days.highlight('2000-01-12', '2000-01-12');
    assert.deepEqual(days.highlight('2000-01-12', '2000-01-12'), {Sunday:{day:"Sunday"}, Monday:{day:"Monday"}, Tuesday:{day:"Tuesday"}, Wednesday:{"color":"green", day:"Wednesday"}, Thursday:{day:"Thursday"}, Friday:{day:"Friday"}, Saturday:{day:"Saturday"}});
  });
  it("It should highlight red and blue when the dates do not occor on the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    assert.deepEqual(days.highlight('2018-06-05', '2000-01-12'), { Sunday:{day:"Sunday"}, Monday:{day : "Monday"}, Tuesday:{"color":"red", day:"Tuesday"}, Wednesday:{"color":"blue", day:"Wednesday"}, Thursday:{day:"Thursday"}, Friday:{day:"Friday"}, Saturday:{day:"Saturday"}})

  });
  it("It should highlight red the fist date when dates do not occor on the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    assert.deepEqual(days.highlight('2018-06-05'), {Sunday:{ day:"Sunday"}, Monday:{ day:"Monday"}, Tuesday:{"color":"red", day:"Tuesday"}, Wednesday:{day:"Wednesday"}, Thursday:{day:"Thursday"}, Friday:{day:"Friday"}, Saturday:{day:"Saturday"}});
  });
  it("It should highlight blue the second date when dates do not occor odn the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    assert.deepEqual(days.highlight('' ,'2000-01-12'), { Sunday:{ day:"Sunday"}, Monday:{ day:"Monday"}, Tuesday:{ day:"Tuesday"}, Wednesday:{"color":"blue", day:"Wednesday"}, Thursday:{ day:"Thursday"}, Friday:{ day:"Friday"}, Saturday:{day:"Saturday"}});
  });
  it('It should return the long format of a date', function(){
    var days = MatchDays();
    assert.deepEqual(days.changeFormat('2018-06-05'), 'Jun 2018 Tuesday');
  });
});
