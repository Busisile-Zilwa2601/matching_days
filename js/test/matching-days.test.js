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
  it("It should highlight green when the dates occor on the same day", function(){
    var days = MatchDays();
    days.highlight('2000-01-12', '2000-01-12');
    console.log(days.highlight('2000-01-12', '2000-01-12'));
    console.log(days.allMap);
    assert.deepEqual(days.getColor('2000-01-12'), 'green');
  });
  it("It should highlight red and blue when the dates do not occor od the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    console.log(days.highlight('2018-06-05', '2000-01-12'));
    console.log(days.getColor('2018-06-05'));
    assert.deepEqual(days.getColor('2018-06-05'), 'red');
    assert.deepEqual(days.getColor('2000-01-12'), 'blue');
  });
  it("It should highlight red the fist date when dates do not occor od the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    console.log(days.highlight('2018-06-05', '2000-01-12'));
    console.log(days.getColor('2018-06-05'));
    assert.deepEqual(days.getColor('2018-06-05'), 'red');
  });
  it("It should highlight blue the second date when dates do not occor od the same day", function(){
    var days = MatchDays();
    days.highlight('2018-06-05', '2000-01-12');
    console.log(days.highlight('2018-06-05', '2000-01-12'));
    console.log(days.getColor('2000-01-12'));
    assert.deepEqual(days.getColor('2000-01-12'), 'blue');
  });
  it('It should return the long format of a date', function(){
    var days = MatchDays();
    assert.deepEqual(days.changeFormat('2018-06-05'), 'Jun 2018 Tuesday');


  });
});
