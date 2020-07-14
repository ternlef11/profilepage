import React, { Component } from "react"
import '../App.css';

import resumepdf from '../portlinks/Ali_Cv_Sci_industry_07072020.pdf';

export default class Resumeme extends Component {
   constructor(props) {
    super(props);
    this.onHoverChangeTBresumedet = this.onHoverChangeTBresumedet.bind(this)
    this.onHoverChangeTBCV = this.onHoverChangeTBCV.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBresumedet() {
        var tb = <div className="headlinebox"><p className="headlinetext">Why you need me</p></div>;
        this.props.onSelectTBdetbox(tb);
}

  onHoverChangeTBCV() {
        var tb = <div className="headlinebox"><p className="headlinetext">Find out more</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Resume</p>
          </div>
        </div>
        <div className="detcontextbox">
            <div className="aboutboxwrap">
              <div className="resumebox" onMouseEnter={this.onHoverChangeTBresumedet} onMouseLeave={this.onHoverLeave}>
              <p className="aboutdescriptionfinal">Currently <b>UNEMPLOYED</b>.</p>
                <p className="resumedescription">I have worked as a structural bioinformatician for over five years.
                My passion lies in employing a myriad of advanced data-driven techniques to meet biomedical and pharmaceutical objectives & enhance the therapeutic landscape for all.
                This includes developing innovative pipelines that streamline bioinformatic analysis &/or constructing online platforms which host bioinformatic resources.
                As a computational biologist I thrive in interdisciplinary settings where members collaboratively contribute their expertise towards resolving biomolecular phenomena.
                What has remained true to my practice is my thirst for immersive challenging environments and the subsequent learning experience entailed.
                I am always on the lookout for opportunities where I can utilise my expertise towards innovative endeavours.</p>
                 <a href={resumepdf} target="_blank" rel="noopener noreferrer"><p className="aboutdescriptionfinal" onMouseEnter={this.onHoverChangeTBCV} onMouseLeave={this.onHoverLeave}>Click for CV</p></a>
              </div>
            </div>
        </div>
      </div>
  )
}
}
