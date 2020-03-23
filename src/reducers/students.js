import {ADD_STUDENT_BIODATA,ADD_STUDENT_NOKDATA, ADD_STUDENT_GUARDDATA,ADD_STUDENT_RECORD_DATA,
    ADD_STUDENT_PREVIOUS_DATA,ADD_STUDENT_NEEDS_DATA
    ,LOAD_STUDENT_DATA,ADD_STUDENT_VULNERABILITY_DATA,SAVE_STUDENT_DATA} from "../actions/actionTypes";
const StudentBiodata  = {
        "person": {
            "firstName": "",
            "surname": "",
            "otherName": "",
            "dateOfBirth": "01-01-2005",
            "stateId": 1,
            "lgaId": 1,
            "alergy": "N/A",
            "sexId": 1,
            "hometown": "",
            "address": "",
            "permanentAddress": "",
            "phone": "",
            "email": "",
            "nextOfKin": {
                "name": "",
                "phone": "",
                "email": "",
                "address": ""
            }
        },
        "guardian": {
            "name": "",
            "phone": "",
            "email": "",
            "address": "",
            "lgaId": 1,
            "stateId": 1,
            "anssidNumber": "",
            "occupation": "",
            "relationshipId": 1,
        },
        "studentRecords": [{
            "academicSessionId": 1,
            "studentClassId": 1,
            "streamId": 1,
            "isBoarding": false,
            "distanceFromSchool": 0,
            "schoolId": 1
        }],
        "previousEducations": [{
            "school": "",
            "reasonForLeaving": "",
            "studentClassId": 1
        }],
        "studentSpecialNeeds": [{
            "specialNeedId": 1
        }],
        "studentVulnerabilities": [{
            "vulnerabilityId": 1
        }]
    };
const students = (state =StudentBiodata, action) => {
    switch (action.type) {
        case ADD_STUDENT_BIODATA:
            const pStateCopy = { ...state };
            pStateCopy.person[action.field] = action.text;
            return pStateCopy
        case ADD_STUDENT_NOKDATA:
            const nStateCopy = { ...state };
            nStateCopy.person.nextOfKin[action.field] = action.text;
            return nStateCopy
        case ADD_STUDENT_GUARDDATA:
            const gStateCopy = { ...state };
            gStateCopy.guardian[action.field] = action.text;
            return gStateCopy
        case ADD_STUDENT_RECORD_DATA:
                const rStateCopy = { ...state };
                rStateCopy.studentRecords[0][action.field] = action.text;
                return rStateCopy
        case ADD_STUDENT_PREVIOUS_DATA:
                const prStateCopy = { ...state };
                prStateCopy.previousEducations[0][action.field] = action.text;
                return prStateCopy
        case ADD_STUDENT_NEEDS_DATA:
                const ndStateCopy = { ...state };
                ndStateCopy.studentSpecialNeeds[0][action.field] = action.text;
                return ndStateCopy
        case ADD_STUDENT_VULNERABILITY_DATA:
                const vStateCopy = { ...state };
                vStateCopy.studentVulnerabilities[0][action.field] = action.text;
                return vStateCopy
        case SAVE_STUDENT_DATA:
                return StudentBiodata
        case LOAD_STUDENT_DATA:
                return action.payload
        default:
            return state
    }
}

export default students