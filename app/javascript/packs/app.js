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
      notification: "Welcome to the ad space!",
      ads: [],
      ad: {}
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
        console.log(`Sorted ads ${this.ads.sort(compare)} `)
        return this.ads.sort(compare);
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
      },

      clear: function(){
        this.ad = {}
        this.notification = ""
        console.log('cleared')
      },

      createAd: function(event) {
        event.stopImmediatePropagation();

        Api.createAd(this.ad).then(function(response){
          console.log('RESPONSE', response)
          app.listAds();
          app.clear();
          app.notification = `Ad ${response.id} created.`
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
          app.notification = `Ad ${response.id} has new vote.`
        })

        Api.log_click(id, vote)
      },

      deleteAd: function(event, id) {
        event.stopImmediatePropagation();
        let adIndex = this.ads.findIndex(item => item.id == id);

        if(adIndex > -1) {
          Api.deleteAd(id)
            .then(function(response){
              app.$delete(app.ads, adIndex)
              app.notification = `Ad ${id} deleted.`
            });
        }
      }
    },
    beforeMount() {
      console.log('beforeMount, adding data')
      this.listAds()
    },
  })
})
