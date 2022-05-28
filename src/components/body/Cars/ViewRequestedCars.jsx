import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function ViewRequestedCars() {
  const [cars, setCars] = React.useState([]);
  const auth = useSelector((state) => state.authReducer);

  React.useEffect(async () => {
    const res = await axios.post(`/car/viewSpecificUserCar`, {
      ownerId: auth.user._id,
    });
    setCars(res.data);
  });

  const history = useHistory();
  const handleClick = (data) => {
    history.push({
      pathname: "/viewRequestCarDetail",
      state: data,
    });
  };
  return (
    <div className="datatable">
      <h3 className="text-center mb-3 mt-3">Requested Cars</h3>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Registration Number</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Color</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr
              key={car._id}
              onClick={() => {
                handleClick(car);
              }}
              style={{ cursor: "pointer" }}
            >
              <td>{car.regNo}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRequestedCars;
