import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchJokesByQuery = createAsyncThunk(
  "jokes/fetchJokesByQuery",
  async (query: string, thunkAPI) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    const data = await response.json()

    return data;
  }
);

type Joke = {
  categories: unknown[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

type JokesState = {
  jokes: Joke[]
  total: number
}

const initialState: JokesState = {
  jokes: [],
  total: 0
}

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    incremented: (state) => {

    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJokesByQuery.fulfilled, (state, action) => {
      state.jokes = action.payload.result;
      state.total = action.payload.total;
    });
  },
});

export const {} = jokesSlice.actions;
