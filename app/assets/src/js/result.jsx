import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';

import { generateResult } from './redux/actions';

class Result extends React.Component {
    componentDidMount() {
        if (Object.keys(this.props.timetable.selected).length < 1) {
            this.props.router.replace('/');
            return;
        }
        const selected = this.props.timetable.items.filter((item) => {
            return item.id in this.props.timetable.selected;
        });
        fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: selected })
        }).then((response) => {
            return response.json();
        }).then((json) => {
            this.props.dispatch(generateResult(json.result));
        });
    }
    render() {
        const result = this.props.timetable.result
                     ? <img src={this.props.timetable.result} />
                     : <div>generating...</div>;
        return (
            <div>
              <div>{result}</div>
              <hr />
              <button className="btn btn-default"
                      onClick={() => this.props.router.goBack()}>
                戻る
              </button>
            </div>
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
