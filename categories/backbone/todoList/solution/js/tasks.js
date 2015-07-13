window.Tasks = Backbone.Collection.extend({

  model: Task,

  countIncomplete: function() {
    var completed = 0;

    for(var i = 0; i < this.length; i++){
      if(this.models[i].attributes.completionStatus === true){
        completed++;
      }
    }

    var counter = this.length - completed;

    return counter;
  }

});
