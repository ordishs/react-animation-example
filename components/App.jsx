import React from 'react';
import Table from './Table.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        // Create 20 rows of data in this component's state...
        this.state = { rows: []};
        let now = new Date().toISOString().split('T')[1];
        for (let i = 0; i < 20; i++) {
            this.state.rows.push({
                key: i,
                value: now
            });
        }
    }
    onClick(cell) {
        let rows = this.state.rows;
        let rowNum = cell;
        if (rowNum === -1) {
            rowNum = Math.floor(Math.random() * rows.length);
        }

        rows[rowNum].value = new Date().toISOString().split('T')[1];
        this.setState({ rows : rows });
    }

    render() {
        return (
            <div>
                <h1>Simple Table</h1>
                <Table rows={this.state.rows}/>
                <br />
                <button onClick={this.onClick.bind(this, -3)}>Refresh a cell</button>
                <button onClick={this.onClick.bind(this, 0)}>Refresh 2nd cell</button>
             </div>
        )
    }
}
