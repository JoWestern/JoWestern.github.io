import './App.css';
import ImageAvatar from './components/imageavatar/ImageAvatar';
import Oppgavetext from './components/Oppgavetext'

function App() {
  return (
    <div className="container">
      <div className='leftCol'>
        <ImageAvatar /> 
      </div>
      <div className='rightCol'>
        <Oppgavetext />
      </div>
    </div>
  );
}

export default App;
