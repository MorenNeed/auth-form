import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function Registration()
{
    useEffect(() =>
    {
      document.title = "Registration";
    });
    return (
      <div className="Registration">
        <button type="button"><Link to="/">Log</Link></button>
      </div>
    );
}

export default Registration;