import React from "react";

const useSetFeed = (object) => {
  const {
    url,
    dataSettingFunction,
    statusSettingFunction,
    errorSettingFunction,
  } = object;
  React.useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          errorSettingFunction(true);
          throw Error("Feed server error");
        }
        return res.json();
      })
      .then((data) => {
        dataSettingFunction(data);
        statusSettingFunction("idle");
      })
      .catch((err) => console.log(err));

    return () => {
      statusSettingFunction("loading");
    };
  }, []);
};

export default useSetFeed;
