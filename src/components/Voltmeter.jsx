import v1Img from '../assets/V1.png';
import a2Img from '../assets/A2.png';
import a3Img from '../assets/A3.png';
import a4Img from '../assets/A4.png';
import needleImg from '../assets/needle.png';
import '../App.css';

const voltmeterImages = {
  V1: v1Img,
  V2: a2Img,
  V3: a3Img,
  V4: a4Img,
};

const meterAccessibleNames = {
  V1: 'V1 AC voltmeter',
  V2: 'A2 AC ammeter',
  V3: 'A3 AC ammeter',
  V4: 'A4 AC ammeter',
};

import { DIAL_GEOMETRY } from '../utils/rlcMeterCalibration.js';

// V1 is the supply voltmeter. The three right-hand instruments retain their
// legacy V2/V3/V4 component labels, but their artwork and readings are the
// A2/A3/A4 branch ammeters (I_R, I_L, and I_C).
const meterGeometryByLabel = {
  V1: DIAL_GEOMETRY.voltmeter,
  V2: DIAL_GEOMETRY.ammeter,
  V3: DIAL_GEOMETRY.ammeter,
  V4: DIAL_GEOMETRY.ammeter,
};

/* STATIC ARTICLE ID LOOKUP */
const articleIds = {
  V1: "voltmeter-v1",
  V2: "voltmeter-v2",
  V3: "voltmeter-v3",
  V4: "voltmeter-v4",
};

/* STATIC WALKTHROUGH TARGET ID LOOKUP */
const walkthroughIds = {
  V1: "voltmeter-v1-walkthrough-target",
  V2: "voltmeter-v2-walkthrough-target",
  V3: "voltmeter-v3-walkthrough-target",
  V4: "voltmeter-v4-walkthrough-target",
};

/* SEPARATE BOX CONFIGURATION
   The fine-tuned manual layout coordinates for each voltmeter element
*/
const walkthroughLayouts = {
  V1: {
    left: '-255px',
    top: '18px',
    width: '120px',
    height: '220px'
  },
  V2: {
    left: '65px',
    top: '-280px',
    width: '120px',
    height: '220px'
  },
  V3: {
    left: '65px',
    top: '-130px',
    width: '120px',
    height: '210px'
  },
  V4: {
    left: '65px',
    top: '30px',
    width: '120px',
    height: '210px'
  }
};

const Voltmeter = ({ label = "V1", value = 0, angleDeg = null }) => {
  const geometry = meterGeometryByLabel[label] || DIAL_GEOMETRY.voltmeter;
  const meterValue = Number.isFinite(Number(value)) ? Number(value) : 0;
  const ratio = Math.min(Math.max(meterValue / geometry.maxValue, 0), 1);
  // If an explicit angle was computed upstream (see rlcMeterCalibration.js),
  // use it directly so the RLC-case needle calibration can override the
  // generic value-based calculation below.
  const angle = Number.isFinite(angleDeg)
    ? angleDeg
    : geometry.startAngle + ratio * geometry.sweepAngle;

  // Static ID assignments extracted from the dictionaries
  const articleId = articleIds[label] || "voltmeter-default";
  const walkthroughTargetId = walkthroughIds[label] || "voltmeter-default-walkthrough-target";
  
  // Safely extracts the isolated configuration for the current voltmeter view
  const currentLayout = walkthroughLayouts[label] || { left: '0px', top: '0px', width: '120px', height: '200px' };

  return (
    <div className={`meter-shell meter-shell--voltmeter meter-shell--${label}`}>
      
      <article 
        id={articleId} 
        className={`voltmeter voltmeter--${label}`}
      >
        <img
          src={voltmeterImages[label]}
          alt={meterAccessibleNames[label] || `${label} analog meter`}
          className="voltmeter__image"
        />

        {/* Needle Pivot — handles rotation */}
        <div
          aria-hidden="true"
          className={`voltmeter__needle voltmeter__needle--${label}`}
          style={{ '--voltmeter-needle-rotation': `${angle}deg` }}
        >
          <img alt="" className="meter-needle-image" src={needleImg} />
        </div>
      </article>

      {/* Production Walkthrough Target Container — Clean and invisible */}
      <div
        id={walkthroughTargetId}
        style={{
          position: 'absolute',
          
          // Loaded dynamically from the separate layout coordinates mapping above
          left: currentLayout.left,       
          top: currentLayout.top,        
          width: currentLayout.width,    
          height: currentLayout.height,   

          pointerEvents: 'none',
          zIndex: 1000
        }}
      />
      
    </div>
  );
};

export default Voltmeter;
