import axios from 'axios';

export function listAds () {
  return axios.get('/ads.json').then(function(response){
    return response.data;
  })
}

export function createAd (ad) {
  var localAd = ad;
  // delete localAd.id;
  console.log('local Ad', localAd)
  return axios.post('/ads.json', localAd)
    .then(function (response) {
      console.log('createAd response', response)
      return response.data;
    })
    .catch(function (error){
      console.log(error);
    })
}


export function vote (ad) {
  console.log('local ad for voting', ad)
  var adId = ad.id;
  console.log('local ad ID', adId)
  var localAd = { id: ad.id,
                  text: ad.text,
                  background: ad.background,
                  clicks: ad.clicks}
  return axios.put(`/ads/${adId}.json`, localAd)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error){
      console.log(error);
    })
}

export function logActivity (adId, action, vote) {
  var userId = Number(document.cookie.slice(-1))
  var activityLog = {user_id: userId,
                  ad_id: adId,
                  action: action,
                  click: vote}
  console.log('activity ', activityLog)

  axios.post('/activity_logs.json', activityLog)
    .catch(function (error){
      console.log(error);
    })
}

export function deleteAd (ad_id) {
  return axios.delete(`/ads/${ad_id}.json`)
    .then(function (response) {
      console.log('success')
      return 'success';
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function listLogs () {
  return axios.get('/activity_logs.json').then(function(response){
    return response.data;
  })
}
