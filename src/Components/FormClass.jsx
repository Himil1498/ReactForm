import React from "react";

class FormClass extends React.Component {
  constructor() {
    super();
    this.state = {
      Uname: "",
      Gender: "",
      Qualification: [],
      Email: "",
      Pwd: "",
      Country: "",
      Address: ""
    };
    this.submitData = this.submitData.bind(this);
    this.setData = this.setData.bind(this);
  }
  submitData = (i) => {
    i.preventDefault();
    console.log("Name is  :  " + this.state.Uname);
    console.log("Gender is  :  " + this.state.Gender);
    console.log("Email is  :  " + this.state.Email);
    console.log("Password is  :  " + this.state.Pwd);
    console.log("Country is  :  " + this.state.Country);
    console.log("Address is  :  " + this.state.Address);
  };
  setData = (i) => {
    const target = i.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // const getQualification = (e) => {
    //   qualification.push(e.target.value);
    //   setQualification(this.state.qualification);
    //   console.log("Added " + this.qualification);
    // };
  };

  render() {
    return (
      <div>
        <h2>
          <u>REGISTRATION FORM(ClassBase)</u>
        </h2>
        <form name="Form" onSubmit={this.submitData}>
          <label htmlFor="">
            <b>Name : </b>
          </label>
          <input
            type="text"
            name="name"
            value={this.state.Uname}
            onChange={this.setData}
            placeholder="Enter Your Name"
            minLength={2}
            maxLength={6}
            required=""
          />
          <br />
          <br />
          <label htmlFor="">
            <b>Gender : </b>
          </label>
          <input
            type="radio"
            name="Gender"
            value="Male"
            onChange={this.setData}
            defaultChecked=""
          />
          Male
          <input
            type="radio"
            name="Gender"
            value="Female"
            onChange={this.setData}
          />
          Female
          <br />
          <br />
          <label><b>Qualification : </b></label>
          <input
            type="checkbox"
            name="qualification"
            value={this.state.Qualification}
            onChange={this.getQualification}
          />
          10th
          <input
            type="checkbox"
            name="qualification"
            value={this.state.Qualification}
            onChange={this.getQualification}
          />
          12th
          <input
            type="checkbox"
            name="qualification"
            value={this.state.Qualification}
            onChange={this.getQualification}
          />
          BCA
          <input
            type="checkbox"
            name="qualification"
            value={this.state.Qualification}
            onChange={this.getQualification}
          />
          MCA
          <br />
          <br />
          <label htmlFor="">
            <b>Email : </b>
          </label>
          <input
            type="text"
            name="email"
            onChange={this.setData}
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <label htmlFor="">
            <b>Password : </b>
          </label>
          <input
            type="password"
            name="Pwd"
            onChange={this.setData}
            placeholder="Enter Your Password"
          />
          <br />
          <br />
          <label htmlFor="">
            <b>Address : </b>
          </label>
          <textarea
            rows={3}
            cols={40}
            name="Address"
            onChange={this.setData}
            defaultValue={""}
          />
          <br />
          <br />
          <label htmlFor="">
            <b>Country : </b>
          </label>
          <select name="Country" onChange={this.setData}>
            <option>-- Select Country --</option>
            <option value="india" selected="">
              INDIA
            </option>
            <option value="uk">UK</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            className="btn btn-outline-secondary m-4"
            name="register"
            align="center"
          />
          <input
            type="reset"
            className="btn btn-outline-secondary m-4"
            name="reset"
          />
        </form>
      </div>
    );
  }
}

export default FormClass;
