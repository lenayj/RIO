import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const address = addressObject.formatted_address.split(",").map((e) => {return e.trim()});
  debugger;

var e_street = {
    target:{
        name:"street",
        value:address[0]
    }
}
updateQuery(e_street);
var e_city = {
    target:{
        name:"city",
        value:address[1]
    }
}
updateQuery(e_city);
var e_state = {
    target:{
        name:"state",
        value:address[2].split(" ")[0]
    }
}
updateQuery(e_state);
var e_zipcode = {
    target:{
        name:"zipcode",
        value:address[2].split(" ")[1]
    }
}
updateQuery(e_zipcode);

console.log(addressObject);
}

function SearchLocationInput(props) {
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(props.handleChange, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input" autoComplete="new-password">
        <div className="form-row" autoComplete="new-password">
            <div className="form-group col-md-12" autoComplete="new-password">
                <div><span>Address</span></div>
                <input ref={autoCompleteRef} className="form-control" name="street" autoComplete="new-password"
                    onChange={event => props.handleChange(event)} placeholder="Enter address" value={props.address.street} />                                                                                            
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-5">
                <div><span>City</span></div>
                <input type="text" className="form-control" name="city" autoComplete="new-password"
                value={props.address.city} onChange={event => props.handleChange(event)}/>                                                                                               
            </div>
            <div className="form-group col-md-3">
                <div><span>State</span></div>
                <input type="text" className="form-control" name="state" autoComplete="new-password"
                value={props.address.state} onChange={event => props.handleChange(event)}/>                                                
            </div> 
            <div className="form-group col-md-2">
                <div><span>Zip</span></div>
                <input type="text" className="form-control" name="zipcode" autoComplete="new-password"
                value={props.address.zipcode} onChange={event => props.handleChange(event)}/>                                               
            </div> 
        </div>
    </div>
  );
}

export default SearchLocationInput;