import clientPromise from "../../../mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const collection = client.db("Dealership").collection("listings");
  const documents = await collection.find({}).toArray();

	res.status(200).send(documents);
}