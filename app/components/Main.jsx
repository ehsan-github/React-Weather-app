var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <h2>Main component</h2>
      <Nav/>
      {props.children}
    </div>
  );
}

module.exports = Main;
