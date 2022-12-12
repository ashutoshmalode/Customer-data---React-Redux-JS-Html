import React, { useState } from "react";
import { add } from "../Store/customer";
import { remove } from "../Store/customer";
import { useDispatch, useSelector } from "react-redux";

function Customer() {
  const customerData = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNo, setPhoneNo] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleNumber = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAdd = () => {
    const customer = {
      name: name,
      age: age,
      phoneNo: phoneNo
    }
    dispatch(add(customer));
    setName("");
    setAge(0);
    setPhoneNo(0);
  };

  const handleDelete = (customerName, phoneNo) => {
    const customerToDelete = {
      customerName: customerName,
      phoneNo: phoneNo
    }
    dispatch(remove(customerToDelete));
  };

  return (
    <>
      <div>
        <h1>Customer Data</h1>
        <div>
          <div className="mt-3">
            <input
              className="mx-3"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
            <input
              className="mx-3"
              type="number"
              placeholder="Age"
              value={age}
              onChange={handleAge}
            />
            <input
              className="mx-3"
              type="number"
              placeholder="Mob. Number"
              value={phoneNo}
              onChange={handleNumber}
            />
          </div>
          <div className=" mt-3">
            <button
              type="button"
              className="btn btn-sm btn-dark"
              onClick={handleAdd}
              disabled={!name || !age || !phoneNo}
            >
              Add Customer
            </button>
          </div>
        </div>
        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Age</th>
                <th scope="col">Customer Contact</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {customerData.map((cust, index) => (
              <tr key={`${index}-${cust.name}`}>
                <td>{cust.name}</td>
                <td>{cust.age} </td>                                     
                <td>{cust.phoneNo} </td>
                <th scope="row">
                  <button
                    type="button"
                    className="btn btn-sm btn-dark"
                    onClick={() => handleDelete(cust.name, cust.phoneNo)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ) )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Customer;
