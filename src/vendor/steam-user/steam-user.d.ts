import { ISteamUserError } from '@entities/steam-user';

// tslint:disable:max-line-length
declare module 'steam-user' {
  export enum EMachineIDType {
    // No machine ID will be provided to Steam
    'None' = 1,

    // A randomly-generated machine ID will be created on each logon
    'AlwaysRandom' = 2,

    // A machine ID will be generated from your account's username
    'AccountNameGenerated' = 3,

    // A random machine ID will be generated and saved to the {dataDirectory}, and will be used for future logons
    'PersistentRandom' = 4,
  }

  export default class SteamUser {
    public static readonly EResult: IResultKeys;
    public static readonly EPersonaState: IPersonaStateKeys;
    /**
     * `null` if not connected, a `SteamID` containing your SteamID otherwise.
     *
     * @type {(string | null)}
     * @memberof SteamUser
     */
    public readonly steamID: string | null;

    public setOption<
      T extends keyof ISteamUserOptions,
      P extends NonNullable<ISteamUserOptions[T]>
    >(option: T, value: P): void;

    public setOptions(options: ISteamUserOptions): void;

    public on(event: string, callback: (...args: any[]) => void): void;

    public on(event: 'error', callback: (error: ISteamUserError) => void): void;

    public on(event: 'webSession', callback: (sessionId: string, cookies: object[]) => void): void;

    public on(
      event: 'steamGuard',
      callback: (
        domain: string | null,
        callback: (code: string) => void,
        lastCodeWrong: boolean,
      ) => void,
    ): void;

    public on(
      event: 'playingState',
      callback: (blocked: boolean, playingApp: string) => void,
    ): void;

    public on(event: 'user', callback: (sid: object, user: object) => void): void;

    public webLogOn(): void;

    public logOn(params: ILogOnParams): void;

    public setPersona(state: EPersonaState, name?: string): void;

    public getPersonas(steamIds: string[], callback?: (personas: object) => void): void;

    public gamesPlayed(apps: Array<string | number | object>, force?: boolean): void;
  }
}
