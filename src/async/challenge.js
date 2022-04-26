import { fetchData, API} from '../utils/fetchData.js';

const anotherFuction = async () => {
    try {
        const data = await fetchData(API);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.name);
    } catch (error) {
        console.log(error);
    }
}

console.log('before');
anotherFuction()
console.log('after');