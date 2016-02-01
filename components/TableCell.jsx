import React from 'react';

export default class TableCell extends React.Component {

    constructor(props) {
        super(props);

        // flash will toggle between 3 values: "" initially and then "flash1" or "flash2".
        // If the initial value is "flash1" or "flash2" the animation will happen on the initial render too.
        this.flash = "";
    }

    render() {
        return (
            <td className={this.flash}>{this.props.value}</td>
        )
    }

    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;

        if (this.props.value !== newValue) {
            this.flash = this.flash === "flash1" ? "flash2" : "flash1";
        }
    }
}

TableCell.propTypes = {
    value : React.PropTypes.string.isRequired
}
