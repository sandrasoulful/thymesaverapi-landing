import { useState, useEffect } from "react"

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    const updateMatches = () => {
      setMatches(media.matches)
    }

    updateMatches()
    media.addEventListener("change", updateMatches)

    return () => {
      media.removeEventListener("change", updateMatches)
    }
  }, [query])

  return matches
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)")
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)")
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)")
}
