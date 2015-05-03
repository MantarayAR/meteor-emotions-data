// TODO Tinytests

// Sanity check the data
Tinytest.add( 'Emotions should exist', function ( test ) {
  test.equal( typeof this._emotions_data, 'object' );
} );

Tinytest.add( 'All emotions should have a slug, readible, parent, and tier property', function ( test ) {
  for ( var i = 0; i < this._emotions_data.length; i++ ) {
    var emotion = this._emotions_data[i];

    test.equal( typeof emotion.slug, 'string' );
    test.equal( typeof emotion.readible, 'string' );

    if ( emotion.parent ) {
      test.equal( typeof emotion.parent, 'string' );  
    } else {
      test.equal( emotion.parent, null );
    }
    
    test.equal( typeof emotion.tier, 'number' );
  }
} );

Tinytest.add( 'All parent emotions should exist', function ( test ) {
  for ( var i = 0; i < this._emotions_data.length; i++ ) {
    var emotion = this._emotions_data[i];
    var found   = false;

    if ( emotion.parent ) {
      test.equal( typeof emotion.parent, 'string' );  
   
      for ( var j = 0; j < this._emotions_data.length; j++ ) {
        var iterate = this._emotions_data[j];

        if ( iterate.slug === emotion.parent ) {
          found = true;
        }
      }

      test.equal( found, true, 'The parent "' + emotion.parent + '" was not found.' );
    }
  }
} );

Tinytest.add( 'All emotions accurately represent their tiers', function ( test ) {
  for ( var i = 0; i < this._emotions_data.length; i++ ) {
    var emotion = this._emotions_data[i];
    var parent  = emotion.parent;
    var tier = 0;
    var upperBound = 10;
    var iterations = 0;

    while ( parent && iterations < upperBound ) {
      iterations++;

      for ( var j = 0; j < this._emotions_data.length; j++ ) {
        var iterate = this._emotions_data[j];

        if ( iterate.slug === parent ) {
          tier++;
          parent = iterate.parent;
        }
      }
    }

    test.equal( tier, emotion.tier, '"' + emotion.parent + '" does not accurately represent its tier.' );
  }
} );

Tinytest.add( 'There should be 130 emotions', function ( test ) {
  test.equal( this._emotions_data.length, 130 );
} );