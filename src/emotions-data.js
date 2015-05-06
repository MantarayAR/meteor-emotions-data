if ( Meteor.isServer ) {
  var that = this;
  that.emotions = {};
  that.emotions.data = [];

  that.emotions.load = function () {
    that.emotions.data = JSON.parse( Assets.getText( '../data/emotions-data.json' ) );
  }

  that.emotions.unload = function () {
    that.emotions.data = [];
  }
}