import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';

class Result extends React.Component {
    componentDidMount() {
        if (Object.keys(this.props.timetable.selected).length < 1) {
            this.props.router.replace('/');
        }
        const selected = this.props.timetable.items.filter((item) => {
            return item.id in this.props.timetable.selected;
        });
        fetch('/api/generate', {
            method: 'POST'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
        });
    }
    render() {
        return (
            <div>TODO: result</div>
        );
    }
}
export default connect(
    (state) => {
        return {
            timetable: state.timetable
        };
    }
)(withRouter(Result));
