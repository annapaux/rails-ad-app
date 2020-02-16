import Vue from 'vue';
const Api = require('./api');

document.addEventListener("DOMContentLoaded", () => {
  // var local variable (only in the file), create new Vue app
  var app = new Vue({
    // el = selector where body of application of html will be found
    // find an element (in html file) with the id 'app', and only render to that part
    el: '#app',
    // data object
    data: {
      message: "Welcome to the ad space!",
      ads: [],
      ad: {},
      showLogs: false,
      logs: [],
      showAnalytics: false
    },
    computed: {
      sortedAds: function() {
        function compare(a, b) {
          if (a.clicks < b.clicks)
            return 1;
          if (a.clicks > b.clicks)
            return -1;
          return 0;
        }
        console.log(`Sorted ads ${this.ads.sort(this.compare)} `)
        return this.ads.sort(this.compare);
      },

      bestAd: function() {
        let bestAd = this.sortedAds[0]
        console.log(`bestAd ${bestAd.text} ${bestAd.background} ${bestAd.icon}`)
        // this.bestAd = bestAd
        return bestAd
      }
    },
    methods: {

      listAds: function() {
        console.log('listing ads')
        Api.listAds().then(
          function(response) {
            app.ads = response
          }
        )

        Api.listLogs().then(
          function(response) {
            app.logs = response
          }
        )
      },

      clear: function(){
        this.ad = {}
        this.message = ""
        console.log('cleared')
      },

      createAd: function(event) {
        event.stopImmediatePropagation();

        Api.createAd(this.ad).then(function(response){
          console.log('RESPONSE', response)
          app.listAds();
          app.clear();
          app.message = `Ad ${response.id} created.`

          let id = response.id
          let action = 'create'
          let vote = 0
          Api.logActivity(id, action, vote)

        })

      },

      vote: function(event, id, vote) {
        console.log(`Voting on ${id}.`)
        event.stopImmediatePropagation();

        let ad = this.ads.find(item => item.id == id);
        if(ad) {
          ad.clicks += vote
        }

        Api.vote(ad).then(function(response){
          app.listAds();
          app.clear();
          app.message = `Ad ${response.id} has new vote.`
        })

        let action = 'vote'
        Api.logActivity(id, action, vote)
      },

      deleteAd: function(event, id) {
        event.stopImmediatePropagation();
        let adIndex = this.ads.findIndex(item => item.id == id);

        if(adIndex > -1) {
          Api.deleteAd(id)
            .then(function(response){
              app.$delete(app.ads, adIndex)
              app.message = `Ad ${id} deleted.`
            });
        }

        let action = 'delete'
        let vote = 0
        Api.logActivity(id, action, vote)
      }

    },
    beforeMount() {
      console.log('beforeMount, adding data')
      this.listAds()
    },
  })
})
