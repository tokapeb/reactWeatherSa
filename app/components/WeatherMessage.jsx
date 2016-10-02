var React = require('react');

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;
  return (
    <div>
      <h3 className="text-center">The temperature is {temp} degrees at {location}. Great!</h3>
    </div>
  );
}

module.exports = WeatherMessage;
