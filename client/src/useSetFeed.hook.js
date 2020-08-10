import React from "react";

const useSetFeed = (object) => {
  const { url, dataSettingFunction, statusSettingFunction } = object;
  React.useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
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
