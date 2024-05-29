import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Flex } from 'components/ui/Layout/flex/flex';
import Icon from 'components/ui/Icon';
import {
  CalendarContainer,
  Header,
  InputContainer,
  MonthContainer,
  Navigation,
  Next,
  Prev,
  Container,
  Table,
  Today,
  YearMonth,
  YearContainer,
  Button,
  Day,
  TRSpace,
  Clear,
} from 'components/ui/DatePicker/styled';
import Input from 'components/ui/Form/Field/Input';
import Label from 'components/ui/Form/Label';
import FieldGroup from 'components/ui/Form/FieldGroup';
import Error from 'components/ui/Form/Error';

import useOutsideClick from './useOusideClick';
import { DateTime } from 'luxon';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type DatePickerCustomSelectionType = 'start_of_month' | 'year_month';

type Tab = 'day' | 'month' | 'year';

interface DatePickerProps {
  id?: string | undefined;
  onChange?: (event: { target: HTMLInputElement }) => void;
  value?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
  error_message?: string | undefined;
  small?: boolean;
  custom_selection_type?: DatePickerCustomSelectionType;
  date_valid_from?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  id,
  label,
  name,
  value = '',
  custom_selection_type,
  disabled = false,
  invalid = false,
  error_message,
  onChange,
  date_valid_from,
  small,
}) => {
  // gets the today date time object
  const now: Date = useMemo(() => new Date(), []);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());

  // state needed to display the day view, an array of the month weeks containing an array of week dates
  const [displayedWeeks, setDisplayedWeeks] = useState<Date[][]>([]);
  // state to define if datepicker is opened or not
  const [opened, setOpened] = useState<boolean>(false);
  // state that tells which tab is active : day, month, years
  const [selectionTab, setSelectionTab] = useState<Tab>('day');
  // years array needed for the years view
  const [yearsArray, setYearsArray] = useState<number[]>([]);
  // state that tells the component to call the onchange function
  const [triggerChange, setTriggerChange] = useState<boolean>(false);

  const selecting_day_disabled = Boolean(
    custom_selection_type &&
      ['start_of_month', 'year_month'].includes(custom_selection_type),
  );

  const datepickerRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const closeAndReset = useCallback(() => {
    setOpened(false);

    if (selecting_day_disabled) {
      setSelectionTab('month');
    } else {
      setSelectionTab('day');
    }

    const resetMonth = selectedDate ? selectedDate.getMonth() : now.getMonth();

    const resetYear = selectedDate
      ? selectedDate.getFullYear()
      : now.getFullYear();

    setSelectedMonth(resetMonth);
    setSelectedYear(resetYear);
  }, [now, selectedDate]);

  // function that returns a string representing the Date object
  const formatDate = (date: Date) => {
    const formatNumber = (number: number) =>
      number < 10 ? '0' + number : number;

    const month = formatNumber(date.getMonth() + 1);
    const day = formatNumber(date.getDate());
    const year = date.getFullYear();
    return year + '-' + month + '-' + day;
    //return month + '/' + day + '/' + year;
  };

  //if a value prop is passed to the component, update the selectedDate state
  useEffect(() => {
    if (!value) {
      setSelectedDate(null);
    } else {
      setSelectedDate(new Date(value));
    }
  }, [value]);

  // if trigger change state is true then call the onChange callback function
  useEffect(() => {
    if (triggerChange && dateInputRef.current !== null && onChange) {
      onChange({ target: dateInputRef.current });
      setTriggerChange(false);
    }
  }, [triggerChange, onChange]);

  //use outside click to close the date picker if user clicks outside when opened
  useOutsideClick(datepickerRef, closeAndReset, opened);

  //if user change the selectedYear, then update the years array that is displayed on year tab view
  useEffect(() => {
    const years: number[] = [];

    for (let y = selectedYear - 10; y < selectedYear + 10; y++) {
      years.push(y);
    }

    setYearsArray(years);
  }, [selectedYear]);

  //get the array of weeks and dates needed for the day tab view, and update the displayedWeeks state
  useEffect(() => {
    function getMonthLength(year: number, month: number) {
      const monthLastDate = new Date(year, month + 1, 0);
      return monthLastDate.getDate();
    }

    //get the first date object of the month
    const currentMonthFirstDate: Date = new Date(
      selectedYear,
      selectedMonth,
      1,
    );

    //get the day number of the week of the first date of the month
    const currentMonthFirstDay: number = currentMonthFirstDate.getDay();

    // get the current month length
    const currentMonthLastDate: number = getMonthLength(
      selectedYear,
      selectedMonth,
    );

    // initialize a new array
    const calendarArray: Date[][] = [];

    //determine if 6 or 5 weeks have to be displayed for this month
    const numberOfWeeksToDisplay: number =
      currentMonthFirstDay + currentMonthLastDate > 35 ? 6 : 5;

    for (let week = 0; week < numberOfWeeksToDisplay; week++) {
      const weekArray: Date[] = [];
      const dayStartPosition: number = week * 7 - currentMonthFirstDay;

      for (let day = 1; day <= 7; day++) {
        const dayPosition = dayStartPosition + day;
        weekArray.push(new Date(selectedYear, selectedMonth, dayPosition));
      }

      calendarArray.push(weekArray);
    }

    setDisplayedWeeks(calendarArray);
  }, [selectedYear, selectedMonth]);

  //custom_selection_type = start_of_month
  useEffect(() => {
    if (selecting_day_disabled) {
      setSelectionTab('month');
    }
  }, [custom_selection_type]);

  const onYearChange = (year: number) => {
    if (!isYearWithinBoundaries(year)) {
      return;
    }

    if (selecting_day_disabled) {
      setSelectionTab('month');
    } else {
      setSelectionTab('day');
    }

    setSelectedYear(year);
  };

  const onMonthChange = (month_index: number) => {
    if (!isMonthWithinBoundaries(month_index)) {
      return;
    }

    if (selecting_day_disabled) {
      //get the first date object of the month
      // if (custom_selection_type === 'start_of_month') {
      const selectedMonthFirstDate: Date = new Date(
        selectedYear,
        month_index,
        1,
      );

      setSelectedDate(selectedMonthFirstDate);
      setSelectedMonth(month_index);
      setOpened(false);
      setTriggerChange(true);
    } else {
      setSelectionTab('day');
      setSelectedMonth(month_index);
    }
  };

  const onDayClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (selecting_day_disabled) {
      return;
    }

    const target = e.target as Element;
    const dateElement = target.closest('.day');

    if (!dateElement || !(dateElement instanceof HTMLElement)) {
      return;
    }

    const selected_date = new Date(dateElement.id);

    if (isDateDisabled(selected_date)) {
      return;
    }

    setSelectedDate(selected_date);
    setOpened(false);
    setTriggerChange(true);
  };

  const onInputClick = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    if (opened) {
      closeAndReset();
    } else {
      setOpened(true);
    }
  };

  const onTodayClick = () => {
    if (isDateDisabled(now)) {
      return;
    }

    setSelectedDate(now);
    setSelectedMonth(now.getMonth());
    setSelectedYear(now.getFullYear());
  };

  const onClearDateClick = () => {
    setSelectedDate(null);
    setTriggerChange(true);
    closeAndReset();
  };

  const onNavClick = (
    e: React.MouseEvent<HTMLElement>,
    direction: 'next' | 'prev',
    dateElement: Tab = 'day',
  ) => {
    e.preventDefault();

    switch (dateElement) {
      case 'day': {
        if (direction === 'prev') {
          if (!isMonthWithinBoundaries(selectedMonth - 1)) {
            return;
          }

          if (selectedMonth === 0) {
            setSelectedMonth(11);
            setSelectedYear(selectedYear - 1);
          } else {
            setSelectedMonth(selectedMonth - 1);
          }
        }

        if (direction === 'next') {
          if (!isMonthWithinBoundaries(selectedMonth + 1)) {
            return;
          }

          if (selectedMonth === 11) {
            setSelectedMonth(0);
            setSelectedYear(selectedYear + 1);
          } else {
            setSelectedMonth(selectedMonth + 1);
          }
        }

        break;
      }
      case 'year': {
        if (direction === 'prev') {
          const years: number[] = [];

          for (let y = yearsArray[0] - 20; y < yearsArray[0]; y++) {
            years.push(y);
          }

          if (years.every(year => !isYearWithinBoundaries(year))) {
            return;
          }

          setYearsArray(years);
        }

        if (direction === 'next') {
          const years: number[] = [];

          for (
            let y = yearsArray[yearsArray.length - 1] + 1;
            y <= yearsArray[yearsArray.length - 1] + 20;
            y++
          ) {
            years.push(y);
          }

          if (years.every(year => !isYearWithinBoundaries(year))) {
            return;
          }

          setYearsArray(years);
        }

        break;
      }
      default:
        break;
    }
  };

  const changeSelectionTab = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    e: React.MouseEvent<HTMLElement> | null = null,
    tab: Tab,
  ) => {
    if (e) {
      e.preventDefault();
    }

    setSelectionTab(tab);
  };

  const getInputTextValue = (): string => {
    if (!selectedDate) {
      return '';
    }

    if (custom_selection_type === 'start_of_month') {
      return DateTime.fromJSDate(selectedDate).toFormat('LLL, yyyy');
    }

    return formatDate(selectedDate);
  };

  const getSerializedDate = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const isYearWithinBoundaries = (year: number): boolean => {
    if (!date_valid_from) {
      return true;
    }

    return year >= date_valid_from.getFullYear();
  };

  const isMonthWithinBoundaries = (month: number): boolean => {
    if (!date_valid_from) {
      return true;
    }

    const year_valid_from = date_valid_from.getFullYear();

    if (selectedYear === year_valid_from) {
      return month >= date_valid_from.getMonth();
    }

    return isYearWithinBoundaries(selectedYear);
  };

  const isDateWithinBoundaries = (date: Date): boolean => {
    if (!date_valid_from) {
      return true;
    }

    const deserialized_date = getSerializedDate(date);
    const deserialized_date_valid_from = getSerializedDate(date_valid_from);
    return deserialized_date >= deserialized_date_valid_from;
  };

  const isDateDisabled = (date: Date): boolean => {
    return selecting_day_disabled || !isDateWithinBoundaries(date);
  };

  return (
    <Container>
      <FieldGroup>
        {label && (
          <Label htmlFor={name} small={small}>
            {label}
          </Label>
        )}

        <InputContainer
          disabled={disabled}
          onClick={onInputClick}
          onKeyDown={onInputClick}
          small={small}
        >
          <Input
            id={id}
            name={name}
            ref={dateInputRef}
            type="text"
            hidden
            value={selectedDate ? formatDate(selectedDate) : ''}
          />

          <Input readOnly={true} type="text" value={getInputTextValue()} />

          <svg
            className="calendar-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z" />
          </svg>
        </InputContainer>
        {invalid && <Error>{error_message || ''}</Error>}
      </FieldGroup>

      {opened && (
        <CalendarContainer ref={datepickerRef}>
          {selectionTab === 'day' && (
            <div>
              <Navigation>
                <Prev onClick={e => onNavClick(e, 'prev')}>
                  <Icon.ArrowLeft />
                </Prev>
                <Button onClick={e => changeSelectionTab(e, 'month')}>
                  {monthNames[selectedMonth]}
                </Button>
                <Button onClick={e => changeSelectionTab(e, 'year')}>
                  {selectedYear}
                </Button>
                <Next onClick={e => onNavClick(e, 'next')}>
                  <Icon.ArrowRight />
                </Next>
              </Navigation>
              <Table>
                <Header>
                  <tr>
                    {weekDays.map((day, index) => (
                      <th key={index + day}>{day}</th>
                    ))}
                  </tr>
                </Header>
                <tbody>
                  <TRSpace />
                  {displayedWeeks.map((week, index) => (
                    <tr key={week.toString() + index}>
                      {week.map((date, index_d) => (
                        <Day
                          className="day"
                          id={`${date.getFullYear()}-${
                            date.getMonth() + 1
                          }-${date.getDate()}`}
                          key={date.toString() + index_d}
                          off_month={date.getMonth() !== selectedMonth}
                          onClick={onDayClick}
                          selected={Boolean(
                            selectedDate &&
                              date.toDateString() ===
                                selectedDate.toDateString(),
                          )}
                          selecting_disabled={isDateDisabled(date)}
                          today={date.toDateString() === now.toDateString()}
                        >
                          {date.getDate()}
                        </Day>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Flex fitWidth justifyContent="space-between">
                <Today onClick={onTodayClick}>Today</Today>
                <Clear onClick={onClearDateClick}>Clear</Clear>
              </Flex>
            </div>
          )}
          {selectionTab === 'month' && (
            <div>
              <Navigation>
                <Prev onClick={e => onNavClick(e, 'prev')}>
                  <Icon.ArrowLeft />
                </Prev>
                <Button onClick={e => changeSelectionTab(e, 'year')}>
                  {selectedYear}
                </Button>
                <Next onClick={e => onNavClick(e, 'next')}>
                  <Icon.ArrowRight />
                </Next>
              </Navigation>
              <MonthContainer>
                {monthNames.map((month, index) => {
                  return (
                    <YearMonth
                      key={month + index}
                      onClick={() => {
                        onMonthChange(index);
                      }}
                      selected={selectedMonth === index}
                      disabled={!isMonthWithinBoundaries(index)}
                    >
                      {month}
                    </YearMonth>
                  );
                })}
              </MonthContainer>
            </div>
          )}
          {selectionTab === 'year' && (
            <div>
              <Navigation>
                <Prev onClick={e => onNavClick(e, 'prev', 'year')}>
                  <Icon.ArrowLeft />
                </Prev>
                <span>
                  {yearsArray[0] + ' - ' + yearsArray[yearsArray.length - 1]}
                </span>
                <Next onClick={e => onNavClick(e, 'next', 'year')}>
                  <Icon.ArrowRight />
                </Next>
              </Navigation>
              <YearContainer>
                {yearsArray.map((year, index) => (
                  <YearMonth
                    key={year + index}
                    onClick={() => onYearChange(year)}
                    selected={selectedYear === year}
                    disabled={!isYearWithinBoundaries(year)}
                  >
                    {year}
                  </YearMonth>
                ))}
              </YearContainer>
            </div>
          )}
        </CalendarContainer>
      )}
    </Container>
  );
};

export { DatePicker, type DatePickerCustomSelectionType };
