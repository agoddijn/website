module.exports = "\
import {Log} from 'uniserve.m8s.utils';\n\
import {DbInterface} from 'uniserve.m8s.web.db_interface';\n\
import {PingRecord} from 'uniserve.m8s.types';\n\
\n\
export default class PingStorage {\n\
\n\
    dbInt: DbInterface;\n\
    pingMap: Map<number,PingRecord[]>;\n\
    pingMapSending: Map<number,PingRecord[]>;\n\
\n\
    constructor() {\n\
        Log.trace('PingStorage::init');\n\
        this.pingMap = new Map();\n\
        this.pingMapSending = new Map();\n\
        this.dbInt = new DbInterface();\n\
    };\n\
\n\
    public addPingRecords(dateStamp: Date, records: PingRecord[]): void {\n\
        Log.debug('Adding ping records: ' + JSON.stringify(records));\n\
        for (let record of records) {\n\
            record.datetime = dateStamp;\n\
        }\n\
        if (!(dateStamp.getTime() in this.pingMap)) {\n\
            this.pingMap.set(dateStamp.getTime(),records);\n\
        }\n\
    }\n\
\n\
    public sendRecords(): void {\n\
        var that = this;\n\
        Log.debug('sending ping records');\n\
        let storePromises: Promise<[number, boolean]>[] = [];\n\
        for (let [date, records] of this.pingMap) {\n\
            that.pingMapSending.set(date,records.slice());\n\
            storePromises.push(that.dbInt.storePingRecords(date, records));\n\
        }\n\
        that.pingMap.clear();\n\
        Promise.all(storePromises)\n\
        .then(responses => {\n\
            for (let response of responses) {\n\
                let date = <number>response[0];\n\
                if (response[1]) {\n\
                    that.pingMapSending.delete(date);\n\
                } else {\n\
                    that.pingMap.set(date, that.pingMapSending.get(date));\n\
                    that.pingMapSending.delete(date);\n\
                }\n\
            }\n\
        });\n\
    }\n\
}\n\
"