export default class DLDApi {
    public token: string;
    public botid: string;
    public ua: string;

    public constructor(botid: string, token: string);

    public postStats(servercount: number): Promise<string>;
}