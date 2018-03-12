import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


export default class ExpenseForm extends React.Component {
  constructor (props){
    super(props);
    
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description
      }
    });
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      }
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      console.log(amount)
      this.setState(() => {
        return {
          amount
        }
      });
    }
    
  };
  
  onDateChange = (createdAt) => {
   
    if (createdAt){
      this.setState(() => {
        return {
          createdAt
        }
      });
    }
    
  };

  onFocusedChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      }
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.createdAt.valueOf())
    if (!this.state.description || !this.state.amount){
      this.setState(() => {
      return {
        error: " Please provide description and amount."
      }
      });
    } else {
      console.log("great success");
      this.setState(() => {
        return {
          error: ''
        }
      });

      this.props.onSubmit(
        {
          description: this.state.description,
          amount: parseFloat(this.state.amount, 10)*100,
          createdAt: this.state.createdAt.valueOf(),
          note: this.state.note
        }
      );
    }
  };

  render() {
    return (
      <div className="container-fluid expenses">
      {this.state.error && <div className="alert alert-danger"><strong>Error.</strong> {this.state.error}</div>}
      <form onSubmit={this.onSubmit} className="p-2 rounded border border-secondary">
        <div className="form-group w-90">
          <label>Description</label>
          <input type="text" className="form-control" 
          autoFocus 
          placeholder="Description" 
          value={this.state.description}
          onChange={this.onDescriptionChange}
          />
          <small className="form-text text-muted">Please describe your expense.</small>
        </div>
        <div className="form-group  w-90">
          <label>Amount</label>
          <input type="text" className="form-control" 
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          />
        </div>
        <div className="form-group w-90">
          <label>Notes:</label>
          <textarea type="text" className="form-control" placeholder="Notes"
          value={this.state.note}
          onChange={this.onNoteChange}
          ></textarea> 
        </div>
        <div className="form-group w-90">
        <label>Date:</label><br />
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusedChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={() => { false }}
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        
      </form>
      </div>
    )
  };
}

