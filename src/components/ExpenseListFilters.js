import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter ,sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate); 
    this.props.setEndDate(endDate); 
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused
      };
    });
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    console.log(e.target.value)
    if (e.target.value === "date-high"){
      this.props.sortByDate('high');
    } else if (e.target.value === "date-low") {
      this.props.sortByDate('low');
    } else if (e.target.value === "amount-high") {
      this.props.sortByAmount('high');
    } else if (e.target.value === "amount-low") {
      this.props.sortByAmount('low');
    }
  }

  render () {
    return (
      <div className="container-fluid filters d-flex col-10 offset-1 justify-content-between my-1 py-1 align-items-center">
        <div className="input-group filters__item">
          <input type="text" className="form-control input-control" value={this.props.filters.text} onChange={this.onTextChange}/>
          <div className="input-group-append input-control">
            <span className="input-group-text"><i className="fa fa-search"></i></span>
          </div>
        </div>
        <div className="filters__item mx-2" >
          <select className="form-control" 
            onChange={this.onSortChange}>
            <optgroup label="Date">            
              <option value="date-high">Newest first</option>
              <option value="date-low">Oldest first</option>
            </optgroup>
            <optgroup label="Amount">
              <option value="amount-high">Highest first</option>
              <option value="amount-low">Lowest first</option>
            </optgroup>
          </select>
        </div>
        <div className="filters__item__date mr-0">
          <div className="input-control">
            <DateRangePicker
                block
                startDate={this.props.filters.startDate} // 
                startDateId="begginning" // PropTypes.string.isRequired,
                endDate={this.props.filters.endDate} // 
                endDateId="end" // PropTypes.string.isRequired,
                onDatesChange={this.onDatesChange} // 
                focusedInput={this.state.calendarFocused} // 
                onFocusChange={this.onFocusChange} //
                numberOfMonths={1} 
                showClearDates={true} 
                isOutsideRange={() => false} 
            />
           </div>
          </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByAmount: criteria => dispatch(sortByAmount(criteria)),
    sortByDate: (criteria) => dispatch(sortByDate(criteria))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);