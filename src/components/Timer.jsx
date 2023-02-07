import React, { useState } from 'react'

function Timer() {
    setInterval(updateTime, 1000);
  
    const now = new Date().toLocaleTimeString();
  
    const [time, setTime] = useState("NaN:NaN:NaN");
  
    function updateTime() {
      var d = new Date();
      var hours = 23 - d.getHours();
      var min = 60 - d.getMinutes();
      if ((min + "").length == 1) {
        min = "0" + min;
      }
      var sec = 60 - d.getSeconds();
      if ((sec + "").length == 1) {
        sec = "0" + sec;
      }
      const newTime = hours + ":" + min + ":" + sec;
      setTime(newTime);
    }
    return (
       
          time
       
      );
    }

export default Timer