
import React, { useState, useEffect } from 'react';
import './calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});

  
  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setDate(prevDate => new Date(prevDate.getFullYear() - 1, prevDate.getMonth(), 1));
  };

  const handleNextYear = () => {
    setDate(prevDate => new Date(prevDate.getFullYear() + 1, prevDate.getMonth(), 1));
  };

  const handleDateClick = selectedDate => {
    setSelectedDate(selectedDate);
  };

  const handleNoteChange = e => {
    const { value } = e.target;
    setNotes(prevNotes => ({
      ...prevNotes,
      [selectedDate.toDateString()]: value,
    }));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthName = (year, month) => {
    const monthNames = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return monthNames[month] + ' ' + year;
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(year, month);
    const calendar = [];

    
    for (let i = 0; i < firstDay; i++) {
      calendar.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }

    
    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(year, month, day);
      const isSelected = currentDate.toDateString() === (selectedDate && selectedDate.toDateString());
      const note = notes[currentDate.toDateString()];

      calendar.push(
        <div
          key={`day-${day}`}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(currentDate)}
        >
          <div className="day">{day}</div>
          {note && <div className="note-marker"></div>}
        </div>
      );
    }

    
    const remainingDays = 7 - (firstDay + totalDays) % 7;
    for (let i = 0; i < remainingDays && remainingDays < 7; i++) {
      calendar.push(<div key={`empty-${totalDays + i}`} className="calendar-day"></div>);
    }


    return calendar;
  };

  return (
    <div className="calendar-container">
      <h1 className="title">{getMonthName(date.getFullYear(), date.getMonth())}</h1>
      <div className="calendar">
        <div className="calendar-header">
          <button className="prev-month" onClick={handlePrevMonth}>
            &lt;
          </button>
          <button className="prev-year" onClick={handlePrevYear}>
            &lt;&lt;
          </button>
          <button className="next-year" onClick={handleNextYear}>
            &gt;&gt;
          </button>
          <button className="next-month" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
        <div className="calendar-grid">
          <div className="weekdays">
            <div className="weekday">Dom</div>
            <div className="weekday">Seg</div>
            <div className="weekday">Ter</div>
            <div className="weekday">Qua</div>
            <div className="weekday">Qui</div>
            <div className="weekday">Sex</div>
            <div className="weekday">Sab</div>
          </div>
          <div className="days">{renderCalendar()}</div>
        </div>
      </div>
      {selectedDate && (
        <div className="note-section">
          <h2 className="note-title"> Notas para {selectedDate.toDateString()}</h2>
          <textarea
            className="note-input"
            value={notes[selectedDate.toDateString()] || ''}
            onChange={handleNoteChange}
            placeholder="Adicione suas anotaçoes"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Calendar;
