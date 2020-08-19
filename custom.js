var chart = AmCharts.makeChart( "chartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "country": "Food"
    }, {
      "country": "Movement"
    }, {
      "country": "Rest"
    }, {
      "country": "Growth"
    }, {
      "country": "Relationships"
    }, {
      "country": "Fulfillment"
    }, {
      "country": "Stability"
    }, {
      "country": "Joy"
    } ],
    "valueAxes": [ {
      "gridType": "circles",
      "axisTitleOffset": 20,
      "minimum": 0,
      "maximum": 10,
      "axisAlpha": 0.15,
      "guides": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    } ],
    "graphs": [ {} ],
    "categoryField": "country"
  } );
  
  /**
   * Sets value for particular index
   */
  function setValue(index, value) {
    
    // Init starting positions
    var startAngle = 270;
    var angle = Math.round(360 / chart.dataProvider.length);
    
    // Create a guide
    var guide = new AmCharts.Guide();
    guide.angle = startAngle + angle * index;
    guide.fillAlpha = 1;
    guide.fillColor = "#e1d7cc";//chart.colors[index];
    guide.tickLength = 0;
    guide.toAngle = guide.angle + angle;
    guide.toValue = value;
    guide.value = 0;
    guide.lineAlpha = 0;
    
    // Add guide
    chart.valueAxes[0].guides[index] = guide;
    
    // Update category
    chart.dataProvider[index]["country"] = chart.dataProvider[index]["country"].split(" ").shift() + " " + value;
    
    // Update chart
    chart.validateNow(true);
    
    // Reveal next question
    var areas = document.getElementsByClassName("area");
    for(var i = 0; i < areas.length; i++) {
      areas[i].style.display = (index + 1) === i ? "block" : "none";
    }
    
  }