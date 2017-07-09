var React = require('react');

var TableHead = require('./TableHead.jsx');
var TableBody = require('./TableBody.jsx');

const sort_by = (field, reverse, primer) => {
    var key = primer ?
              function(x) {return primer(x[field])} :
              function(x) {return x[field]};
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
};

const tableContent = [
    {
        first_name: "Ehsan",
        last_name: "Heydari",
        age: 26,
        score: 5
    },
    {
        first_name: "Sadegh",
        last_name: "Khoieni",
        age: 28,
        score: 50
    },
    {
        first_name: "Ali",
        last_name: "Safe",
        age: 25,
        score: 20
    },
];

var Table = React.createClass ({

    getInitialState (){
        return {
            sortingField : "first_name",
            reverse: false
        }
    },

    get headFields (){
        return Object.keys(tableContent[0])
    },

    sortedContent(){
        console.log(this.state)
        let { sortingField, reverse } = this.state;
        let func = parseInt
        if (sortingField == "first_name" || sortingField == "last_name") {
            func = a => {return a.toUpperCase()}
        }
        return tableContent.sort(sort_by(sortingField, reverse, func))
    },

    handleColumnClicked (field){
        let { sortingField, reverse } = this.state
        field == sortingField ? reverse = !reverse : reverse = false
        this.setState({
            sortingField: field,
            reverse
        })
    },

  render (){
      let { sortingField, reverse } = this.state
    return (
      <div>
          <table>
              <TableHead
                  fields={this.headFields}
                  handleClick={this.handleColumnClicked}
              />
              <TableBody
                  fields={this.headFields}
                  content={this.sortedContent()}
              />
          </table>
          <h4>{reverse ? 'Descending' : 'Ascending'} sort by {sortingField}</h4>
      </div>
    );
  }
});

module.exports = Table;
