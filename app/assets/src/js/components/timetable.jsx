import React from 'react';

export default class TimeTable extends React.Component {
    render() {
        const items = this.props.items.map((e, i) => {
            return (
                <tr key={i}>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <div className="checkbox" style={{ marginTop: 0, marginBottom: 0 }}>
                      <label>
                        <input type="checkbox" id={`item-${i}`} />
                        {e.start.format('M/D(ddd) HH:mm')} - {e.end.format('HH:mm')}
                      </label>
                    </div>
                  </td>
                  <td style={{ backgroundColor: e.color, padding: '4px', width: '100%' }}>
                    <label
                        style={{
                            backgroundColor: '#ffffff', padding: '4px', borderRadius: '4px',
                            display: 'block', marginBottom: 'initial', fontWeight: 'normal', cursor: 'pointer'
                        }}
                        htmlFor={`item-${i}`} >
                        <small>{e.stage}</small>
                        <br />
                        <strong>{e.artist}</strong>
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
