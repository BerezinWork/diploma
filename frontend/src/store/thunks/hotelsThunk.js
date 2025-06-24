import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../constants/api.js";

export const getHotels = createAsyncThunk(
    "hotels/getHotels",
    async ({ destinationId, query, page, limit }, { rejectWithValue }) => {
        try {
            const body = {
                query,
                page,
                limit
            };
            if (destinationId) {
               body.destinationId = destinationId;
            }

            const res = await fetch(`${API_URL}/search`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            if(!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Failed to fetch hotels!");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);