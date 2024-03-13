import { FC, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { fetchJokesByQuery } from "../../store/articleSlice";
import { useAppDispatch, useAppSelector } from "../../store";

export const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const total = useAppSelector((state) => state.total)

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(inputRef.current) {
      dispatch(fetchJokesByQuery(inputRef.current.value))
    }
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField autoFocus inputRef={inputRef} label="Outlined" variant="outlined" />

      {total > 0 && <p>Found jokes: {total}</p>}
    </Box>
  );
};
