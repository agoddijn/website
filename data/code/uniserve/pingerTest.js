module.exports = "\
import * as chai from 'chai';\n\
import Pinger from '../../src/Pinger';\n\
import {DataFaker} from 'uniserve.m8s.data_faker';\n\
import * as sinon from 'sinon';\n\
import * as sinonChai from 'sinon-chai';\n\
import PingStorage from '../../src/PingStorage';\n\
import {DbInterface} from 'uniserve.m8s.web.db_interface';\n\
import {Device} from 'uniserve.m8s.types';\n\
\n\
var expect = chai.expect;\n\
chai.use(sinonChai);\n\
\n\
describe('Pinger performance test', () => {\n\
\n\
    var iters = 10;\n\
    function increment(i) {\n\
        return 100*i;\n\
    }\n\
    \n\
    before(() => {\n\
        console.log('Before: pingPerformanceTest');\n\
        this.dataFaker = new DataFaker();\n\
\n\
        this.orders = iters;\n\
        var that = this;\n\
\n\
        sinon.addBehavior('returnIter', (fake,i) => {\n\
            fake.resolves(that.dataFaker.getTopDevices(increment(i)));\n\
        })\n\
\n\
        this.dbStub = sinon.stub(DbInterface.prototype, 'getAllDevices');\n\
        for (var i = 0; i <= iters + 1; i++) {\n\
            this.dbStub.onCall(i).returnIter(i);\n\
        }\n\
\n\
        this.storageSpy = sinon.spy(PingStorage.prototype, 'addPingRecords');\n\
\n\
        this.dbStoreStub = sinon.stub(DbInterface.prototype,\n\ 'storePingRecords');\n\
        this.dbStoreStub.callsFake((date, records) => {\n\
            return new Promise((fulfill, reject) => {\n\
                fulfill([date, true]);\n\
            });\n\
        })\n\
\n\
        this.pinger = new Pinger();\n\
    })\n\
\n\
    after(() => {\n\
        console.log('After: pingPerformanceTest');\n\
        this.dbStub.restore();\n\
        this.storageSpy.restore();\n\
        this.dbStoreStub.restore();\n\
    })\n\
\n\
    function doTest(i, that) {\n\
        it('Pinging ' + String(increment(i+1)) + ' device(s)', (done) => {\n\
            that.pinger.updateDevices();\n\
            setTimeout(() => {\n\
                that.pinger.doPing()\n\
                .then(success => {\n\
                    expect(success).to.be.true;\n\
                    var storageCall = that.storageSpy.getCall(i);\n\
                    expect(storageCall.args[1].length).to.equal(increment(i+1));\n\
                    if (i > 0) expect(that.dbStoreStub.called).to.be.true;\n\
                    that.dbStoreStub.resetHistory();\n\
                    done();\n\
                })\n\
                .catch((e) => {\n\
                    done(e);\n\
                })\n\
            }, 1000);\n\
        })\n\
    }\n\
\n\
    for (var i = 0; i <= iters; i++) {\n\
        doTest(i, this);\n\
    }\n\
\n\
})\n\
"
