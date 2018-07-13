import React from 'react';
import PropTypes from 'prop-types';
import './percentagecircle.css';

// const Percentagecircle = ({ radius, value = 1, children }) => {
//   const pct = (1 - value) * Math.PI * 100;
//   return (
//     <div className="circle-progress">
//       <div className="circle-progress__wrap" style={styles.wrap}>
//         <svg
//           width={radius * 2}
//           height={radius * 2}
//           viewBox="0 0 100 100"
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             className="circle-progress__background"
//             r="50"
//             cx="50"
//             cy="50"
//             fill="transparent"
//           />
//           <circle
//             className="circle-progress__bar"
//             r="50"
//             cx="50"
//             cy="50"
//             fill="transparent"
//             strokeDasharray={Math.PI * 100}
//             strokeDashoffset={pct}
//           />
//         </svg>
//         <div className="circle-progress__text">{children}</div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrap: {
//     display: 'inline-block',
//     position: 'relative'
//   }
// };

const Percentagecircle = ({ radius, value = 1, children }) => {
  const pct = (1 - value) * Math.PI * 100;
  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox="0 0 100 100"
      className="circular-chart orange"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle-bg"
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        // d="M18 2.0845
        //         a 15.9155 15.9155 0 0 1 0 31.831
        //         a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <circle
        className="circle"
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        strokeDasharray={Math.PI * 100}
        strokeDashoffset={pct}
        // d="M18 2.0845
        //         a 15.9155 15.9155 0 0 1 0 31.831
        //         a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* <text x="18" y="20.35" className="percentage">
        {value}
      </text> */}
    </svg>
  );
};

Percentagecircle.propTypes = {
  radius: PropTypes.number.isRequired
};

export default Percentagecircle;
