let contractAddress = '0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898';
let address = '0x3297318c4964d4679C4A9b0eAC24743F4B882074';
let apiKey = 'AFDGWNITI6T33I62KT68UTSEP5EI1MYI9C';

let url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json()) // Parse the data as JSON
    .then(data => console.log(Number(data.result) * Math.pow(10, -18) * 1.49)) // Do something with the data
    .catch(error => console.error('Error:', error)); // 

