import './App.css';
import Sidebar from './components/sidebar.component';
import Chat from './components/chat.component';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
