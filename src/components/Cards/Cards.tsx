import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useAppSelector } from "../../store";
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import "./Cards.css";
import { Link } from "react-router-dom";

export const Jokes: FC = () => {
  const jokes = useAppSelector((state) => state.jokes);

  return (
    <Box className="grid-container">
      {jokes.map((joke) => (
        <Link to={`/${joke.id}`}>
          <Card
            sx={{ minWidth: 275, gridColumn: "span 2" }}
            key={joke.id}
            variant="outlined"
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "20px",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontSize: 14 }}>{joke.value}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{joke.id}</Typography>
                  <Typography>
                    {new Date(joke.updated_at).toLocaleString("ru", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};
