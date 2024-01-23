import { useState } from "react";
import "./index.css";

const App=()=> {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "nivas",
      age: "23",
      city: "salem",
    },
    {
      id: 2,
      name: "vasi",
      age: "23",
      city: "namakkal",
    },
    {
      id: 3,
      name: "naveen",
      age: "30",
      city: "chennai",
    },
  ]);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [show, setshow] = useState(false);
  const [editIndex, seteditIndex] = useState(null);
  const hanldeclick = () => {
    if (!name || !age || !city) {
      alert("Please fill in all fields");
      return;
    }
    setdata((prev) => [
      ...prev,
      { id: data.length + 1, name: name, age: age, city: city },
    ]);
    setname("");
    setage("");
    setcity("");
  };
  const handledelete = (id) => {
    const del = data.filter((e) => e.id !== id);
    setdata(del);
  };
  const handleEdit = (index) => {
    setname(data[index].name);
    setage(data[index].age);
    setcity(data[index].city);
    setshow(true);
    seteditIndex(index);
  };

  const hanldeupdate = () => {
    if (!name || !age || !city) {
      alert("Please fill in all fields");
      return;
    }
  
    const updatedData = [...data];
    updatedData[editIndex] = {
      id: data[editIndex].id,
      name: name,
      age: age,
      city: city,
    };
    setdata(updatedData);
    setshow(false);
    seteditIndex(null);
    setname("");
    setage("");
    setcity("");
  };
  return (
    <div className="mt-5 container">
      <h1 className="crud">crud opration</h1>
      <label className="form-label">Name</label>
      <input
      className="form-input"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label className="form-label">Age</label>
      <input className="form-input"
        type="number"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <label className="form-label">city</label>
      <input className="form-input "
        type="text"
        value={city}
        onChange={(e) => setcity(e.target.value)}
      />
      {!show ? (
        <button className="form-button " onClick={hanldeclick} style={{ backgroundColor: "green", color: "white" }}>submit</button>
      ) : (
        <button className="form-button" onClick={hanldeupdate} style={{ backgroundColor: "green", color: "white" }}>update</button>
      )}

      <table  class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td>
                <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                <button onClick={() => handledelete(e.id)}  className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
