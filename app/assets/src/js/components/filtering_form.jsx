import React from 'react';
import { connect } from 'react-redux';

import { filterToggleCheckbox } from '../redux/actions';

class FilteringForm extends React.Component {
    constructor(props) {
        super(props);
        this.days = [
            { label: '9/24(土)', key: '09-24' },
            { label: '9/25(日)', key: '09-25' }
        ];
        this.stages = [
        ];
    }
    render() {
        const days = this.days.map((e, i) => {
            return (
                <label key={i} className="checkbox-inline">
                  <input
                      type="checkbox"
                      checked={this.props.day[e.key]}
                      onChange={() => this.props.dispatch(filterToggleCheckbox(e.key))} />
                  {e.label}
                </label>
            );
        });
        return (
            <form className="form-horizontal" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="col-sm-2 control-label">日付</label>
                <div className="col-sm-10">{days}</div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">ステージ</label>
                <div className="col-sm-10">
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">出演者名</label>
                <div className="col-sm-10">
                  <input
                      className="form-control"
                      type="text" />
                </div>
              </div>
            </form>
        );
    }
}
export default connect((state) => state.filter)(FilteringForm);
