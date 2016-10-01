var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Szeged">Szeged</Link>
        </li>

        <li>
          <Link to="/?location=Budapest">Budapest</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
