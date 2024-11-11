import React from "react";

export default async function apiRequest(
  url = "",
  optrionsObj = null,
  errMsg = null
) {
  try {
    const response = await fetch(url, optrionsObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}
