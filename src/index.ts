import Web3 from 'web3';
import { OpenSeaPort, Network } from 'opensea-js';
import { OpenSeaAsset } from 'opensea-js/lib/types';

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');

const seaport = new OpenSeaPort(provider, {
	networkName: Network.Main
});

async function search(owner: string) {
	const assets = await seaport.api.getAssets({
		owner
	});

	const html = assets.assets.map(item => `<li><img src="${item.imageUrl}"/></li>`).join('');
	document.querySelector('.list').innerHTML = html;
	
}
// 0x051f458eb3a16c982f6ea3b91ef822a0ad9c3a46
document.querySelector('#search').addEventListener('click', () => {
	
	const owner = (document.querySelector('#owner') as HTMLInputElement).value;

	search(owner);
})
