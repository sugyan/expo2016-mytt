import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moment from 'moment';
import 'moment/locale/ja';
import 'whatwg-fetch';

import Top from './top';
import Result from './result';
import reducers from './redux/reducers';
import { updateTimeTable } from './redux/actions';

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
        return (
            <div>
              <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <Link to="/">
                      <span className="navbar-brand">@JAM×ナタリーEXPO 2016 MyTT</span>
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="container-fluid">
                {this.props.children}
              </div>
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
          <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Top} />
              <Route path="/result" component={Result} />
            </Route>
          </Router>
        </Provider>,
        document.getElementById('main')
    );
});
