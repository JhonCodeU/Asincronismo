import { fetchData, API } from "../utils/fetchData.js";

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        console.log(data.origin.name);
        fetchData(data.origin.url)
    })
    .catch(error => {
        console.error(error);
    });