var React = require('react');

var About = () => {
  return (
    <div dir="rtl">
      <h1 className="text-right">About</h1>
      <progress className="success" max="100" value="30" dir="rtl">Progress</progress>
      <p dir="rtl"> این یک سایت برای نمایش دمای هوای شهرهای دنیا میباشد.</p>
      <p dir="ltr">
        here are some of the tools I used:
      </p>
      <ul dir="ltr">
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
             JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
