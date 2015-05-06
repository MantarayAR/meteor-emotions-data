var that = this;

/**
 * Find an emotion based on some criteria.  You can pass in
 * an object with any of the following properties set:
 * - slug String
 * - readible String
 * - tier Number
 * - parent String
 *
 * @param Object options
 * @return Object|null
 */
this.emotions.findEmotion = function ( options ) {
  // TODO validate options

  var resultSet = [];
  
  for ( var i = 0; i < that.emotions.data.length; i++ ) {
    var emotion = that.emotions.data[i];
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

this.emotions.getParent = function ( emotion ) {
  var result = null;
  
  if ( emotion.parent ) {
    for ( var i = 0; i < that.emotions.data.length; i++ ) {
      var e = that.emotions.data[i];
      
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
this.emotions.getAncestor = function ( emotion ) {
  var e = emotion;
  
  while ( e.parent !== null ) {
    e = that.emotions.getParent( e );
  }
  
  return e;
}
