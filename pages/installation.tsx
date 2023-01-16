// @ts-nocheck
import { Component } from "react";

import Head from 'next/head';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import styles from "../styles/pages/Installation.module.scss";

class Installation extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Installation - Martech Air-Suspensions Ltd</title>
        </Head>
        <div className={styles.topInfoContainer}>
          <div className={styles.topInfo}>
            <h1>Installation Services</h1>
            <p>
              Here you will find locations of our installation services, along
              with the contact information for the relevant location. You will
              be able to have your Martech Air Suspension kits fitted at these
              locations.
            </p>
          </div>
        </div>
        <section className={styles.location}>
          <div className={styles.information}>
            <h2>Martech Air Suspensions Ltd</h2>
            <div className={styles.infos}>
              <div className={styles.infoType}>
                <h3>Address</h3>
                <div className={styles.divider}></div>
                <ul>
                  <li>Mar-Tech Logistics Ltd</li>
                  <li>Unit C10</li>
                  <li>Boston Trade Park</li>
                  <li>Norfolk Street</li>
                  <li>Boston</li>
                  <li>Lincolnshire</li>
                  <li>PE21 9HG</li>
                </ul>
              </div>
              <div className={styles.infoType}>
                <h3>Contact</h3>
                <div className={styles.divider}></div>
                <ul>
                  <li>07715129997</li>
                  <li>martechuk85@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <Map
            className={"map"}
            style={{
              height: "400px",
              position: "inline-block",
            }}
            containerStyle={{ position: "relative", maxWidth: "600px" }}
            initialCenter={{
              lat: 52.986181,
              lng: -0.022353,
            }}
            google={this.props.google}
            zoom={12}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
          </Map>
        </section>
        <div className={styles.locationDivider}></div>
        <section className={styles.location}>
          <div className={styles.information}>
            <h2>Prymus Car Garage Ltd</h2>
            <div className={styles.infos}>
              <div className={styles.infoType}>
                <h3>Address</h3>
                <div className={styles.divider}></div>
                <ul>
                  <li>Unit 9b</li>
                  <li>Hampden Road</li>
                  <li>KT1 3LG</li>
                  <li>Kingston Upon Thames</li>
                </ul>
              </div>
              <div className={styles.infoType}>
                <h3>Contact</h3>
                <div className={styles.divider}></div>
                <ul>
                  <li>07715129997</li>
                  <li>martechuk85@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <Map
            className={"map"}
            style={{
              height: "400px",
              position: "inline-block",
            }}
            containerStyle={{ position: "relative", maxWidth: "600px" }}
            initialCenter={{
              lat: 51.40732,
              lng: -0.28435,
            }}
            google={this.props.google}
            zoom={12}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
          </Map>
        </section>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDWFH8hUunW5Ym29qzj96Dy-l0rutvcepk",
})(Installation);
