module.exports = "\
public genCourseList(courseDat: zipDat): Promise<Course[]> {\n\
    var vm = this;\n\
\n\
    return new Promise(function(fulfill, reject) {\n\
        let toReturn: Course[] = [];\n\
        for (let course of courseDat.result) {\n\
            try {\n\
                // Create the course and push it to the course array\n\
                toReturn.push(vm.genCourse(course));\n\
            } catch(err) {\n\
                Log.error(\"Error in ZipParser.genCourseList() [genCourse()]\");\n\
                Log.error(err);\n\
                reject(err);\n\
            }\n\
        }\n\
        fulfill(toReturn);\n\
    });\n\
}\n\
\n\
public genCourse(courseObj: Result): Course {\n\
    var vm = this;\n\
    var course: Course = {};\n\
    if (courseObj.Section == \"overall\") {\n\
        course[vm.id + \"_year\"] = 1900;\n\
    } else {\n\
        course[vm.id + \"_year\"] = Number(courseObj.Year);\n\
    }\n\
    course[vm.id + \"_id\"] = courseObj.Course;\n\
    course[vm.id + \"_dept\"] = courseObj.Subject;\n\
    course[vm.id + \"_audit\"] = courseObj.Audit;\n\
    course[vm.id + \"_avg\"] = courseObj.Avg;\n\
    course[vm.id + \"_title\"] = courseObj.Title;\n\
    course[vm.id + \"_fail\"] = courseObj.Fail;\n\
    course[vm.id + \"_pass\"] = courseObj.Pass;\n\
    course[vm.id + \"_instructor\"] = courseObj.Professor;\n\
    course[vm.id + \"_uuid\"] = (courseObj.id).toString();\n\
\n\
    return course;\n\
}\n\
"