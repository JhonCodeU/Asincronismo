import { XMLHttpRequest } from "xmlhttprequest";

const API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_api, true);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error" + url_api));
            }
        };
        xhttp.send();
    });
};

export { fetchData, API };
