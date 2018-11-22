'use strict';

import Ease from './EaseClient';
import easeLogo from './configs/easeLogo';

import axonConf from './configs/customConf.json';
import tokenConf from './configs/tokenConf.json';
import templateConf from './configs/templateConf.json';

import EaseUtils from './Utility/Utils';
import EaseSchema from './Schemas/EaseSchema';
import GuildSchema from './Schemas/GuildSchema';

const AxonOptions = {
    axonConf,
    templateConf,
    tokenConf,

    logo: easeLogo,
    utils: EaseUtils,
    axonSchema: EaseSchema,
    guildSchema: GuildSchema,
};

/**
 *
 */
const EaseClient = new Ease(
    tokenConf.bot.token,
    // Eris options
    {
        restMode: true,
        autoreconnect: true,
        getAllUsers: true,
        messageLimit: 20,
        disableEveryone: true,
        defaultImageFormat: 'png',
        defaultImageSize: 1024,
        disableEvents: {
            TYPING_START: true,
        },
    },
    // Axon options
    AxonOptions
);

export default EaseClient;
