import './App.css';

function App() {
//   let content = `
// BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//test.com//Visitor//EN
// NAME:Visitor Calendar
// X-WR-CALNAME:Visitor Calendar
// BEGIN:VEVENT
// UID:j3wg@test.com
// SEQUENCE:0
// DTSTAMP:20230312T071425Z
// DTSTART:20230312T073000Z
// DTEND:20230312T080000Z
// SUMMARY:无主题会议
// LOCATION:A1-221
// DESCRIPTION:定于March 12\, 2023 (Mon)在A1-221召开无主题会议，请准时出席。
// ATTENDEE;ROLE=REQ-PARTICIPANT;CN="测试":MAILTO:admin@shgbit.com
// ATTENDEE;ROLE=REQ-PARTICIPANT;CN="1":MAILTO:admin@163.com
// ATTENDEE;ROLE=REQ-PARTICIPANT;CN="2":MAILTO:admin@qq.com
// URL;VALUE=URI:http://test.com
// END:VEVENT
// END:VCALENDAR`

  // const download = () => {
  //   var blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  //   let name = 'calendar.ics'
  //   if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
  //     window.navigator.msSaveOrOpenBlob(blob, name);
  //   } else { // for Non-IE (chrome, firefox etc.)
  //     var a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.rel = 'webcal'
  //     // a.href = URL.createObjectURL(blob);
  //     a.href = 'http://localhost:3000/calendar_demo/calendar.ics'
  //     // a.download = name;
  //     a.click();
  //     // URL.revokeObjectURL(a.href)
  //     a.remove();
  //   }
  // }

  return (
    <div className="App" style={{ margin: 20, fontSize: 16 }}>
      <a href={`webcal://${window.location.host}/calendar_demo/calendar.ics`} >打开日历</a>
      {/* <button onClick={download}>打开日历</button> */}
    </div>
  );
}

export default App;
