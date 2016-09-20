import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from '../redux/actions';

class TimeTable extends React.Component {
    render() {
        const items = this.props.items.map((item, i) => {
            return (
                <tr key={i}>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <div className="checkbox" style={{ marginTop: 0, marginBottom: 0 }}>
                      <label>
                        <input
                            id={`item-${i}`}
                            type="checkbox"
                            checked={this.props.selected[item.id] ? true : false}
                            onChange={(e) => this.props.dispatch(selectItem(item.id, e.target.checked))} />
                        {item.start.format('M/D(ddd) HH:mm')} - {item.end.format('HH:mm')}
                      </label>
                    </div>
                  </td>
                  <td style={{ backgroundColor: item.color, padding: '4px', width: '100%' }}>
                    <label
                        style={{
                            backgroundColor: '#ffffff', padding: '4px', borderRadius: '4px',
                            display: 'block', marginBottom: 'initial', fontWeight: 'normal', cursor: 'pointer'
                        }}
                        htmlFor={`item-${i}`} >
                        <small>{item.stage}</small>
                        <br />
                        <strong>{item.artist}</strong>
                    </label>
                  </td>
                </tr>
            );
        });
        return (
            <table className="table">
              <tbody>
                {items}
              </tbody>
            </table>
        );
    }
}
export default connect()(TimeTable);
