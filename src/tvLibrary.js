import { db } from "./dbconnect.js";

export function addNewTv(req, res) {
  const newTv = req.body;

  //CREATE: Add New Tv Show
  db.collection("tvShows")
    .add(newTv)
    .then((doc) => res.status(201).send(`New tv added ${doc.id}`))
    .catch((err) => res.status(500).send(err));
}

export async function getAllTv(req, res) {
  const collection = await db.collection("tvShows")
    .get()
    .catch((err) => res.status(500).send(err));

  const tvShowList = collection.docs.map(
    (tvShow) => ({...tvShow.data(), id: tvShow.id, })
    );
}
