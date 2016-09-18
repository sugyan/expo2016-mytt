import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import 'whatwg-fetch';

import { expo2016 } from './reducers';
import { updateTimeTable } from './actions';

class Main extends React.Component {
    componentDidMount() {
        fetch('/api/timetable.json').then((res) => {
            return res.json();
        }).then((json) => {
            this.props.fetchTimeTable(json);
        });
    }
    render() {
        const items = this.props.items.map((e, i) => {
            return (
                <div key={i}>
                  {`${new Date(e.start * 1000)}: ${e.artist}`}
                </div>
            );
        });
        return (
            <div>
              {items}
            </div>
        );
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const App = connect(
        (state) => state,
        (dispatch) => {
            return {
                fetchTimeTable: (data) => {
                    dispatch(updateTimeTable(data));
                }
            };
        }
    )(Main);
    ReactDOM.render(
        <Provider store={createStore(expo2016)}>
          <App />
        </Provider>,
        document.getElementById('main')
    );
});
