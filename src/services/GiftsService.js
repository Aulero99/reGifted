import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class GiftsService {

    async getGiftsFromApi() {
        logger.log('Online: getGiftsFromApi()');
    const res = await api.get('/api/gifts')
        logger.log('The response from the get request is:', res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
        logger.log('The AppState is now',AppState.gifts);
        // AppState.emit('gifts')
}

}
export const giftsService = new GiftsService() 