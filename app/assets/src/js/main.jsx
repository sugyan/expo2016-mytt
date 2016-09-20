import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import 'moment/locale/ja';
import 'whatwg-fetch';

import reducers from './redux/reducers';
import { updateTimeTable } from './redux/actions';
import FilteringForm from './components/filtering_form';
import TimeTable from './components/timetable';

class Main extends React.Component {
    componentDidMount() {
        fetch('/api/timetable.json').then((res) => {
            return res.json();
        }).then((json) => {
            this.props.fetchTimeTable(json.map((e) => {
                e.start = moment(e.start * 1000);
                e.end   = moment(e.end   * 1000);
                e.day   = e.start.format('MM-DD');
                return e;
            }));
        });
    }
    render() {
        const regexp = this.props.filter.keyword ? new RegExp(this.props.filter.keyword, 'i') : null;
        const items = this.props.timetable.items.filter((e) => {
            if (! this.props.filter.day[e.day]) {
                return false;
            }
            if (! this.props.filter.stage[e.stage[0]]) {
                return false;
            }
            if (regexp && ! e.artist.match(regexp)) {
                return false;
            }
            return true;
        });
        return (
            <div>
              <FilteringForm />
              <hr />
              <p>全{items.length}件</p>
              <TimeTable items={items} />
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
        <Provider store={createStore(reducers)}>
          <App />
        </Provider>,
        document.getElementById('main')
    );
});
