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

  return (
    <>
      {hasMounted ? null : (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 999999,

            background: "#ffffff",
            overflow: "hidden",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Logo />
        </div>
      )}

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
    </>
  );
}
