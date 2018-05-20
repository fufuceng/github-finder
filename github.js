class Github {

    constructor() {
        this.clientId = "9e5d51254cf55d909644";
        this.clientSecret = "9bcccc2e66066e5bdad164517b0a3b9b4446a2c0";
    }

    async getUser(username) {
        const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile = await profileRes.json();
        const status = await profileRes.status;
        const repos = await reposRes.json();

        return {
            status,
            profile,
            repos,
        }
    }
}