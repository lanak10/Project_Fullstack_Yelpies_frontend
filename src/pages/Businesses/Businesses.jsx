import { useState, useEffect } from "react";
import { getBusinesses } from "../../utilities/businesses-service";

const Business = () => {
    useEffect(() => {
        getBusinesses()
    }, [])

    return (
        <div>
            This is our Business page
        </div>
    );
}

export default Business;
