import { FC } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../store"


export const Joke: FC = () => {
  const id = useParams().id

  const joke = useAppSelector((state) => state.jokes.find(joke => joke.id === id))
  return <>
    <p>{joke?.value}</p>
    <p>{joke?.id}</p>
    <p>{joke?.created_at}</p>
  </>
}