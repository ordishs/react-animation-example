import React from 'react';
import TableRow from './TableRow.jsx';

export default class Table extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Times</th>
                    </tr>
                </thead>
                <tbody>{
                    this.props.rows.map(row => {
                        return (<TableRow value={row.value} key={row.key}/>)
                    })}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    rows : React.PropTypes.array.isRequired
}
