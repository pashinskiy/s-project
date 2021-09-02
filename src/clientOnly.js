import React from "react"
import Logo from './images/svg/logo_sport.svg';

/**
 * Компонент-обертка, позволяет отображать логотип до загрузки основного содержимого
 * @module src/clientOnly
 */
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) return null
  if (!hasMounted) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          alignContent: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Logo />
      </div>
    )
  }
  return <div {...delegated}>{children}</div>
}
