import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';
import { OpenSeaAsset } from 'opensea-js/lib/types';

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');

const seaport = new OpenSeaPort(provider, {
	networkName: Network.Main
});

(async function() {
	const asset: OpenSeaAsset = await seaport.api.getAsset({
		tokenAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d', // string
		tokenId: '1' // string | number | null
	});

	console.log(asset);
	
})();
