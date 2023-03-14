import './App.css';

// STATUS:CANCELLED 取消日程
function App() {
  return (
    <div className="App" style={{ margin: 20, fontSize: 16,display:'flex',flexDirection:'column' }}>
      <a href={`webcal://${window.location.host}/calendar_demo/calendar.ics`} >webcal打开日历</a>
      <p>{`<a href='webcal://xxxx/calendar.ics' />`}</p>
    </div>
  );
}

export default App;