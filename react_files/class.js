import { React, Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
    <div>
      <Title />
      <div>
        <Inner />
      </div>
    </div>
    );
  }
}

const Title = () => (
  <div>
    <h1>App Title</h1>
  </div>
);

const Inner = () => (
  <div>
    <h2>Inner Title</h2>
  </div>
);

export default App;