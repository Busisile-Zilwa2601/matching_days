describe("The RegistrationNumbers", function(){
  it("It should return true when a date has the same day", function(){
    var days = MatchDays();
    assert.deepEqual(days.sameWeekday('2000-01-12' , '2000-01-12'), true);
  });
  it("It should return a day which the date occurs", function(){
    var days = MatchDays();
    assert.deepEqual(days.returnDay('2018-06-05'), 'Tuesday' );
  });
  it("Used date validation, It should return a day which the date occurs", function(){
    var days = MatchDays();
    assert.deepEqual(days.returnDay('2000-01-12'), 'Wednesday' );
  });
  it("Used date validation, It should return true for a correct format and false for incorrect", function(){
    var days = MatchDays();
    assert.deepEqual(days.dateValidation('2000-01-12'),true );
    assert.deepEqual(days.dateValidation('12-01-2000'),false );
  });
});
