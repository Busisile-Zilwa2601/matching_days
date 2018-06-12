document.addEventListener('DOMContentLoaded', function(){
  var matchHandler = MatchDays();
  //---------------------------------------------------------------
  var sourceHead = document.querySelector('.DisplayHead').innerHTML;
  var templateFirst = Handlebars.compile(sourceHead);
  Handlebars.registerHelper('header', function(text){
      text = Handlebars.Utils.escapeExpression(text);
      return new Handlebars.SafeString('<h1>' + text+ '</h1>');
  });
  document.getElementById('head').innerHTML = templateFirst();
  //table
  var sourceTable = document.querySelector('.days').innerHTML;
  var templateTable = Handlebars.compile(sourceTable);
  window.addEventListener('load', function(){
      var dataTable = templateTable({week: matchHandler.highlight()
      });
      document.getElementById('daysTable').innerHTML = dataTable;
  });

  //input area
  var sourceInput = document.querySelector('.inputArea').innerHTML;
  var templateInput = Handlebars.compile(sourceInput);
  Handlebars.registerHelper('makeInput', function(name, options){
    var theInput = options.fn();
    theInput = theInput.trim().split('\n');
    var output = '';
    for(var val in theInput){
      var item = theInput[val].trim();
      output += item +": "+'<input type ="date" value="" id='+item+'>';
    }
    return output;
  });
  document.getElementById('dateinput').innerHTML = templateInput();

  //making the element functional
  var date1 = document.getElementById('First-Date');
  var date2 = document.getElementById('Second-Date');

  date1.addEventListener('change', function(){
    var d1 = date1.value;
    var d2 = date2.value;
    var dataTable = templateTable({week: matchHandler.highlight(d1, d2)
    });
    document.getElementById('daysTable').innerHTML = dataTable;
  });
  date2.addEventListener('change', function(){
    var d1 = date1.value;
    var d2 = date2.value;
    var dataTable = templateTable({week: matchHandler.highlight(d1, d2)
    });
    document.getElementById('daysTable').innerHTML = dataTable;
  });
});
