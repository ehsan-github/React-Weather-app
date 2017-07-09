var React = require('react');

var TableBody = React.createClass ({

    render (){
        let { fields, content } = this.props
        return (
            <tbody>
                {content.map((row, index) =>
                    { return (
                        <tr key={index}>
                            {fields.map((field, i) => {
                                 return <td key={i} >{row[field]}</td>
                            })}
                        </tr>
                    )}
                )}
            </tbody >
        );
    }
});

module.exports = TableBody;
