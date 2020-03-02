import {FETCH_ERROR,FETCH_LGAS,FETCH_STATES, FETCH_GENDERS, FETCH_LGAS_BY_STATE,FETCH_RELATIONSHIPS,
FETCH_SCHOOLS, FETCH_STUDENT_CLASSES,FETCH_STUDENT_STREAMS,FETCH_SPECIAL_NEEDS,
FETCH_VULNERABILITIES,FETCH_SUBJECTS, FETCH_STAFF_CLASSES,FETCH_STAFF_TYPES, FETCH_RANK,
FETCH_QUALIFICATION,FETCH_SUBJECT_AREA,FECTH_GRADE_LEVEL,FETCH_EDUCATION_LEVELS,FETCH_LOCATIONS,FETCH_SCHOOL_TYPES,
FETCH_SCHOOL_MIXS,FETCH_SECURITIES,FETCH_PARENT_FORUMS,FETCH_INSPECTION_AUTHORITY,FETCH_GRANTS,FETCH_OWNERSHIP,
FETCH_FACILITIES,FETCH_POWER_SOURCES,FETCH_HEALTH_FACILITIES,FETCH_GRADE_LEVEL } from "../actions/actionTypes";

export const utility = (state = [], action) => {
    switch (action.type) {
        case FETCH_ERROR:
            return {...state, error: action.error}
        case FETCH_STATES:
            return {...state,states:action.states}
        case FETCH_GENDERS:
            return {...state,genders:action.genders}
        case FETCH_LGAS:
            return {...state,lgas:action.lgas}
        case FETCH_LGAS_BY_STATE:
                return {...state,lgas:action.lgas}
        case FETCH_RELATIONSHIPS:
                return {...state,relationships:action.relationships}
        case FETCH_SCHOOLS:
                return {...state,schools:action.schools}
        case FETCH_STUDENT_CLASSES:
                return {...state,studentClasses:action.studentClasses}
        case FETCH_STUDENT_STREAMS:
                return {...state,streams:action.streams}
        case FETCH_SPECIAL_NEEDS:
                return {...state,specialNeeds:action.specialNeeds}
        case FETCH_VULNERABILITIES:
                return {...state,vulnerabilities:action.vulnerabilities}
        case FETCH_SUBJECTS:
                return {...state,subjects:action.subjects}
        case FETCH_STAFF_CLASSES:
                return {...state,staffClasses:action.staffClasses}
        case FETCH_STAFF_TYPES:
                return {...state,staffTypes:action.staffTypes}
        case FETCH_RANK:
                return {...state,ranks:action.ranks}
        case FETCH_QUALIFICATION:
                return {...state,qualifications:action.qualifications}
        case FETCH_SUBJECT_AREA:
                return {...state,subjectAreas:action.subjectAreas}
        case FECTH_GRADE_LEVEL:
                return {...state,gradeLevels:action.gradeLevels}
        case FETCH_HEALTH_FACILITIES:
                return {...state,healthFacilities:action.healthFacilities}
        case FETCH_POWER_SOURCES:
                return {...state,powerSources:action.powerSources}
        case FETCH_FACILITIES:
                return {...state,facilities:action.facilities}
        case FETCH_OWNERSHIP:
                return {...state,ownerships:action.ownerships}
        case FETCH_GRANTS:
                return {...state,grants:action.grants}
        case FETCH_INSPECTION_AUTHORITY:
                return {...state,inspectionAuthorities:action.inspectionAuthorities}
        case FETCH_PARENT_FORUMS:
                return {...state,parentForums:action.parentForums}
        case FETCH_SECURITIES:
                return {...state,secuityPersonnelTypes:action.secuityPersonnelTypes}
        case FETCH_SCHOOL_MIXS:
                return {...state,schoolMixes:action.schoolMixes}
        case FETCH_SCHOOL_TYPES:
                return {...state,schoolTypes:action.schoolTypes}
        case FETCH_LOCATIONS:
                return {...state,locations:action.locations}
        case FETCH_EDUCATION_LEVELS:
                return {...state,educationLevels:action.educationLevels}
        case FETCH_GRADE_LEVEL:
                return {...state,gradeLevels:action.gradeLevels}

        default:
            return state
    }
}

export default utility;