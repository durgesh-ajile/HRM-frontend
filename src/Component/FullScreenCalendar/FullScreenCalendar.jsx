import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const FullScreenCalendar = () => {

  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 6, 15),
      end: new Date(2023, 6, 16),
    },

  ];

  return (
    <div className='container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        defaultView="month"
        style={{ height: '100vh', paddingTop: '20px' }}
      />
    </div>
  );
};
export default FullScreenCalendar;
