import React, { Component } from "react";

// State Class Component
export default class classC extends Component {
  constructor() {
    super();
    this.state = {
      nama: "fikri",
      umur: 19,
    };
  }

  render() {
    return (
      <div>
        <p>
          Saya {this.state.nama}, umur {this.state.umur}, data nama dan umur
          diambil dari state
        </p>
      </div>
    );
  }
}
