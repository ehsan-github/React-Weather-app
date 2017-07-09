var React = require('react');
var {Link, IndexLink} = require('react-router');

var TableHead = React.createClass ({

    handleColumnClicked (field){
        this.props.handleClick(field)
    },

    render (){
        let { fields } = this.props
        return (
            <thead>
                <tr>
                    {fields.map((field, index) => {
                         return <th key={index} onClick={() => this.handleColumnClicked(field)}>{field}</th>
                    })}
                </tr>
            </thead>
        );
    }
});

module.exports = TableHead;
