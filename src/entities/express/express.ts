// tslint:disable:interface-name
import SteamBot from '@entities/steam-bot';

declare global {
  namespace Express {
    interface Request {
      ctx: {
        bot: SteamBot;
        body: {
          bot_id: number;
          gameID: number;
          steam_id: string;
          asset_ids: string[];
          links: string[];
          items: Array<{
            assetid: string;
            appid: number;
          }>;
          comment: string;
          trade_url: string;
          data: object;
        };
        params: {
          object: string;
          method: string;
        };
        query: {};
      };
    }
  }
}
