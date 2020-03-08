import { ADD_STUDENT_BIODATA,ADD_STUDENT_NOKDATA,FETCH_ERROR,FETCH_STATES,
 ADD_TEACHER_BIODATA,ADD_TEACHER_NOKDATA, ADD_TEACHER_RECORD_DATA,
 ADD_TEACHER_QUALIFICATION_DATA, ADD_TEACHER_POSTING_DATA, FETCH_LGAS, FETCH_GENDERS,
 FETCH_LGAS_BY_STATE, ADD_STUDENT_GUARDDATA, FETCH_RELATIONSHIPS, FETCH_SCHOOLS,
 FETCH_STUDENT_CLASSES, FETCH_STUDENT_STREAMS, FETCH_SPECIAL_NEEDS,
 ADD_STUDENT_RECORD_DATA,ADD_STUDENT_PREVIOUS_DATA,ADD_STUDENT_NEEDS_DATA,
 ADD_STUDENT_VULNERABILITY_DATA,FETCH_GRADE_LEVEL,FETCH_SUBJECTS,FETCH_STAFF_CLASSES,
 FETCH_STAFF_TYPES,FETCH_VULNERABILITIES,FETCH_RANK,FETCH_QUALIFICATION,FETCH_SUBJECT_AREA,
 ADD_TEACHER_SPECIALISATION_DATA,ADD_TEACHER_INSTITUTION_DATA,FETCH_EDUCATION_LEVELS,FETCH_LOCATIONS,FETCH_SCHOOL_TYPES,
 FETCH_SCHOOL_MIXS,FETCH_SECURITIES,FETCH_PARENT_FORUMS,FETCH_INSPECTION_AUTHORITY,FETCH_GRANTS,FETCH_OWNERSHIP,
 FETCH_FACILITIES,FETCH_POWER_SOURCES,FETCH_HEALTH_FACILITIES, ADD_SCHOOL_DATA,ADD_SCHOOL_RECORD_DATA, ADD_SCHOOL_CORDINATES,ADD_SCHOOL_EDUCATIONAL_LEVELS,
 ADD_SCHOOL_GRANT,ADD_SCHOOL_ENROLLMENT_CERTIFICATES,ADD_SCHOOL_FACILITIES,ADD_SCHOOL_POWER_SOURCES,
 ADD_SCHOOL_HEALTH_FACILITIES,ADD_SCHOOL_CLASSES,ADD_SCHOOL_STREAMS,SAVE_STUDENT_DATA,ADD_TEACHER_STREAM_DATA,
 ADD_TEACHER_SUBJECT_DATA,SAVE_TEACHER_DATA,SAVE_SCHOOL_DATA,LOAD_STUDENT_DATA,LOAD_TEACHER_DATA,LOAD_SCHOOL_DATA
} from "./actionTypes";


const appURL = "http://2cb53bcb.ngrok.io/api"
// const appURL = "http://asbemis.com/api"

export const addStudentBiodata = (field,text) => ({
    type:ADD_STUDENT_BIODATA,
    field,
    text
})

export const addStudentNokdata = (field,text) => ({
    type:ADD_STUDENT_NOKDATA,
    field,
    text
})

export const addStudentGuarddata = (field,text) => ({
    type:ADD_STUDENT_GUARDDATA,
    field,
    text
})

export const addStudentRecdata = (field,text) => ({
    type:ADD_STUDENT_RECORD_DATA,
    field,
    text
})

export const addStudentPrevdata = (field,text) => ({
    type:ADD_STUDENT_PREVIOUS_DATA,
    field,
    text
})

export const addStudentNeedsdata = (field,text) => ({
    type:ADD_STUDENT_NEEDS_DATA,
    field,
    text
})

export const addStudentVulndata = (field,text) => ({
    type:ADD_STUDENT_VULNERABILITY_DATA,
    field,
    text
})


export const saveStudentData = (payload) => ({
    type:SAVE_STUDENT_DATA,
    payload
})

export const loadStudentData = (payload) => ({
    type:LOAD_STUDENT_DATA,
    payload
})

export const loadSchoolData = (payload) => ({
    type:LOAD_SCHOOL_DATA,
    payload
})

export const loadTeacherData = (payload) => ({
    type:LOAD_TEACHER_DATA,
    payload
})


//tEACHER

export const saveTeacherData = (payload) => ({
    type:SAVE_TEACHER_DATA,
    payload
})

export const addTeacherBiodata = (field,text) => ({
    type:ADD_TEACHER_BIODATA,
    field,
    text
})

export const addTeacherNokdata = (field,text) => ({
    type:ADD_TEACHER_NOKDATA,
    field,
    text
})

export const addTeacherRecorddata = (field,text) => ({
    type:ADD_TEACHER_RECORD_DATA,
    field,
    text
})

export const addTeacherQualificationdata = (payload) => ({
    type:ADD_TEACHER_QUALIFICATION_DATA,
    payload
})

export const addTeacherSubjectdata = (payload) => ({
    type:ADD_TEACHER_SUBJECT_DATA,
    payload
})

export const addTeacherStreamdata = (payload) => ({
    type:ADD_TEACHER_STREAM_DATA,
    payload
})

export const addTeacherSpecialisationdata = (payload) => ({
    type:ADD_TEACHER_SPECIALISATION_DATA,
    payload
})

export const addTeacherInstitutiondata = (payload) => ({
    type:ADD_TEACHER_INSTITUTION_DATA,
    payload
})




//School

export const saveSchoolData = (payload) => ({
    type:SAVE_SCHOOL_DATA,
    payload
})

export const addSchoolProfile = (field,text) => ({
    type:ADD_SCHOOL_DATA,
    field,
    text
})

export const addSchoolRecord = (field,text) => ({
    type:ADD_SCHOOL_RECORD_DATA,
    field,text
})

export const addSchoolCordinates = (field,text) => ({
    type:ADD_SCHOOL_CORDINATES,
    field,text
})

export const addSchoolEducationLevels = (payload) => ({
    type:ADD_SCHOOL_EDUCATIONAL_LEVELS,
    payload
})


export const addSchoolGrants = (payload) => ({
    type:ADD_SCHOOL_GRANT,
    payload
})

export const addSchoolEnrolmentCertificates = (payload) => ({
    type:ADD_SCHOOL_ENROLLMENT_CERTIFICATES,
    payload
})


export const addSchoolFacilities = (payload) => ({
    type:ADD_SCHOOL_FACILITIES,
    payload
})

export const addSchoolPowerSources = (payload) => ({
    type:ADD_SCHOOL_POWER_SOURCES,
    payload
})

export const addSchoolHealthFacilities = (payload) => ({
    type:ADD_SCHOOL_HEALTH_FACILITIES,
    payload
})

export const addSchoolClasses = (payload) => ({
    type:ADD_SCHOOL_CLASSES,
    payload
})

export const addSchoolStreams = (payload) => ({
    type:ADD_SCHOOL_STREAMS,
    payload
})






export const addTeacherPostingData = (payload) => ({
    type:ADD_TEACHER_POSTING_DATA,
    payload
})

export const fetchError = (error) => ({
    type:FETCH_ERROR,
    error
})

export const fetchLoading = (bool) => ({
    type:FETCH_LOADING,
    isLoading:bool
})

export const fetchStateSuccess = (states) => ({
    type:FETCH_STATES,
    states
})

export const fetchLgaSuccess = (lgas) => ({
    type:FETCH_LGAS,
    lgas
})

export const fetchLgaByStateSuccess = (lgas) => ({
    type:FETCH_LGAS_BY_STATE,
    lgas
})

export const fetchSexesSuccess = (genders) => ({
    type:FETCH_GENDERS,
    genders
})

export const fetchRelationshipSuccess = (relationships) => ({
    type:FETCH_RELATIONSHIPS,
    relationships
})

export const fetchSchoolsSuccess = (schools) => ({
    type:FETCH_SCHOOLS,
    schools
})

export const fetchStudentClassesSuccess = (studentClasses) => ({
    type:FETCH_STUDENT_CLASSES,
    studentClasses
})

export const fetchStudentStreamsSuccess = (streams) => ({
    type:FETCH_STUDENT_STREAMS,
    streams
})

export const fetchSpecialNeedsSuccess = (specialNeeds) => ({
    type:FETCH_SPECIAL_NEEDS,
    specialNeeds
})

export const fetchVulnerabilitySuccess = (vulnerabilities) => ({
    type:FETCH_VULNERABILITIES,
    vulnerabilities
})

export const fetchSubjectsSuccess = (subjects) => ({
    type:FETCH_SUBJECTS,
    subjects
})

export const fetchStaffClassesSuccess = (staffClasses) => ({
    type:FETCH_STAFF_CLASSES,
    staffClasses
})

export const fetchStaffTypesSuccess = (staffTypes) => ({
    type:FETCH_STAFF_TYPES,
    staffTypes
})

export const fetchRankSuccess = (ranks) => ({
    type:FETCH_RANK,
    ranks
})

export const fetchQualificationSuccess = (qualifications) => ({
    type:FETCH_QUALIFICATION,
    qualifications
})

export const fetchSubjectAreaSuccess = (subjectAreas) => ({
    type:FETCH_SUBJECT_AREA,
    subjectAreas
})

export const fetchGradeLevelsSuccess = (gradeLevels) => ({
    type:FETCH_GRADE_LEVEL,
    gradeLevels
})

export const fetchEducationLevelsSuccess = (educationLevels) => ({
    type:FETCH_EDUCATION_LEVELS,
    educationLevels
})

export const fetchLocationsSuccess = (locations) => ({
    type:FETCH_LOCATIONS,
    locations
})

export const fetchSchoolTypesSuccess = (schoolTypes) => ({
    type:FETCH_SCHOOL_TYPES,
    schoolTypes
})


export const fetchSchoolMixesSuccess = (schoolMixes) => ({
    type:FETCH_SCHOOL_MIXS,
    schoolMixes
})


export const fetchSecurityPersonnelTypesSuccess = (secuityPersonnelTypes) => ({
    type:FETCH_SECURITIES,
    secuityPersonnelTypes
})


export const fetchParentForumsSuccess = (parentForums) => ({
    type:FETCH_PARENT_FORUMS,
    parentForums
})


export const fetchInspectionAuthoritiesSuccess = (inspectionAuthorities) => ({
    type:FETCH_INSPECTION_AUTHORITY,
    inspectionAuthorities
})


export const fetchGrantsSuccess = (grants) => ({
    type:FETCH_GRANTS,
    grants
})


export const fetchOwnershipsSuccess = (ownerships) => ({
    type:FETCH_OWNERSHIP,
    ownerships
})


export const fetchFacilitiesSuccess = (facilities) => ({
    type:FETCH_FACILITIES,
    facilities
})


export const fetchPowerSourcesSuccess = (powerSources) => ({
    type:FETCH_POWER_SOURCES,
    powerSources
})


export const fetchHealthFacilitiesSuccess = (healthFacilities) => ({
    type:FETCH_HEALTH_FACILITIES,
    healthFacilities
})


export const fetchStatesList = () => {
    return dispatch => {
        fetch(`${appURL}/States`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchStateSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchLgasList = () => {
    return dispatch => {
        fetch(`${appURL}/Lgas`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchLgaSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchStateLgasList = (stateId) => {
    return dispatch => {
        fetch(`${appURL}/Lgas/state/${stateId}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(res.error));
              return res;
            }
            dispatch(fetchLgaByStateSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchGendersList = () => {
    return dispatch => {
        fetch(`${appURL}/Sexes`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchSexesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchRelationshipsList = () => {
    return dispatch => {
        fetch(`${appURL}/Relationships`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchRelationshipSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchSchoolList = () => {
    return dispatch => {
        fetch(`${appURL}/Schools`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchSchoolsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchStudentClassesList = () => {
    return dispatch => {
        fetch(`${appURL}/StudentClasses`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchStudentClassesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchStudentStreamsList = () => {
    return dispatch => {
        fetch(`${appURL}/Streams`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchStudentStreamsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchSpecialNeedsList = () => {
    return dispatch => {
        fetch(`${appURL}/SpecialNeeds`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchSpecialNeedsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchVulnerabilityList = () => {
    return dispatch => {
        fetch(`${appURL}/Vulnerabilities`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchVulnerabilitySuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchSubjectsList = () => {
    return dispatch => {
        fetch(`${appURL}/Subjects`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchSubjectsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchStaffClassesList = () => {
    return dispatch => {
        fetch(`${appURL}/StaffClasses`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchStaffClassesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchStaffTypesList = () => {
    return dispatch => {
        fetch(`${appURL}/StaffTypes`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchStaffTypesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchRankList = () => {
    return dispatch => {
        fetch(`${appURL}/Ranks`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchRankSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchQualificationList = () => {
    return dispatch => {
        fetch(`${appURL}/Qualifications`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
            dispatch(fetchQualificationSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchSubjectAreaList = () => {
    return dispatch => {
        fetch(`${appURL}/SubjectAreas`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }

            dispatch(fetchSubjectAreaSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchGradeLevelList = () => {
    return dispatch => {
        fetch(`${appURL}/GradeLevels`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchGradeLevelsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const fetchEducationLevelsList = () => {
    return dispatch => {
        fetch(`${appURL}/EducationLevels`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchEducationLevelsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchLocationsList = () => {
    return dispatch => {
        fetch(`${appURL}/Locations`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchLocationsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchSchoolTypesList = () => {
    return dispatch => {
        fetch(`${appURL}/SchoolTypes`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchSchoolTypesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchSchoolMixesList = () => {
    return dispatch => {
        fetch(`${appURL}/SchoolMixes`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchSchoolMixesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchSecurityPersonnelTypesList = () => {
    return dispatch => {
        fetch(`${appURL}/SecurityPersonnelTypes`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchSecurityPersonnelTypesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchParentForumsList = () => {
    return dispatch => {
        fetch(`${appURL}/ParentForums`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchParentForumsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchInspectionAuthoritiesList = () => {
    return dispatch => {
        fetch(`${appURL}/InspectionAuthorities`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchInspectionAuthoritiesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchGrantsList = () => {
    return dispatch => {
        fetch(`${appURL}/Grants`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchGrantsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchOwnershipsList = () => {
    return dispatch => {
        fetch(`${appURL}/Ownerships`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchOwnershipsSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchFacilitiesList = () => {
    return dispatch => {
        fetch(`${appURL}/Facilities`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchFacilitiesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchPowerSourcesList = () => {
    return dispatch => {
        fetch(`${appURL}/PowerSources`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchPowerSourcesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}

export const fetchHealthFacilityList = () => {
    return dispatch => {
        fetch(`${appURL}/HealthFacilities`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(error));
              return res;
            }
           dispatch(fetchHealthFacilitiesSuccess(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}



export const saveStudentDataAsync = (data) => {
    return dispatch => {
        const object = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        };
        console.log(data)
        fetch(`${appURL}/Students`,object)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                console.log(res)
              dispatch(fetchError(res.error));
              return res;
            }

            console.log(res)
           dispatch(saveStudentData(res));
        })
            .catch(error => {

                console.log(error)
            dispatch(fetchError(error));
        })
    }
}


export const saveTeacherDataAsync = (data) => {
    return dispatch => {
        const object = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        };
        console.log(data)
        fetch(`${appURL}/Teachers`,object)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                console.log(res)
              dispatch(fetchError(res.error));
              return res;
            }

            console.log(res)
           dispatch(saveTeacherData(res));
        })
            .catch(error => {

                console.log(error)
            dispatch(fetchError(error));
        })
    }
}


export const savechoolDataAsync = (data) => {
    return dispatch => {
        
        const object = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        };

        console.log(data)

        fetch(`${appURL}/Schools`,object)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              
                console.log(res)
                dispatch(fetchError(res.error));
                return res;
            }

            console.log(res)
            res.dateEstablished = res.dateEstablished.substring(0,10)
            res.schoolRecord.lastInspection = res.schoolRecord.lastInspection.substring(0,10)
            
            dispatch(saveSchoolData(res));
        })
        .catch(error => {
            console.log(error)
            alert("An error occured while saving your data!",error)
            dispatch(fetchError(error));
        })
    }
}


export const loadStudentDataAsync = (code) => {
    return dispatch => {
        fetch(`${appURL}/Students/Code/${code}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
              dispatch(fetchError(res.error));
              return res;
            }
            // console.log("Retrieed!",res)
           dispatch(loadStudentData(res));
        })
            .catch(error => {
            dispatch(fetchError(error));
        })
    }
}


export const loadTeacherDataAsync = (code) => {
    return dispatch => {
        fetch(`${appURL}/Teachers/code/${code}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                console.log(res)
              dispatch(fetchError(res.error));
              return res;
            }

            // console.log(res)
           dispatch(loadTeacherData(res));
        })
            .catch(error => {

                console.log(error)
            dispatch(fetchError(error));
        })
    }
}


export const loadSchoolDataAsync = (code) => {
    return dispatch => {
        fetch(`${appURL}/Schools/code/${code}`)
        .then(res => res.json())
        .then(res => {

            if(res.error) {
                // console.log(res)
              dispatch(fetchError(res.error));
              return res;
            }

        console.log("Response",res)
        
        res.dateEstablished = res.dateEstablished.substring(0,10)
        res.schoolRecord.lastInspection = res.schoolRecord.lastInspection.substring(0,10)
        
           dispatch(loadSchoolData(res));
        })
            .catch(error => {

                console.log("ERROR:",error)
                dispatch(fetchError(error));
        })
    }
}

