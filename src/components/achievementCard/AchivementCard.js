import React from "react";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="certificate-card">
        <div className="certificate-image-div">
          <img src="" alt="" className="card-image"></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className="card-title">Card Title</h5>
          <p className="card-subtitle">Description</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
          })}
        </div>
      </div>
  );
}
