if ( Meteor.isServer ) {
  var that = this;
  that.emotions = {};
  that.emotions.data = [];

  that.emotions.loadData = function () {
    that.emotions.data = JSON.parse( Assets.getText( '../data/emotions-data.json' ) );
  }

  that.emotions.unloadData = function () {
    that.emotions.data = [];
  }
}