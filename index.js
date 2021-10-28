const fs = require('fs');
const axios = require('axios');

const main = async () => {

	console.log('test');

	try {
		const { data } = await axios.get(
			'https://api.pexels.com/v1/search?query=nature&per_page=100',
			{
				headers: {
					Authorization: '563492ad6f91700001000001d5c577a776b84794b80df25211170944'
				}
			}
		);
		
		// console.log(data);

		fs.writeFileSync('data.json', JSON.stringify(data));

	} catch (e) {
		console.log(e);
	}

};

main();
