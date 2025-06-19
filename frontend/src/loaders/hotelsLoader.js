import { store } from "../store";
import { getDestinations } from "../store/thunks/destinationsThunk.js";

const API_URL = "http://localhost:4000";

export async function hotelsLoader() {
    await store.dispatch(getDestinations());
    return null;
}

export async function hotelLoader({ params }) {
    try {
        const res = await fetch(`${API_URL}/hotels/${params.id}`);

        if(!res.ok) {
            throw new Error("No hotel found with id " + params.id);
        }

        return res.json();
    } catch(e) {
        return e.message;
    }
}