import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testanto leaderboard', () => {
  it('Testanto rota home', async () => {
    const home = await chai
       .request(app).get('/leaderboard/home')
    expect(home.status).to.be.eq(200);
  });
  it('Testanto rota away', async () => {
    const away = await chai
       .request(app).get('/leaderboard/away')
    expect(away.status).to.be.eq(200);
  });
});