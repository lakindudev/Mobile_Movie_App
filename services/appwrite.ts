//track the searches made by a user

import { Client, Databases, ID, Query } from "react-native-appwrite";


const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITER_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {  
    
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("searchTerm", query),
    ]);

    console.log(result);

    //check if a record of that search has alredy been stored
    //if a document is found increment the search count field
    // if no document is found c
    //create a new document in Appwrite database - 1
}