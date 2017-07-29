module.exports = "public schedule(courses: Array<any>, rooms: Array<any>): Promise<[any, any, number, number]> {\n\
\n\
    let vm = this;\n\
\n\
    let sortBySize = {\n\
        \"ORDER\": {\n\
            \"dir\": \"DOWN\",\n\
            \"keys\": [\n\
                \"size\"\n\
            ]\n\
        }\n\
    };\n\
\n\
    let peopleScheduled = 0;\n\
    let peopleUnscheduled = 0;\n\
\n\
    return new Promise(function(fulfill, reject) {\n\
\n\
        vm.QGen.sort(courses, sortBySize).then(function(sorted: Array<any>) {\n\
\n\
            vm.initialiseRoomSchedule(rooms);\n\
\n\
            let moreCourses: boolean = true;\n\
\n\
            for (let i = 0; i < rooms.length && moreCourses; i++) {\n\
                let room = rooms[i];\n\
                let roomDone: boolean = false;\n\
                while(!roomDone) {\n\
                    // Note: This method modifies the courses array by removing courseToSchedule\n\
                    let courseToSchedule = vm.getLargestSectionThatFits(sorted, room[\"rooms_seats\"]);\n\
                    if (!courseToSchedule) { // No more courses left\n\
                        roomDone = true;\n\
                        moreCourses = false;\n\
                        break;\n\
                    }\n\
                    let scheduled: boolean = false;\n\
                    let nth = 0;\n\
                    while (!scheduled) {\n\
                        let first = vm.getAvailableTime(room, nth);\n\
                        if (first == null && nth == 0) { // Case where room can no longer be scheduled (go to next room)\n\
                            scheduled = true;\n\
                            roomDone = true;\n\
                        } else if (first == null) { // Case where there is conflicts for this section (check next room)\n\
                            if (rooms[i + 1][\"rooms_size\"] > courseToSchedule[\"size\"]) { // try next room\n\
                                room = rooms[i + 1];\n\
                                nth = 0;\n\
                            } else { // Can't schedule\n\
                                vm.couldNotSchedule.push(courseToSchedule);\n\
                                scheduled = true;\n\
                            }\n\
                        } else { // Case where there is room for scheduling for this room\n\
                            let scheduleProp: ScheduleBlock = vm.scheduleCourse(courseToSchedule, room, first);\n\
                            if (!vm.checkSectionConflict(scheduleProp)) { // Course was succesffully scheduled\n\
                                vm.blockRoom(room, first);\n\
                                vm.updateSchedule(scheduleProp);\n\
                                scheduled = true;\n\
                                peopleScheduled += courseToSchedule[\"size\"];\n\
                            } else {\n\
                                nth++;\n\
                            }\n\
                        }\n\
                    }\n\
                }\n\
            }\n\
\n\
            peopleUnscheduled = vm.calculateUnscheduled(courses);\n\
\n\
            Log.info(\"People Scheduled: \" + peopleScheduled);\n\
            Log.info(\"People Unscheduled: \" + peopleUnscheduled);\n\
            Log.info(\"Heuristic: \" + (peopleScheduled/(peopleScheduled+peopleUnscheduled)));\n\
\n\
            let toReturn: Array<ScheduleBlock> = vm.getTranslatedSchedule();\n\
\n\
            fulfill([toReturn, vm.couldNotSchedule, peopleScheduled, peopleUnscheduled]);\n\
\n\
        }).catch(function(err: any) {\n\
            Log.error(JSON.stringify(err));\n\
            reject(err);\n\
        })\n\
\n\
    })\n\
\n\
}\n"