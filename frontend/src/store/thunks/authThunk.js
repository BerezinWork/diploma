import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../constants/api.js";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email,
                    password
                })
            })

            if(!res.ok) {
                throw new Error(res.statusText);
            }

            const data = await res.json();
            localStorage.setItem("user", JSON.stringify(data));

            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const signUp = createAsyncThunk(
    "auth/signup",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            if(!res.ok) {
                throw new Error(res.statusText);
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);