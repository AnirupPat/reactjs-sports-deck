const useHttp = () => {
  const sendRequest = async (requestConfig, applyData) => {
    const request = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.header ? requestConfig.header : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    if (request.ok) {
      const data = await request.json();
      if (requestConfig.method === "POST") {
        applyData(requestConfig.body);
      } else {
        applyData(data);
      }
    }
  };
  return {
    sendRequest,
  };
};

export default useHttp;
