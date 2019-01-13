import config from '@config';
import { ApiResponse } from '@entities/response';
import logger from '@utils/logger';
import * as ServerSanitizer from '@utils/sanitizer/server';
import express from 'express';
import _ from 'lodash';

export function my() {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    req.ctx.bot.getInventory(req.ctx.body.gameID, null, (error, items) => {
      if (error) {
        res.json(new ApiResponse({ error: new Error(error.message) }).get());
        return next();
      }
      const nextItems = items.map(getNextItem);
      res.json(new ApiResponse({ data: nextItems }).get());
      return next();
    });
  };
}

function getNextItem(item: object): object | undefined {
  if (!config.bot.steamId) {
    logger.error(ServerSanitizer.message(), new Error('No `steamId` specified for bot!'));
    return;
  }
  return {
    appid: _.get(item, 'appid'),
    assetid: _.get(item, 'assetid'),
    market_hash_name: _.get(item, 'market_hash_name'),
    tags: _.get(item, 'tags'),
    appdata: _.get(item, 'app_data'),
    name_color: _.get(item, 'name_color'),
    classid: _.get(item, 'classid'),
    type: _.get(item, 'type'),
    img: _.get(item, 'getImageURL', () => undefined)(),
    tradable: _.get(item, 'tradable'),
    link:
      _.get(item, 'actions') &&
      _.first(_.get(item, 'actions')) &&
      _.has(_.first(_.get(item, 'actions')), 'link')
        ? _.first<{ link: string }>(_.get(item, 'actions'))!
            .link.replace('%owner_steamid%', config.bot.steamId)
            .replace('%assetid%', _.get(item, 'assetid'))
        : '',
  };
}
