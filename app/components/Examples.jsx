var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li className="text-right" dir="rtl">
          <Link to='/?location=Karaj' lang="fa" dir="rtl">کرج، ایران</Link>
        </li>
        <li>
          <Link to='/?location=Tehran'>Tehran, Iran</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
