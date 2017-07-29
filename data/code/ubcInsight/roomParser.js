module.exports = "\
public searchIndexForRooms(document: any): Promise<string[]> {\n\
\n\
    var vm = this;\n\
\n\
    return new Promise(function(fulfill, reject) {\n\
        var toCheck = new Array();\n\
        var toReturn = new Array<string>();\n\
        toCheck.push(document);\n\
        // Strategy, BFS of tree using specific nodeNames to find relevant data\n\
        while(!(toCheck.length == 0)) {\n\
            let cur = toCheck.pop();\n\
            if(cur[\"childNodes\"]) {\n\
                for(let node of cur[\"childNodes\"]) {\n\
                    let nodeName = node[\"nodeName\"];\n\
                    if (nodeName === \"html\") {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"body\") {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"div\" &&\n\
                        (vm.checkNodeAttrs(node, \"class\", \"full-width-container\") ||\n\
                        vm.checkNodeAttrs(node, \"id\", \"main\") ||\n\
                        vm.checkNodeAttrs(node, \"id\", \"content\") ||\n\
                        vm.checkNodeAttrs(node, \"class\", \"view-buildings-and-classrooms\") ||\n\
                        vm.checkNodeAttrs(node, \"class\", \"view-content\"))) {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"section\" &&\n\
                        (vm.checkNodeAttrs(node, \"id\", \"block-system-main\"))) {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"table\" &&\n\
                        (vm.checkNodeAttrs(node, \"class\", \"views-table\"))) {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"tbody\") {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"tr\") {\n\
                        toCheck.push(node);\n\
                    }\n\
                    else if (nodeName === \"td\" &&\n\
                        (vm.checkNodeAttrs(node, \"class\", \"views-field-field-building-code\"))) {\n\
                        let buildingName: string = node[\"childNodes\"][0][\"value\"];\n\
                        buildingName = buildingName.trim();\n\
                        toReturn.push(buildingName);\n\
                    }\n\
                }\n\
            }\n\
        }\n\
        if (toReturn.length == 0) reject(\"Error in searchIndexForRoom, could not find rooms\");\n\
        fulfill(toReturn);\n\
    });\n\
}\
"