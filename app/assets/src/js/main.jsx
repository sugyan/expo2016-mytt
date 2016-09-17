import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        fetch('/api/timetable.json').then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({ items: json });
        });
    }
    render() {
        const items = this.state.items.map((e, i) => {
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
    ReactDOM.render(
        <Main />,
        document.getElementById('main')
    );
});
