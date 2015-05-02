var that = this;

this.__emotions = {};

this.__emotions.findEmotion = function ( options ) {
  var resultSet = [];
  
  for ( var i = 0; i < that.__emotions_data.length; i++ ) {
    var emotion = that.__emotions_data[i];
    var add = true;
    
    for ( var o in options ) {
      if ( options.hasOwnProperty ( o ) &&
           options[o] !== emotion[o] ) {
        add = false;
      }
    }
    
    if ( add ) {
      resultSet.push( _.clone( emotion ) );
    }
  }

  return resultSet;
};

this.__emotions.getParent = function ( emotion ) {
  var result = null;
  
  if ( emotion.parent ) {
    for ( var i = 0; i < that.__emotions_data.length; i++ ) {
      var e = that.__emotions_data[i];
      
      if ( emotion.parent === e.slug ) {
        return e;
      }
    }
  }
  
  return result;
}

/**
 * Will not look for circular loops.  Assumes directed, non-cyclical graph.
 */
this.__emotions.getAncestor = function ( emotion ) {
  var e = emotion;
  
  while ( e.parent !== null ) {
    e = that.__emotions.getParent( e );
  }
  
  return e;
}
