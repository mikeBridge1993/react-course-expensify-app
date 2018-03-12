export const setTextFilter = (text = '')  => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
};

export const setStartDate = (startDate)  => {
  return {
    type: 'SET_START_DATE',
    startDate
  }
};

export const setEndDate = (endDate)  => {
  return {
    type: 'SET_END_DATE',
    endDate
  }
};

export const sortByDate = (criteria)  => {
  return {
    type: 'SORT_BY_DATE',
    criteria
  }
};

export const sortByAmount = (criteria)  => {
  return {
    type: 'SORT_BY_AMOUNT',
    criteria
  }
};



