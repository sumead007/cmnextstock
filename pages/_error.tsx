import Router from "next/router";
import React from "react";

/// clien side
function Error({ statusCode }) {
  React.useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  }, []);

  return <p>error: {statusCode}</p>;
}

//server side
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };

  //   if (statusCode == 404) {
  //     res.writeHead(301, { Location: "/" });
  //     res.end();
  //     return {};
  //   } else {
  //     return { statusCode };
  //   }
};

export default Error;
