window.Task = Backbone.Model.extend({

  defaults: {
    completionStatus: false
  },

  complete: function() {
    if(this.attributes.completionStatus === true){
      this.attributes.completionStatus = false;
    }
    else {
      this.attributes.completionStatus = true; 
    };
    this.trigger('completed', this);
  },

})
