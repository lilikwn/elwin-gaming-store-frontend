'use client'

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function AOSinit() {
    useEffect(() => {
        AOS.init()
    }, [])
  
    return null
}

export default AOSinit