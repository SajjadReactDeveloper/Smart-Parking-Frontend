import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

export default function ViewCarDetail() {
    const auth = useSelector((state) => state.authReducer);
    const { user, isLogged } = auth;
    console.log(user);

  const location = useLocation();
  const car = location.state;
  console.log(car);
  return (
    <div className="container mt-5">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          Car Detail's
        </h3>
        <div
          className="col-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
            height: 325,
          }}
        >
          <img
            src={car.carImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div
          className="col-4 p-3"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <div
            className="userImage mb-3"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={car.ownerAvatar}
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <p style={{ marginLeft: 10, fontSize: 24 }}>{car.ownerName}</p>
          </div>
          <div className="carUserInfo">
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Reg No: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.regNo}
                </p>
              </div>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Brand: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.brand}
                </p>
              </div>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Model: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.model}
                </p>
              </div>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="col-3">
                <p>Color: </p>
              </div>
              <div className="col-6">
                <p
                  style={{
                    color: "black",
                    backgroundColor: "wheat",
                    padding: 5,
                    width: 200,
                    boderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  {car.color}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
