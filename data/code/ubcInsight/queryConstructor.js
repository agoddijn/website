module.exports = "public filter(list: Course[] | Room[], query: QueryRequest): Promise<Array<{}>> {\n\
    var vm = this;\n\
    return new Promise(function(fulfill, reject) {\n\
        let filter = query[\"WHERE\"];\n\
        var filtered: Course[] | Room[] = new Array<Course | Room>();\n\
\n\
        for (let item of list) {\n\
            if(vm.filterOne(item, filter)) filtered.push(item);\n\
        }\n\
\n\
        if(query[\"TRANSFORMATIONS\"]) {\n\
            try {\n\
                filtered = vm.group(filtered, query);\n\
            } catch (err) {\n\
                Log.error(\"Error in QueryGenerator.filter() [group()]\");\n\
                reject(err);\n\
            }\n\
        }\n\
\n\
        vm.sort(filtered, query[\"OPTIONS\"]).then(function(sorted: Course[] | Room[]) {\n\
\n\
            vm.columns(sorted, query[\"OPTIONS\"][\"COLUMNS\"]).then(function(toReturn: Array<{}>) {\n\
                fulfill(toReturn);\n\
            }).catch(function(err: any) {\n\
                Log.error(\"Error in QueryGenerator.filter() [QueryGenerator.columns()]\");\n\
                reject(err);\n\
            });\n\
\n\
        }).catch(function(err: any) {\n\
            Log.error(\"Error in QueryGenerator.filter() [QueryGenerator.sort()]\");\n\
            reject(err);\n\
        });\n\
    });\n\
}\n\
"