import React from 'react';
import ReactDOM from 'react-dom';

var applyActiveClass = 'active';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: true,
        activeClass: applyActiveClass};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('test',event.target.checked);
    this.setState({
        value: event.target.checked,
        activeClass: event.target.checked ? applyActiveClass : ''
    });
  }


  render() {
    return (
     <div className="btn-group" data-toggle="buttons">
        <label className={'btn btn-primary ' + this.state.activeClass}>
          <input type="checkbox" defaultChecked autoComplete="off" onChange={this.handleChange} /> Checkbox 1 (pre-checked)
        </label>
        <label className="btn btn-primary">
          <input type="checkbox" autoComplete="off" /> Checkbox 2
        </label>
        <label className="btn btn-primary">
          <input type="checkbox" autoComplete="off" /> Checkbox 3
        </label>
      </div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);