const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
           //ask if  collection is array
           const valuesCollection = Array.isArray(collection) ?  collection.slice() : Object.values(collection)
           for (let i = 0; i < valuesCollection.length; i++)
           callback(valuesCollection[i])

      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
