import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard title="alexa" handle="@alexa99"/>
      <ProfileCard title="bixby" handle="@bixby99"/>
      <ProfileCard title="siri" handle="@siri99"/>
    </div>
  );
}
export default App;