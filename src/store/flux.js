const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      mydata: []
    },

    actions: {
      getAPI() {
        var requestOptions = {
          method: "GET",
          redirect: "follow"
        };

        fetch(
          "http://api.currencylayer.com/live?access_key=63863846a95d42b6d0ddfe3ecb3da76c&source=USD&currencies=ARS,CLP,COP,MXN,PYG",
          requestOptions
        )
          .then(resp => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            const store = getStore();
            console.log(data);
            setStore({ mydata: data });
            // data.map(item => ({
            // 	source: item.source,
            // 	timestamp: item.timestamp,
            // 	ARS: item.quotes.USDARS,
            // 	CLP: item.quotes.USDCLP
            // }));
          })
          .catch(error => {});
      }
    }
  };
};

export default getState;
