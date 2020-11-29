const wump = require("wumpfetch");
const endpoint = "https://discord-list100.glitch.me/api";

class DLDApi {
    constructor(botid, token) {
        this.token = token;
        this.botid = botid;
        this.ua = "DLDAPI/1.0 By Pikachilla (CyberCDN)";
    }

    postStats(servercount) {
        if (!this.token) {
            throw new TypeError("[Token-Missing]: API token not provided");
        }
        if (!this.botid) {
            throw new Error("[BotID-Missing]: Bot ID must be specified.");
        }
        if (!servercount) {
            throw new Error("[ServerCount-Missing]: Server count must be specified.");
        }
        if (isNaN(servercount)) {
            throw new Error("[ServerCount-NaN]: Server count must be a number.");
        }
        return new Promise(async(resolve, reject) => {

            const res = await wump(`${endpoint}/auth/stats/${this.botid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": this.ua,
                    "Authorization": this.token
                },
                data: {
                    "server_count": servercount
                }
            }).send();
            if (!res) {
                reject(new Error("[Error]: Bot statistics failed to update."));
            }
            resolve(`[Success]: Bot statistics have been updated to Guild Count: ${servercount}`);
        });
    }
};
module.exports = DLDApi;