import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AvailabilityCalendarRows from './AvailabilityCalendarRows';
import './styles.css';

function HotelAvailabilityCalendar() {
  const [currentYear, setCurrentYear] = useState('2021');
  const { id } = useParams();

  return (
    <table className="table availabilityTable">
      <tbody>
        <tr className="d-flex flex-row">
          <td className="d-flex text-center monthName">
            <select onChange={(e) => setCurrentYear(e.target.value)}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </td>
          <td></td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
          <td>Su</td>
          <td>Mo</td>
        </tr>
        <AvailabilityCalendarRows currentYear={currentYear} roomId={id} />
      </tbody>
    </table>
  );
}

export default HotelAvailabilityCalendar;
