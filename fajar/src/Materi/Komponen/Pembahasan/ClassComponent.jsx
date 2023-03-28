import React from "react";

class ClassComponent extends React.Component  {

    render() {
        return (
          <div>
          <h1 style={{color:'blue',textAlign: 'center'}}>Selamat Datang Disini</h1>
          <center><h2>Halo {this.props.nama}</h2></center>
          </div>
        );
      }

}

export default ClassComponent;


