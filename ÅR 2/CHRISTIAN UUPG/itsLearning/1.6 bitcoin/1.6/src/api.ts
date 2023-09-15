export async function getBitconIndex(url: string) {
    const appEl = document.querySelector('#app');
    const response = await fetch(url);
  
    const data = await response.json();
    console.log(data)
    appEl!.innerHTML = `
    <div id="list">
    <h1>Last Updated:  ${data.time.updated}</h1>
    <div id='rates'>
    <p>${data.bpi.EUR.code}: ${data.bpi.EUR.rate} ${data.bpi.EUR.symbol}</p>
    <p>${data.bpi.GBP.code}: ${data.bpi.GBP.rate} ${data.bpi.GBP.symbol}</p>
    <p>${data.bpi.USD.code}: ${data.bpi.USD.rate} ${data.bpi.USD.symbol}</p>
    </div>
    `
  };