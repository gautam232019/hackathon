import { API } from "../backend";

function postData(path,method,data){
    return fetch(`${API}${path}`, {
        method:method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .catch((err) => console.log(err));
    
}
function getData(path,method,query) {
    let url = `${API}/${path}/${query?query:""}`
    return fetch(url, {
        method:method
      })
        .then((res) => {
          return res.data;
        //   console.log(res.json());
        })
        .catch((err) => console.log(err));
}

export const login = (user) => {
  return postData('user/login','POST',user)
};
export const createJob = (job) => {
    return postData('job','POST',job)
}
export const getJobs = (query) => {
    return postData("job/getJobsForYou","POST",query);
}
export const acceptJob = (query) => {
    return postData("job/accept","POST",query);
}
export const rejectJob = (query) => {
    return postData("job/reject","POST",query);
}
export const completeJob = (query) => {
    return postData("job/completeJob","POST",query);
}
export const confirmServiceProvider = (query) => {
    return postData("confirm","POST",query)
}
export const getRelevantSkills = (query) => {
    return postData("skills","POST",query)
}
export const getJobById = (query) => {
    return getData("job","GET",`?jobId=${query}`)
}
export const getUserById = (query) => {
    return getData("","GET",`?userId=${query}`)
}