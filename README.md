Meteor Emotions Data
====================

Meteor package of emotion data.

# Usage

```js
// Load the emotions from a json file
emotions.load();

var emotion = emotions.findEmotion( {
    name : 'Bad'
} );

// Free up the memory for the garbage collector
emotions.unload();
```


