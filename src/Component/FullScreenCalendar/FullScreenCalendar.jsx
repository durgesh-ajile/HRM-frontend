// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';


// const FullScreenCalendar = () => {

//   const localizer = momentLocalizer(moment);
//   const events = [
//     {
//       title: 'Event 1',
//       start: new Date(2023, 6, 15),
//       end: new Date(2023, 6, 19),
//     },
//     {
//       title: 'Event 1',
//       start: new Date(2023, 6, 21),
//       end: new Date(2023, 6, 22),
//     },

//   ];

//   return (
//     <div className='container'>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         views={['month', 'week', 'day']}
//         defaultView="month"
//         style={{ height: '100vh', paddingTop: '20px' }}
//       />
//     </div>
//   );
// };
// export default FullScreenCalendar;

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const FullScreenCalendar = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 6, 15),
      end: new Date(2023, 6, 19),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 6, 21),
      end: new Date(2023, 6, 22),
    },
    {
      title: 'Event 3',
      start: new Date(2023, 6, 23),
      end: new Date(2023, 6, 23),
    },
    {
      title: 'Event 4',
      start: new Date(2023, 6, 23),
      end: new Date(2023, 6, 23),
    },
  ];

  // Function to handle custom event styles
  const eventStyleGetter = (event) => {
    let backgroundColor = event.title === 'Event 1' ? 'blue' : event.title === 'Event 2' ? 'rgb(0, 185, 34)' : event.title === 'Event 3' ? 'rgb(255, 0, 0)' : event.title === 'Event 4' ? 'rgb(145, 140, 0)' : 'green';

    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.6,
      color: 'white',
      border: '0',
      display: 'block',
    };
    return {
      style,
    };
  };

  return (
    <div className='container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultView="month"
        eventPropGetter={eventStyleGetter} // Apply custom event styles
        style={{ height: '100vh', paddingTop: '20px' }}
      />
    </div>
  );
};

export default FullScreenCalendar;
