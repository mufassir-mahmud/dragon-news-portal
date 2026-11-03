import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.DRAGON_NEWS_URI);
const db = client.db("dragon-news");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  },
  
    database: mongodbAdapter(db, {
    client,
  }),
      socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },},
});