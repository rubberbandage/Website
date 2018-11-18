import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const countryTravelled = ["AUS", "IND", "ESP"]
const countryStyle = (geography) => {

  if (countryTravelled.includes(geography.id)) {
    return {
      default: {
        fill: "#4183c4",
        stroke: "#607D8B",
        strokeWidth: 0.75,
        outline: "none",
      },
      hover: {
        fill: "#1e70bf",
        stroke: "#607D8B",
        strokeWidth: 0.75,
        outline: "none",
      },
      pressed: {
        fill: "#1e70bf",
        stroke: "#607D8B",
        strokeWidth: 0.75,
        outline: "none",
      }
    }
  }  

  return {
    default: {
      fill: "#ECEFF1",
      stroke: "#607D8B",
      strokeWidth: 0.75,
      outline: "none",
    },
    hover: {
      fill: "#DDD",
      stroke: "#607D8B",
      strokeWidth: 0.75,
      outline: "none",
    },
    pressed: {
      fill: "#DDD",
      stroke: "#607D8B",
      strokeWidth: 0.75,
      outline: "none",
    }
  }
}

class SimpleMarkers extends Component {
  render() {
    return (
        <ComposableMap
          { ...this.props.map }
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup disablePanning='true'>
            <Geographies geography="/assets/maps/world.json" disableOptimisation>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      tabable={false}
                      style={countryStyle(geography)}
                    />
                )
              }
            </Geographies>
            <Markers>
              { this.props.locations.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: (marker.name === "ESP") ? "#00ffb2" : "#ffffb2" },
                    hover: { fill: (marker.name === "ESP") ? "#a3ffe3": "#ffffb2" },
                    pressed: { fill: (marker.name === "ESP") ? "#00b77f" : "#ffffb2" },
                  }}
                  >
                  <circle cx={0} cy={0} r={10} style={{stroke: "#00b77f", strokeWidth: 3, opacity: 0.9 }}/>
                  <text textAnchor="middle" y={marker.markerOffset} style={{ fontSize: 25, stroke: 'white', strokeWidth: '0.25em' }}>{marker.name}</text>
                  <text textAnchor="middle" y={marker.markerOffset} style={{ fontSize: 25, fill: "black"}}>{marker.name}</text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
    )
  }
}

export default SimpleMarkers