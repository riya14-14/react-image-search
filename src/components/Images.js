import React from "react";

class Images extends React.Component {
  render() {
    return (
      <div className="single-pro-image ">
        <img src={this.props.src} alt="" width={250} />
      </div>
    );
  }
}

export default Images;
