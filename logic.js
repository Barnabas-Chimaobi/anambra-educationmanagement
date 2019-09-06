import React from 'react';
import axios from 'axios';


class Logic {
constructor(auth){
   this.auth = auth
//    this.root = 'http://97.74.6.243/anambra/'
}

GradeLevels = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        console.warn(res)
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

AcademicSessions = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        console.warn(res)
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

BirthCertificates = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

EducationLevels = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Facilities = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

GradeLevels = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Grants = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

InspectionAuthorities = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Lgas = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Locations = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Ownerships = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

ParentForums = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Ranks = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Relationships = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

SchoolMixes = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

SecurityPersonnelTypes = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Sexes = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

SpecialNeeds = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

States = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

StaffType = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}


StaffClass = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}
Subjects = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}

Vulnerabilities = (endpoint) => {
    // axios.defaults.headers.common['Authorization'] = this.auth;
  return  axios.get(endpoint)
    .then( (res) => {
        return res
    })
    .catch( (error) => {
        throw new Error(error)
    })
}



}

export default Logic


