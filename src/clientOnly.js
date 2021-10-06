import React from "react";
import { Helmet } from "react-helmet";
import Logo from "./images/svg/logo_sport.svg";

/**
 * Компонент-обертка, позволяет отображать логотип до загрузки основного содержимого
 * @module src/clientOnly
 */
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
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
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
        }}
      >
        <Logo />
      </div>
    );
  }
  return (
    <div {...delegated}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </div>
  );
}
