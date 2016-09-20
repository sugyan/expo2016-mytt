import React from 'react';
import { connect } from 'react-redux';

import FilteringForm from './components/filtering_form';
import TimeTable from './components/timetable';
import BottomNavbar from './components/bottom_navbar';

class Top extends React.Component {
    render() {
        const regexp = this.props.filter.keyword ? new RegExp(this.props.filter.keyword, 'i') : null;
        const items = this.props.timetable.items.filter((item) => {
            if (! this.props.filter.day[item.day]) {
                return false;
            }
            if (! this.props.filter.stage[item.stage[0]]) {
                return false;
            }
            if (regexp && ! item.artist.match(regexp)) {
                return false;
            }
            return true;
        });
        const selectedCount = Object.keys(this.props.timetable.selected).length;
        const footer = selectedCount > 0 ? <BottomNavbar count={selectedCount} /> : null;
        return (
            <div>
              <FilteringForm />
              <hr />
              <p>全{items.length}件</p>
              <TimeTable items={items} selected={this.props.timetable.selected} />
              {footer}
            </div>
        );
    }
}
export default connect(
    (state) => state
)(Top);
