'use client'
import { useEffect } from "react"

function BootstrapJS() {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])

    return null
}

export default BootstrapJS