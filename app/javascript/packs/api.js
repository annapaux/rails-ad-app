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

export function log_click (adId, vote) {
  console.log('log click for ad', adId)

  var userId = Number(document.cookie.slice(-1))
  console.log('log click for userid ', userId)

  var clickLog = {user_id: userId,
                  ad_id: adId,
                  click: vote}
  console.log('clickLog ', clickLog)


  var clickLog = {user_id: 1,
                  ad_id: 1,
                  click: 1}
  console.log('new clickLog ', clickLog)

  axios.post('/click_logs.json', clickLog)
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
