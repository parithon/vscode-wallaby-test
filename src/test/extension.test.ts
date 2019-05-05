import * as vscode from 'vscode';
import { expect, should } from 'chai';
import { extensionId, extSuffix, Commands } from '../constants';

const suite = require('mocha').suite;
const test = require('mocha').test;

should();

interface ICommand {
    title: string;
    command: string;
    category: string;
}

suite("Extension Tests", function () {
    
    test('subscriptions are empty', () => {
        const ext = vscode.extensions.getExtension(extensionId);
    });

});