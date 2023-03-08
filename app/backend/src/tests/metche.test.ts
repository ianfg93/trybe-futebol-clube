import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando metche', () => {
  it('Testando a rota metche', async () => {
    const metche = await chai
       .request(app).get('/metche')
    expect(metche.status).to.be.eq(200);
  });
});