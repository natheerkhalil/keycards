import axios from 'axios';

import { API_URL } from '../../config';

import { useResponseStore } from '@/stores/response';

export function extractFirstString(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
            const result = extractFirstString(nestedArray[i]);
            if (result) {
                return result;
            }
        } else if (typeof nestedArray[i] === 'string') {
            return nestedArray[i];
        }
    }
    return nestedArray.length;
}

function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

export async function request(data, url, authenticated = true) {
    console.log(`API request to: ${API_URL}${url} with data:`);
    console.log(data);
    var res = null;

    var headers = {};

    if (authenticated) {
        headers = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
            }
        };
    }
    
    try {
        await axios.post(API_URL + url, data, headers).then(response => {
            res = response;
        })

        console.log(`API response to ${API_URL}${url}: ${JSON.stringify(res.data)}`);

        return res;
    } catch (error) {

        console.log("API request failed: ", error);

        let msg;
        let code;

        if (error.response.data) {
            msg = Object.values(flattenObject(error.response.data))[0];
        } else {
            msg = "An unexpected error occurred";
        }

        if (error.response.status) {
            code = error.response.status;
        } else {
            code = 500; // Default to server error code
        }

        if (code == 429) {
            useResponseStore().updateResponse("Rate limit exceeded, take a breather 🍃", "warn");
        }
        if (code == 423) {
            useResponseStore().updateResponse("Your account has been blocked from doing this", "warn");
        }

        return {
            failed: 1,
            msg: msg,
            code: code
        };

    }
}