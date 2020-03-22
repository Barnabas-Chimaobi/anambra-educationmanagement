import {ADD_SCHOOL_DATA,ADD_SCHOOL_RECORD_DATA, ADD_SCHOOL_CORDINATES,ADD_SCHOOL_EDUCATIONAL_LEVELS,
    ADD_SCHOOL_GRANT,ADD_SCHOOL_ENROLLMENT_CERTIFICATES,ADD_SCHOOL_FACILITIES,ADD_SCHOOL_POWER_SOURCES,
    ADD_SCHOOL_HEALTH_FACILITIES,ADD_SCHOOL_CLASSES,ADD_SCHOOL_STREAMS,SAVE_SCHOOL_DATA
,LOAD_SCHOOL_DATA} from "../actions/actionTypes";


const schools = (state = {}, action) => {
    switch (action.type) {
        case ADD_SCHOOL_DATA:
            const pStateCopy = { ...state };
            pStateCopy[action.field] = action.text;
            return pStateCopy
        case ADD_SCHOOL_RECORD_DATA:
            const nStateCopy = { ...state };
            nStateCopy.schoolRecord[action.field] = action.text;
            return nStateCopy
        case ADD_SCHOOL_CORDINATES:
            const gStateCopy = { ...state };
            gStateCopy.coordinates[action.field] = action.text;
            return gStateCopy
        case ADD_SCHOOL_EDUCATIONAL_LEVELS:
                const eStateCopy = { ...state };
                eStateCopy.schoolRecord.schoolEducationLevels.push(action.payload);
                return eStateCopy
        case ADD_SCHOOL_GRANT:
                const rStateCopy = { ...state };
                rStateCopy.schoolRecord.schoolGrant.push(action.payload);
                return rStateCopy
        case ADD_SCHOOL_ENROLLMENT_CERTIFICATES:
                const prStateCopy = { ...state };
                prStateCopy.schoolRecord.enrollmentCertificates.push(action.payload);
                return prStateCopy
        case ADD_SCHOOL_FACILITIES:
                const ndStateCopy = { ...state };
                ndStateCopy.schoolRecord.schoolFacilities.push(action.payload);
                return ndStateCopy
        case ADD_SCHOOL_POWER_SOURCES:
                const vStateCopy = { ...state };
                vStateCopy.schoolRecord.schoolPowerSources.push(action.payload);
                return vStateCopy
        case ADD_SCHOOL_HEALTH_FACILITIES:
                const hStateCopy = { ...state };
                hStateCopy.schoolRecord.schoolHealthFacilities.push(action.payload);
                return hStateCopy
        case ADD_SCHOOL_CLASSES:
                const cStateCopy = { ...state };
                cStateCopy.schoolRecord.schoolClasses.push(action.payload);
                return cStateCopy
        case ADD_SCHOOL_STREAMS:
                const sStateCopy = { ...state };
                sStateCopy.schoolRecord.schoolStreams.push(action.payload);
                return sStateCopy
        case SAVE_SCHOOL_DATA:
                return action.payload
        case LOAD_SCHOOL_DATA:
                return action.payload
        default:
            return state
    }
}

export default schools