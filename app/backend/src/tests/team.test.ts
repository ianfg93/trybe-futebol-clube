import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando team', () => {
  it('Testando a rota team', async () => {
    const team = await chai
       .request(app).get('/team')
    expect(team.status).to.be.eq(200);
  });
});