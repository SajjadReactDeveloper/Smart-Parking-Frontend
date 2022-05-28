import React from 'react';
import './viewComplaints.scss';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function ViewComplaints() 
{
    const history = useHistory();
    const [cars, setCars] = React.useState([]);

    React.useEffect(async() => {
        const res = await axios.get(`/complaint/viewComplaint`)
        setCars(res.data)
    })

    const handleClick = (data) => {
        history.push({
          pathname: '/admin/complaintDetails',
          state: data
        });
      }
    return (
        <div className='datatable'>
            <div className="tableContainer">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Category</th>
                            <th scope="col">Sub Category</th>
                            <th scope="col">Type</th>
                            <th scope="col">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cars.map((car) => (
                                <tr key={car._id} onClick={() => handleClick(car)}>
                                    <td>{car.category}</td>
                                    <td>{car.subCategory}</td>
                                    <td>{car.type}</td>
                                    <td>{car.title}</td>
                                </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ViewComplaints