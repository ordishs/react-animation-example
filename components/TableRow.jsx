import React from 'react';
import TableCell from './TableCell.jsx';

export default class TableRow extends React.Component {

    render() {
        return (
            <tr>
                <TableCell value={this.props.value}/>
            </tr>
        )
    }
}
TableRow.propTypes = {
    value : React.PropTypes.string.isRequired
}
