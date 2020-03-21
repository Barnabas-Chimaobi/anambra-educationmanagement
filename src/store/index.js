import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import {RESET_ACTION} from "../actions/actionTypes"
import {combineReducers} from "redux"

const StudentBiodata  = {
    "person": {
        "firstName": "",
        "surname": "",
        "otherName": "",
        "dateOfBirth": "",
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
        "school": "-",
        "reasonForLeaving": "-",
        "studentClassId": 1
    }],
    "studentSpecialNeeds": [{
        "specialNeedId": 1
    }],
    "studentVulnerabilities": [{
        "vulnerabilityId": 1
    }]
};

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
        "postingHistories": [],
        "staffTypeId": 1,
        "StaffClassId": 1
    }
};

const SchoolData = {
    "name": "",
    "code": "",
    "coordinates": {
      "elevation": 0,
      "lattitudeNorth": 0,
      "lattidtudeEast": 0,
    },
    "address": "",
    "town": "",
    "ward": "",
    "lgaId": 0,
    "email": "",
    "phone": "2",
    "dateEstablished": "",
    "locationId": 0,
    "schoolRecord": {
      "schoolTypeId": 0,
      "operatesShiftSystem": true,
      "sharesFacilities": true,
      "sharedFacilitiesCount": 0,
      "hasMultigradeTeachers": true,
      "distanceFromTown": 0,
      "distanceFromLGA": 0,
      "schoolMixId": 0,
      "hasBoarding": true,
      "hasPerimeterFence": true,
      "perimeterFenceNeedsRepair": true,
      "hasSecurityPersonnel": true,
      "securityPersonnelTypeId": 0,
      "securityPersonnelCount": 0,
      "hasLandEncroachment": true,
      "hasSBMC": true,
      "hasSIP": true,
      "hasPlaygorund": true,
      "hasDrinkingWater": true,
      "hasSportsFacillity": true,
      "parentForumId": 0,
      "lastInspection": "",
      "inspectionCount": 0,
      "studentTextbooksProvided": 0,
      "teacherTextbooksProvided": 0,
      "inspectionAuthorityId": 0,
      "ownershipId": 0,
      "schoolEducationLevels": [
      ],
      "schoolGrant": [
      ],
      "enrollmentCertificates": [
        {
          "birthCertificateId": 1,
          "count": 0,
        }
      ],
      "schoolFacilities": [
      ],
      "schoolPowerSources": [
      ],
      "schoolHealthFacilities": [
      ],
      "schoolClasses": [
      ],
      "schoolStreams": [
      ]
    },
    "active": true
  }

const utility = {
    "states": [],
    "lgas": [],
    "genders":[],
    "relationships":[],
    "schools":[],
    "studentClasses":[],
    "streams":[],
    "specialNeeds":[],
    "vulnerabilities":[],
    "gradeLevels":[],
    "subjectAreas":[],
    "qualifications":[],
    "ranks":[],
    "staffTypes":[],
    "staffClasses":[],
    "subjects":[],
    "healthFacilities":[],
    "powerSources":[],
    "facilities":[],
    "ownerships":[],
    "grants":[],
    "inspectionAuthorities":[],
    "parentForums":[],
    "secuityPersonnelTypes":[],
    "schoolMixes":[],
    "locations":[],
    "educationLevels":[],
    "schoolTypes":[],
    "error":""
}

const initialState = {
    "students": StudentBiodata,
    "teachers": StaffBiodata,
    "schools": SchoolData,
    "utility": utility,
}


const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
export default store;