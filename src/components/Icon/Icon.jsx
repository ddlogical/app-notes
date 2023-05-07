import React from 'react';
import PropTypes from 'prop-types';

function Icon({ type }) {
    switch (type) {
        case 'add':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" 
                height="30" 
                viewBox="0 96 960 960" 
                width="30"
                fill="#686868">
                  <path d="M427.667 875V628.333H181V523.667h246.667V277h104.666v246.667H779v104.666H532.333V875H427.667Z"/>
              </svg>
            );
        case 'delete':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" 
                height="30" 
                viewBox="0 96 960 960" 
                width="30"
                fill="#686868">
                  <path d="M258.333 964q-44.475 0-74.904-30.233Q153 903.534 153 859.334V324.999H93.334V220.333H333v-52.999h292.667v52.999h240.999v104.666H807v534.335q0 43.7-30.679 74.183Q745.642 964 701.667 964H258.333Zm443.334-639.001H258.333v534.335h443.334V324.999ZM350 784.334h85.666V398.333H350v386.001Zm174.334 0h86.332V398.333h-86.332v386.001ZM258.333 324.999v534.335-534.335Z"/>
              </svg>
            );
        case 'edit':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" 
                height="30" 
                viewBox="0 96 960 960" 
                width="30"
                fill="#686868">
                  <path d="M194.333 870.334h34.666l401.669-403.336-34.666-34.666-401.669 403.335v34.667ZM790 419.999 643.668 274l23.333-24.334q31-31.333 73.833-31.833T815 247.666l19 19q25.667 24.333 23.333 56.333-2.333 32-24.666 54.333L790 419.999Zm-46.333 46.666L260.999 949.333H114.333V803.001l482.002-482.002 147.332 145.666Zm-129.332-17-18.333-17.333 34.666 34.666-16.333-17.333Z"/>
              </svg>
            );
        case 'menu':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" 
                  height="48" 
                  viewBox="0 96 960 960" 
                  width="48"
                  fill="#686868">
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
              </svg>
            );
        default:
            return null;
      }
  }
  
  Icon.propTypes = {
      type: PropTypes.string,
  };
  
  export default Icon;