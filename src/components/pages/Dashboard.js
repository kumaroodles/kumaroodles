import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (

    <>
      <div className="rows">
        <img src="../assets/images/Vector.png" className="vector"></img>
        <div className="dash">Dashboard</div>
      </div>
      <div className="row">
        <div className=""></div>
        <img src="../assets/images/Rectangle.png"></img>
        <img src="../assets/images/prev.png" className="prev"></img>
        {/* <div className="rectangles"></div>
        <img src="../assets/images/next.png" className="next"></img> */}
        <div className="cards">
          <div className="rect">
            <div className="docs">
          <img src="../assets/images/files.png" className="files"></img>
          </div>
          </div>
          <div className="rfq">
          RFQ Raised
          </div>
          <div className="hr"></div>
          {/* <img src="../assets/images/hr.png"></img> */}
          <div className="stage">In Stage</div>
          <div className="days">13 days</div>
          <div className="day">316</div>
          <div className="values">₹10.36 CR (in values)</div>
        </div>
        
      </div>
      <div className="setting">
      <img src="../assets/images/settings.png"></img>
      </div>
      <div className="master">
      Master Development Tracker
      </div>
     
    </>
  );
};

export default Dashboard;
