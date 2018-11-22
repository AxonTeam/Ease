'use strict';
import EaseClient from './Bot';
import mongoose from 'mongoose';



mongoose.connect('mongodb://localhost/EaseDB', {
    useCreateIndex: true,
    autoReconnect: true,
})
    .then(() => {
        EaseClient.Logger.notice('Connected to AxonCore DataBase.');
    })
    .catch(err => {
        EaseClient.Logger.emerg('Could NOT connect to AxonCore DataBase.\n' + err.stack);
    });

EaseClient.start();
EaseClient.Logger.notice('=== ONLINE ===');
