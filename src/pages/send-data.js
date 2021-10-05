import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import Layout from "../components/layout";
import Helmet from "react-helmet";

const useStyles = makeStyles((theme) => ({
  message: {
    fontWeight: 600,
    lineHeight: 3,

    fontSize: "4.44vw",
    "@media(min-width: 1440px)": {
      fontSize: "64px",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
    },
  },
}));

const DataSend = () => {
  const classes = useStyles();

  const userData = JSON.parse(localStorage.getItem("user_data"));
  localStorage.removeItem("user_data");

  const initComand = () => `
    ;(function (_, r, e, t, a, i, l) {
      _["retailCRMObject"] = a
      _[a] =
        _[a] ||
        function () {
          ;(_[a].q = _[a].q || []).push(arguments)
        }
      _[a].l = 1 * new Date()
      l = r.getElementsByTagName(e)[0]
      i = r.createElement(e)
      i.async = !0
      i.src = t
      l.parentNode.insertBefore(i, l)
    })(window, document, "script", "https://collector.retailcrm.pro/w.js", "_rc")
    
    _rc("create", "RC-17731690945-2")
    
    _rc("send", "pageView")
  `;
  const sendComand = () => `
    _rc('send', 'order', {
      orderMethod: 'new-diller',
      name: '${userData.name}',
      phone: '${userData.phone}',
      email: '${userData.email}',
      customDirection: '${userData.direction}',
      
      callback: function (success, response) {
        if (success) {
          console.log("Спасибо, ваша заявка принята! Её номер: " + response.id)
        } else {
          console.log("К сожалению, не удалось отправить заявку.", response)

        }
      },
    })
  `;
  return (
    <Layout>
      {userData ? (
        <>
          <Helmet>
            <script type="text/javascript">{initComand()}</script>
          </Helmet>

          <Helmet>
            <script type="text/javascript">{sendComand()}</script>
          </Helmet>

          <Typography align="center" className={classes.message}>
            Данные отправлены
          </Typography>
        </>
      ) : null}
    </Layout>
  );
};

export default DataSend;
