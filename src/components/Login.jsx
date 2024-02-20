import  { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidate()) {
      //api-call
    }
    
  };

  const formValidate = () => {
    const newError = {};
    if(!formData.email){
        newError.email="Email is required"
    }
    if(!formData.password){
        newError.password="Password is required"
    }
    setError(newError)
    return Object.keys(newError).length===0
  };
  return (
    <section className="main-login">
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
              alt=""
            />
          </div>
          <div className="formBx">
            <form action="" onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <div>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={formData.email}
                placeholder="Username"
              />
              {error.email && <sapn className="text-danger">{error.email}</sapn>}
 
              </div>
              
              <div>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                placeholder="Password"
              />
              {error.password && <sapn className="text-danger">{error.password}</sapn>}

              </div>
              
              <input type="submit" value="Login" />
              <p className="signup">
                `Don't have an account ?`<a href="#">Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Login;
