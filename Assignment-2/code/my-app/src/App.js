import "./App.css";

function App(props) {
  const { employee } = props;
  const { name, location, bloodGroup, age, profileImg } = employee;

return(
  <div className="container">
  {/* Start your React code here */}
  <img src={employee.profileImg}/>
  <h1 className="name">{employee.name}</h1>
  <p className="info">Location</p>
  <p className="data">{employee.location}</p>
  <p className="info">Blood Group</p>
  <p className="data">{employee.bloodGroup}</p>
  <p className="info">Age</p>
  <p className="data">{employee.age}</p>
    </div>
  );
}



export default App;
