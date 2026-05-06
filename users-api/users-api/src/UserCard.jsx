import React from 'react'
import './App.css'

const UserCard = ({ data, index }) => {
  return (
    <div className="card-container">

      <div className="user-card">

        <div className="card-header">
          <img
            src={data?.picture?.large}
            alt="profile"
            className="profile-img"
          />
        </div>

        <div className="card-body">

          <h1>UserCard {index + 1}</h1>

          <h2 className="user-name">
            {data?.name?.first}
          </h2>

          <p className="user-email">
            {data?.email}
          </p>

          <div className="info-container">

            <div className="info-pill">
              📞 {data?.phone}
            </div>

            <div className="info-pill">
              🎂 {data?.dob?.age} yrs
            </div>

            <div className="info-pill">
              🌍 {data?.location?.country}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default UserCard