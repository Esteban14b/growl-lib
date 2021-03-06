import React, { useEffect } from 'react'

function useGrowl(time=3) {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false);
    const timeout = time*1000;

    setTimeout(() => {
      setGrowlActive(false);
    },timeout);
    
    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}

export default useGrowl