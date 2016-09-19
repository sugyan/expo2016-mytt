import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import 'moment/locale/ja';
import 'whatwg-fetch';

import { expo2016 } from './redux/reducers';
import { updateTimeTable } from './redux/actions';
import TimeTable from './components/timetable';

class Main extends React.Component {
    componentDidMount() {
        fetch('/api/timetable.json').then((res) => {
            return res.json();
        }).then((json) => {
            this.props.fetchTimeTable(json.map((e) => {
                e.start = moment(e.start * 1000);
                e.end   = moment(e.end   * 1000);
                return e;
            }));
        });
    }
    render() {
        return (
            <div>
              <TimeTable items={this.props.items} />
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
