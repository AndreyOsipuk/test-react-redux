import { FC, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fetchJokesByQuery } from "../../store/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store";

export const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.total);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length >= 3) {
      dispatch(fetchJokesByQuery(value))
    }
  }, [value, dispatch]);

  return (
    <Box component="div">
      <TextField
        autoFocus
        inputRef={inputRef}
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {total > 0 && <p>Found jokes: {total}</p>}
    </Box>
  );
};
