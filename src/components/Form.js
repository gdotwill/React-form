import React, { Component } from "react"
import Select from "react-select"
 
export class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      title: "",
      error: "",
      showFailAlert: false
    }

    this.setInputField = this.setInputField.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    
  }

  setInputField(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  onChangeHandler(value) {
    this.setState({
      title: value 
    })
  }

  validate() {
    const error = !(this.state.firstname && this.state.lastname && this.state.email)
    this.setState({error: error ? "Please complete all fields correctly to enable form": ""})
    return error
  }

  onSubmitHandler(e)  {
    e.preventDefault();

    const error = this.validate()
    if (error) {
      return 
    }

    const url ="http://localhost:3000/users"

    const data = { 
      email:this.state.email, 
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      title:this.state.title.value
    }

    fetch(url, { method: "POST", body: JSON.stringify(data), headers:{ "Content-Type": "application/json" } })
      .then(res => res.json())
      .then(
        response => {
          window.location.href = '/redirect';        
        }
      ) 
      .catch(
          error => 
          {
            console.error("Error:", error);
            this.setState({
              showFailAlert: true
            })
        }
      );    
    }  

    render() {
 
      var btnColor = {
        backgroundColor: "lightgray",
        color: "gray"
      }

      if (this.state.firstname && this.state.lastname && this.state.email && this.state.title.value) {
        btnColor = {
          backgroundColor: "darkblue",
          color: "#fff"
        }
      }

      const options = [
        {value: "Mr", label: "Mr"},
        {value: "Miss", label: "Miss"},
        {value: "Mrs", label: "Mrs"}
      ]

      const { email, firstname, lastname } = this.state

      return (
        <div className="form-container">
          <h2><strong>Arrange a drive</strong> in your perfect car today!</h2> 

          <form onSubmit={this.onSubmitHandler}>
            <div className="row">
              <div className="col-md-6 col-sm-12 form-input">
                <label>Email*</label>
                <input 
                  className="form-control" 
                  type="email" 
                  placeholder="Fill in your email address"
                  value={email} 
                  onChange={this.setInputField.bind(null, "email")}/>
              </div>
              <div className="col-md-6 col-sm-12 form-input">
                <label>Title*</label>
                <Select 
                  value={this.state.title}
                  onChange={this.onChangeHandler}
                  options={options}
                />
              </div> 
            </div> 

            <div className="row">
              <div className="col-md-6 col-sm-12 form-input">
                <label>First name</label>
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Fill in your first name"
                  value={firstname} 
                  onChange={this.setInputField.bind(null, "firstname")}/>
              </div>
              <div className="col-md-6 col-sm-12 form-input">
                <label>Last name*</label>
                <input 
                  className="form-control"
                  type="text" 
                  placeholder="Fill in your last name"
                  value={lastname}
                  onChange={this.setInputField.bind(null, "lastname")} /> 
              </div>  
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 send-container">
                <input
                  style={btnColor} 
                  className="button" 
                  type="submit" 
                  value="Send enquiry" />
                <div className="error">{this.state.error}</div>  
              </div>
            </div> 
          </form> 

          <div>
            { this.state.showFailAlert && <div className="fail"><p>Error connecting to API</p></div> }               
          </div>

        </div>     
      );
    }
  }


export default Form


