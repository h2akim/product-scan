import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import "../App.css";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.props.history.push("/viewer?code=" + data);
      //   this.setState({
      //     result: data
      //   });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div class="flex items-center h-24">
        <div class="w-1/4 h-12" />
        <div class="w-1/2 h-12">
          <div class="w-full rounded overflow-hidden shadow-lg">
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl text-center mb-2">
                Scan Product QR Code
                <p>{this.state.result}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/4 h-12" />
      </div>
    );
  }
}

export default Scanner;
