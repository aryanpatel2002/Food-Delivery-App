import React, { useState } from "react";
import "./Register.css"; 
import {Link} from "react-router-dom"

function Register() {
  //Names given 
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const[cpassword,setcpassword]=useState("");
  const[date,setdate]=useState("");
  const[gender,setgender]=useState("");
  const[country,setcountry]=useState("");
  //Complete Names adding to the users
  const [userFirstName, setuserFirstName] = useState("");
  const [userLastName, setuserLastName] = useState("");
  const[userEmail,setuserEmail]=useState("");
  const[userpassword,setuserpassword]=useState("");
  const[usercpassword,setusercpassword]=useState("");
  const[userdate,setuserdate]=useState("");
  const[usergender,setusergender]=useState("");
  const[usercountry,setusercountry]=useState("");
  //Errors
  const[fnerror,setfnerror]=useState("")
  const[lnerror,setlnerror]=useState("");
  const[emailerror,setemailerror]=useState("")
  const[passworderror,setpassworderror]=useState("")
  const[cpassworderror,setcpassworderror]=useState("")
  const findfnerror=()=>{
    const regex=/^[A-Za-z]+$/;
    if(!regex.test(FirstName))
    {
      setfnerror("First Name should contain only alphabets");
      return false;
    }
    else{
      setfnerror("");
      return true;
    }
  }

  const getFirstName = (event) => {
      setFirstName(event.target.value);
  };

  const findlnerror=()=>{
    const regex=/^[A-Za-z]+$/;
    if(!regex.test(LastName))
    {
      setlnerror("Last Name should contain only alphabets");
    }
    else{
      setlnerror("");
      setuserLastName(LastName);
    }
  }
  const getLastName = (event) => {
    setLastName(event.target.value);
  };
  const findemailerror=()=>{
    const regex=/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-z]{2,}$/;
    if(!regex.test(Email))
    {
      setemailerror("Give a Valid Email Address")
    }
    else{
      setemailerror("")
      setuserEmail(Email);
    }
  }
  const getEmail=(event)=>{
    setEmail(event.target.value);
  }
  const findpassworderror=()=>{
    const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^()])[A-Za-z\d!@#$%^&*()]{8,10}$/;
    if(!regex.test(Password))
    {
      setpassworderror("The Password is not Strong \nThe Password Length must be between 8 to 10 \n The Password must have a Small letter,Capital letter,a Special Character");
    }
    else{
      setpassworderror("");
      setuserpassword(Password);
    }
  }
  const getPassword=(event)=>{
    setPassword(event.target.value);
  }
  const findcpassworderror=()=>{
    if(Password !== cpassword)
    {
      setcpassworderror("The Password and the cofirm password are not matching");
    }
    else{
      setcpassworderror("");
      setusercpassword(cpassword);
    }
  }
  const getcpassword=(event)=>{
    setcpassword(event.target.value);
  }
  const getdate=(event)=>{
    setdate(event.target.value);
  }
  const getgender=(event)=>
  {
    setgender(event.target.value);
  }
  const getcountry=(event)=>
  {
    setcountry(event.target.value);
  }
  const getuserFirstName = (e) => {
    e.preventDefault();
    if(findfnerror())
    {
      setuserFirstName(FirstName);
    }
    setuserdate(date);
    setusergender(gender);
    setusercountry(country);
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h1 className="register-title">🍔 Foodie Register</h1>
        <p className="register-subtitle">
          Join us and get your favorite meals delivered hot & fast 🚀
        </p>
        <form onSubmit={getuserFirstName} className="register-form">
          <div className="form-group">
            <label htmlFor="fname">First Name<span style={{color:"red"}}>*</span></label>
            <input
              type="text"
              id="fname"
              placeholder="Enter your First Name"
              onChange={getFirstName} 
              onBlur={findfnerror} required
            />
          {fnerror && <p style={{ color: "red", fontSize: "14px" }}>{fnerror}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name<span style={{color:"red"}}>*</span></label>
            <input
              type="text"
              id="lname"
              placeholder="Enter your Last Name"
              onChange={getLastName} 
              onBlur={findlnerror} required
            />
            {lnerror && <p style={{color:"red",fontSize:"14px"}}>{lnerror}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span style={{color:"red"}}>*</span></label>
            <input type="email" id="email" placeholder="Enter your Email" onChange={getEmail} onBlur={findemailerror} required/>
            {emailerror && <p style={{color:"red",fontSize:"14px"}}>{emailerror}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password<span style={{color:"red"}}>*</span></label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={getPassword} 
              onBlur={findpassworderror}
              required
            /> 
            {passworderror && <p style={{color:"red",fontSize:"14px",whiteSpace:"pre-line"}}>{passworderror}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password<span style={{color:"red"}}>*</span></label>
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm your password"
              onChange={getcpassword} 
              onBlur={findcpassworderror}
              required
            />
            {cpassworderror && <p style={{color:"red",fontSize:"14px"}}>{cpassworderror}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth <span style={{color:"red"}}>*</span></label>
            <input type="date" id="dob" onChange={getdate} required/>
          </div>

          <div className="form-group">
            <label htmlFor="country" className="selects">Country<span style={{color:"red"}}>*</span></label>
            <input 
              type="text" 
              id="country" 
              placeholder="Start typing your country..." 
              list="country-list"
              onChange={getcountry} required
            />
              <datalist id="country-list" onChange={getcountry}>
                <option value="Afghanistan"></option>
                <option value="Albania"></option>
                <option value="Algeria"></option>
                <option value="Andorra"></option>
                <option value="Angola"></option>
                <option value="Antigua and Barbuda"></option>
                <option value="Argentina"></option>
                <option value="Armenia"></option>
                <option value="Australia"></option>
                <option value="Austria"></option>
                <option value="Azerbaijan"></option>
                <option value="Bahamas"></option>
                <option value="Bahrain"></option>
                <option value="Bangladesh"></option>
                <option value="Barbados"></option>
                <option value="Belarus"></option>
                <option value="Belgium"></option>
                <option value="Belize"></option>
                <option value="Benin"></option>
                <option value="Bhutan"></option>
                <option value="Bolivia"></option>
                <option value="Bosnia and Herzegovina"></option>
                <option value="Botswana"></option>
                <option value="Brazil"></option>
                <option value="Brunei"></option>
                <option value="Bulgaria"></option>
                <option value="Burkina Faso"></option>
                <option value="Burundi"></option>
                <option value="Cabo Verde"></option>
                <option value="Cambodia"></option>
                <option value="Cameroon"></option>
                <option value="Canada"></option>
                <option value="Central African Republic"></option>
                <option value="Chad"></option>
                <option value="Chile"></option>
                <option value="China"></option>
                <option value="Colombia"></option>
                <option value="Comoros"></option>
                <option value="Congo"></option>
                <option value="Costa Rica"></option>
                <option value="Croatia"></option>
                <option value="Cuba"></option>
                <option value="Cyprus"></option>
                <option value="Czech Republic"></option>
                <option value="Denmark"></option>
                <option value="Djibouti"></option>
                <option value="Dominica"></option>
                <option value="Dominican Republic"></option>
                <option value="Ecuador"></option>
                <option value="Egypt"></option>
                <option value="El Salvador"></option>
                <option value="Equatorial Guinea"></option>
                <option value="Eritrea"></option>
                <option value="Estonia"></option>
                <option value="Eswatini"></option>
                <option value="Ethiopia"></option>
                <option value="Fiji"></option>
                <option value="Finland"></option>
                <option value="France"></option>
                <option value="Gabon"></option>
                <option value="Gambia"></option>
                <option value="Georgia"></option>
                <option value="Germany"></option>
                <option value="Ghana"></option>
                <option value="Greece"></option>
                <option value="Grenada"></option>
                <option value="Guatemala"></option>
                <option value="Guinea"></option>
                <option value="Guinea-Bissau"></option>
                <option value="Guyana"></option>
                <option value="Haiti"></option>
                <option value="Honduras"></option>
                <option value="Hungary"></option>
                <option value="Iceland"></option>
                <option value="India"></option>
                <option value="Indonesia"></option>
                <option value="Iran"></option>
                <option value="Iraq"></option>
                <option value="Ireland"></option>
                <option value="Israel"></option>
                <option value="Italy"></option>
                <option value="Jamaica"></option>
                <option value="Japan"></option>
                <option value="Jordan"></option>
                <option value="Kazakhstan"></option>
                <option value="Kenya"></option>
                <option value="Kiribati"></option>
                <option value="Kuwait"></option>
                <option value="Kyrgyzstan"></option>
                <option value="Laos"></option>
                <option value="Latvia"></option>
                <option value="Lebanon"></option>
                <option value="Lesotho"></option>
                <option value="Liberia"></option>
                <option value="Libya"></option>
                <option value="Liechtenstein"></option>
                <option value="Lithuania"></option>
                <option value="Luxembourg"></option>
                <option value="Madagascar"></option>
                <option value="Malawi"></option>
                <option value="Malaysia"></option>
                <option value="Maldives"></option>
                <option value="Mali"></option>
                <option value="Malta"></option>
                <option value="Marshall Islands"></option>
                <option value="Mauritania"></option>
                <option value="Mauritius"></option>
                <option value="Mexico"></option>
                <option value="Micronesia"></option>
                <option value="Moldova"></option>
                <option value="Monaco"></option>
                <option value="Mongolia"></option>
                <option value="Montenegro"></option>
                <option value="Morocco"></option>
                <option value="Mozambique"></option>
                <option value="Myanmar"></option>
                <option value="Namibia"></option>
                <option value="Nauru"></option>
                <option value="Nepal"></option>
                <option value="Netherlands"></option>
                <option value="New Zealand"></option>
                <option value="Nicaragua"></option>
                <option value="Niger"></option>
                <option value="Nigeria"></option>
                <option value="North Korea"></option>
                <option value="North Macedonia"></option>
                <option value="Norway"></option>
                <option value="Oman"></option>
                <option value="Pakistan"></option>
                <option value="Palau"></option>
                <option value="Palestine"></option>
                <option value="Panama"></option>
                <option value="Papua New Guinea"></option>
                <option value="Paraguay"></option>
                <option value="Peru"></option>
                <option value="Philippines"></option>
                <option value="Poland"></option>
                <option value="Portugal"></option>
                <option value="Qatar"></option>
                <option value="Romania"></option>
                <option value="Russia"></option>
                <option value="Rwanda"></option>
                <option value="Saint Kitts and Nevis"></option>
                <option value="Saint Lucia"></option>
                <option value="Saint Vincent and the Grenadines"></option>
                <option value="Samoa"></option>
                <option value="San Marino"></option>
                <option value="Sao Tome and Principe"></option>
                <option value="Saudi Arabia"></option>
                <option value="Senegal"></option>
                <option value="Serbia"></option>
                <option value="Seychelles"></option>
                <option value="Sierra Leone"></option>
                <option value="Singapore"></option>
                <option value="Slovakia"></option>
                <option value="Slovenia"></option>
                <option value="Solomon Islands"></option>
                <option value="Somalia"></option>
                <option value="South Africa"></option>
                <option value="South Korea"></option>
                <option value="South Sudan"></option>
                <option value="Spain"></option>
                <option value="Sri Lanka"></option>
                <option value="Sudan"></option>
                <option value="Suriname"></option>
                <option value="Sweden"></option>
                <option value="Switzerland"></option>
                <option value="Syria"></option>
                <option value="Taiwan"></option>
                <option value="Tajikistan"></option>
                <option value="Tanzania"></option>
                <option value="Thailand"></option>
                <option value="Timor-Leste"></option>
                <option value="Togo"></option>
                <option value="Tonga"></option>
                <option value="Trinidad and Tobago"></option>
                <option value="Tunisia"></option>
                <option value="Turkey"></option>
                <option value="Turkmenistan"></option>
                <option value="Tuvalu"></option>
                <option value="Uganda"></option>
                <option value="Ukraine"></option>
                <option value="United Arab Emirates"></option>
                <option value="United Kingdom"></option>
                <option value="United States"></option>
                <option value="Uruguay"></option>
                <option value="Uzbekistan"></option>
                <option value="Vanuatu"></option>
                <option value="Vatican City"></option>
                <option value="Venezuela"></option>
                <option value="Vietnam"></option>
                <option value="Yemen"></option>
                <option value="Zambia"></option>
                <option value="Zimbabwe"></option>
              </datalist>
          </div>

          <div className="form-group">
            <label>Type of User<span style={{color:"red"}}>*</span></label>
            <div className="radio-group">
              <label>
                <input type="radio" name="tou" value="User" onChange={getgender} required/> User
              </label>
              <label>
                <input type="radio" name="tou" value="Admin" onChange={getgender} required/> Admin
              </label>
              <label>
                <input type="radio" name="tou" value="Restaurant Admin" onChange={getgender} required/> Restaurant Admin
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            🍕 Register Now
          </button>
       
        </form>
        {userFirstName && (
          <p className="welcome-msg">
            ✅ Hello {userFirstName} {userLastName} you can now Log in!
          </p>
        )}
        <p>Already have an account?{" "}
         <Link to="/">Login</Link>
         </p>
      </div>
    </section>
  );
  
}

export default Register;
