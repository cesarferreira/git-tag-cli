#!/usr/bin/env node

'use strict';

const Chalk = require('chalk');
const Utils = require('./utils/utils');
const log = console.log;
const semver = require('semver')

const LatestTagTask = require('./tasks/latest_tag_task');

// Main code //
const self = module.exports = {
    init: (input, flags) => {

        const command = input[0];
        const params = input.subarray(1, input.length);

        switch (command.toLowerCase()) {
            case 'latest':
                LatestTagTask.init(params);
                break;
            case 'major':
                break;
            case 'minor':
                break;
            case 'patch':
                // LatestTagTask.init(params);


                (async() => {
                    var latest = await Utils.getLatestTag()
                    log(semver.inc(latest, 'major'))
                        // log(semver.major(latest))
                    log(Utils.infoAbout(latest))
                })();


                break;

            default:
                log(`Sorry, cant find ${command}`);
        }
    }
};