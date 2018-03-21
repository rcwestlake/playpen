import { Container } from 'unstated'
import App from '../components/App';

class AppContainer extends Container {
  state = {
    count: 0
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }
}

export default AppContainer