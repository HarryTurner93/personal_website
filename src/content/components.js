import React from "react";


function CaptionedImage(props) {
  return (
      <div style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', width: '100%'}}>
        <img alt={props.caption} src={props.image} style={{maxWidth: '100%', margin: 'auto'}}/>
        <i><h6 style={{textAlign: 'center', paddingTop: '5px', width: '75%', margin: 'auto'}}>{props.caption}</h6></i>
    </div>
  )
}

export default CaptionedImage;