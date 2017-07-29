module.exports = "public checkQuery(query: QueryRequest): Promise<string> {\n\
        var vm = this;\n\
\n\
        return new Promise(function(fulfill, reject) {\n\
\n\
            if (!(Object.prototype.toString.call(query) === '[object Object]')) reject({code: 400, body: {error: \"Invalid Query: query is not an object\"}});\n\
\n\
            let res: [boolean, string];\n\
            let hasTransformations = false;\n\
\n\
            // Check Basic Transformations format\n\
            if (query[\"TRANSFORMATIONS\"]) {\n\
                hasTransformations = true;\n\
                res = vm.checkTransformationsBasic(query[\"TRANSFORMATIONS\"]);\n\
                if (!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
                vm.newValidKeys = vm.collectNewKeys(query[\"TRANSFORMATIONS\"], reject);\n\
                for (let keys of vm.newValidKeys) {\n\
                    if (keys.includes(\"_\")) reject({code: 400, body: {error: \"Invalid query: _ not allowed in apply keys\"}});\n\
                }\n\
            }\n\
\n\
            // Check basic Options format\n\
            if (query[\"OPTIONS\"]) {\n\
                res = vm.checkOptionsBasic(query[\"OPTIONS\"]);\n\
                if (!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
            } else reject({code: 400, body: {error: \"Invalid query: no options found\"}});\n\
\n\
            // Check GROUP keys not in APPLY\n\
            if (hasTransformations) {\n\
                res = vm.checkGroupKeysNotInApply(query[\"TRANSFORMATIONS\"][\"GROUP\"]);\n\
                if(!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
            }\n\
\n\
            // Check ID's\n\
            vm.checkId(query).then(function(ids: string[]) {\n\
                FileSystem.checkFiles(ids).then(function(missing: string[]) {\n\
                    if (missing.length == 0) {\n\
\n\
                        // Check multiple datasets\n\
                        if (ids.indexOf(\"rooms\") >= 0 && ids.indexOf(\"courses\") >= 0) {\n\
                            reject({code: 400, body: {error: \"Invalid query: Querying multiple datasets\"}});\n\
                        }\n\
\n\
                        // Check columns\n\
                        if (hasTransformations) {\n\
                            res = vm.checkColumns(query[\"OPTIONS\"][\"COLUMNS\"], query[\"TRANSFORMATIONS\"]);\n\
                        } else {\n\
                            res = vm.checkColumns(query[\"OPTIONS\"][\"COLUMNS\"], null);\n\
                        }\n\
                        if(!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
\n\
                        // Check Where\n\
                        res = vm.checkBody(query[\"WHERE\"]);\n\
                        if(!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
\n\
                        // Check apply tokens\n\
                        if (hasTransformations) {\n\
                            res = vm.checkApply(query[\"TRANSFORMATIONS\"][\"APPLY\"]);\n\
                            if (!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
                        }\n\
\n\
                        // Check Query Body\n\
                        if (query[\"WHERE\"]) {\n\
                            res = vm.checkBody(query[\"WHERE\"]);\n\
                            if (!res[0]) reject({code: 400, body: {error: \"Invalid query: \" + res[1]}});\n\
                        } else reject({code: 400, body: {error: \"Invalid query: where is missing\"}});\n\
\n\
                        fulfill(ids[0]);\n\
\n\
                    } else {\n\
                        Log.error(\"Missing \" + JSON.stringify(missing));\n\
                        reject({code: 424, body: {missing: missing}});\n\
                    }\n\
\n\
                }).catch(function(err: any) {\n\
                    Log.error(err.message);\n\
                    reject({code: 400, body: {error: \"Could not check files\"}});\n\
                });\n\
\n\
            }).catch(function(err: any) {\n\
                Log.error(err.message);\n\
                reject({code: 400, body: {error: \"Could not check id\"}});\n\
            });\n\
        });\n\
    }\
"