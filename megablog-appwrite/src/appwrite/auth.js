import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const existingUser = await this.getCurrentUser();
            if (existingUser) {
                throw new Error("An account with this email already exists.");
            }

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            return userAccount ? this.login({ email, password }) : userAccount;
        } catch (error) {
            console.error("Account Creation Error:", error);
            throw new Error("Failed to create an account. Please try again.");
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            console.error("Login Error:", error);
            throw new Error(error.message.includes("Invalid credentials")
                ? "Incorrect email or password."
                : "Login failed. Please try again.");
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user || null;
        } catch (error) {
            console.error("Appwrite Service :: getCurrentUser :: Error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite Service :: logout :: Error", error);
        }
    }
}

const authService = new AuthService();
export default authService;