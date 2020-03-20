import {ADD_TEACHER_BIODATA,ADD_TEACHER_NOKDATA,ADD_TEACHER_RECORD_DATA,
        ADD_TEACHER_QUALIFICATION_DATA,ADD_TEACHER_SUBJECT_DATA,ADD_TEACHER_STREAM_DATA,
        ADD_TEACHER_SPECIALISATION_DATA,ADD_TEACHER_INSTITUTION_DATA,ADD_TEACHER_POSTING_DATA
        ,SAVE_TEACHER_DATA,LOAD_TEACHER_DATA, RESET_DATA} from "../actions/actionTypes";
        
        // const clearObjectValues = (objToClear) => {
        //         Object.keys(objToClear).forEach((param) => {
        //             if ( (objToClear[param]).toString() === "[object Object]" ) {
        //                 clearObjectValues(objToClear[param]);
        //             } else {
        //                     if(typeof objToClear[param] === "String"){
        //                         objToClear[param] = "";
        //                     }
        //                     else if(typeof objToClear[param] === "number"){
        //                         objToClear[param] = 0;
        //                     }
        //                     else{
        //                         objToClear[param] = null;
        //                     }
        //             }
        //         })
        //         return objToClear;
        //     };
        
        const StaffBiodata = {
                "person": {
                        "FirstName": "",
                        "Surname": "",
                        "OtherName": "",
                    "dateOfBirth": "",
                    "stateId": 1,
                    "lgaId": 1,
                    "sexId": 1,
                    "alergy": "N/A",
                    "hometown": "",
                    "address": "",
                    "phone": "",
                    "email": "",
                    "nextOfKin": {
                        "name": "",
                        "phone": "",
                        "email": "",
                        "address": ""
                    }
                },
                "teacherRecord": {
                    "AcademicSessionId": 1,
                    "schoolId": 1,
                    "onPremises": true,
                    "teacherQualifications": [
                    ],
                    "teacherSubjects": [
                    ],
                    "teacherStreams": [
                    ],
                    "teacherSpecialization": [
                    ],
                    "teacherInstitutions": [
                    ],
                    "specialization": "Teaching",
                    "firstAppointment": "",
                    "currentAppointment": "",
                    "retirement": "",
                    "yearsOfExperience": 0,
                    "trainingsAttended": 0,
                    "streamsTaught": 1,
                    "gradeLevelId": 1,
                    "rankId": 1,
                    "postHeld": "Teacher",
                    "datePosted": "",
                    "postingHistories": [{}],
                    "staffTypeId": 1,
                    "StaffClassId": 1
                }
            };
        
            const StaffBiodataTwo = {
                "person": {
                        "FirstName": "",
                        "Surname": "",
                        "OtherName": "",
                    "dateOfBirth": "",
                    "stateId": 1,
                    "lgaId": 1,
                    "sexId": 1,
                    "alergy": "N/A",
                    "hometown": "",
                    "address": "",
                    "phone": "",
                    "email": "",
                    "nextOfKin": {
                        "name": "",
                        "phone": "",
                        "email": "",
                        "address": ""
                    }
                },
                "teacherRecord": {
                    "AcademicSessionId": 1,
                    "schoolId": 1,
                    "onPremises": true,
                    "teacherQualifications": [
                    ],
                    "teacherSubjects": [
                    ],
                    "teacherStreams": [
                    ],
                    "teacherSpecialization": [
                    ],
                    "teacherInstitutions": [
                    ],
                    "specialization": "Teaching",
                    "firstAppointment": "",
                    "currentAppointment": "",
                    "retirement": "",
                    "yearsOfExperience": 0,
                    "trainingsAttended": 0,
                    "streamsTaught": 1,
                    "gradeLevelId": 1,
                    "rankId": 1,
                    "postHeld": "Teacher",
                    "datePosted": "",
                    "postingHistories": [{}],
                    "staffTypeId": 1,
                    "StaffClassId": 1
                }
            };
             
         
        //     INITIAL_STATE = {
        //         type : "RESET"
        //       }
        
            
        const teachers = (state = {...state}, action ) => {
             console.log("yessss:",state)
            switch (action.type) {
                case ADD_TEACHER_BIODATA:
                    const pStateCopy = { ...state };
                    pStateCopy.person[action.field] = action.text;
                    return pStateCopy
                case ADD_TEACHER_NOKDATA:
                        const nStateCopy = { ...state };
                        nStateCopy.person.nextOfKin[action.field] = action.text;
                        return nStateCopy
                case ADD_TEACHER_RECORD_DATA:
                        const nStateCopy1 = { ...state };
                        nStateCopy1.teacherRecord[action.field] = action.text;
                        return nStateCopy1
                case ADD_TEACHER_QUALIFICATION_DATA:
                        const nStateCopy2 = { ...state };
                        nStateCopy2.teacherRecord.teacherQualifications = [action.payload];
                        console.log("Qualif",nStateCopy2.teacherRecord.teacherQualifications);
                        return nStateCopy2
                case ADD_TEACHER_SUBJECT_DATA:
                        const nStateCopy3 = { ...state };
                        nStateCopy3.teacherRecord.teacherSubjects.push(action.payload);
                        return nStateCopy3
                case ADD_TEACHER_STREAM_DATA:
                        const nStateCopy4 = { ...state };
                        nStateCopy4.teacherRecord.teacherStreams.push(action.payload);
                        return nStateCopy4
                case ADD_TEACHER_SPECIALISATION_DATA:
                        const nStateCopy5 = { ...state };
                        nStateCopy5.teacherRecord.teacherSpecialization =[action.payload];
                        return nStateCopy5
                case ADD_TEACHER_INSTITUTION_DATA:
                        const nStateCopy6 = { ...state };
                        nStateCopy6.teacherRecord.teacherInstitutions.push(action.payload);
                        return nStateCopy6
                case ADD_TEACHER_POSTING_DATA:
                        const nStateCopy7 = { ...state };
                        nStateCopy7.teacherRecord.postingHistories.push(action.payload);
                        return nStateCopy7
                case SAVE_TEACHER_DATA:
                        return StaffBiodata
                case LOAD_TEACHER_DATA:
                        return action.payload
                case RESET_DATA:
                        // return {
                        //         _persist: state._persist
                        //       };
                        return {...state}
                        //StaffBiodata.clear();
                        //return clearObjectValues(StaffBiodata)
                        // return StaffBiodataTwo;
                        // return {...state};
                default:
                    return state
            }
        }
        
        export default teachers