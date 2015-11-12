Template.ListContact.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  contactList: function () {
    return Contact.find();
  }
});

Template.ListContact.events({
  'click .delete': function() {
      Meteor.call("deleteContact", this._id);
  }
});