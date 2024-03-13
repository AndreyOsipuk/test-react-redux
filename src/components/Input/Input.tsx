import { FC, useEffect, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fetchJokesByQuery } from "../../store/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import debounce from 'lodash.debounce'
export const Input: FC = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.total);
  const [value, setValue] = useState("");

  const handleFetchJokes = (query: string) => {
    dispatch(fetchJokesByQuery(query))
  }

  const debouncedFetch = useCallback(debounce(handleFetchJokes, 500), []);

  useEffect(() => {
    if (value.length >= 3) {
      debouncedFetch(value)
    }
  }, [value, debouncedFetch]);

  return (
    <Box component="div">
      <TextField
        autoFocus
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      {total > 0 && <p>Found jokes: {total}</p>}
    </Box>
  );
};
