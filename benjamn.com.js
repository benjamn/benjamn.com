if (Meteor.isClient) {
  Template.editor.message = function () {
    return new Handlebars.SafeString("Back shortly&hellip;&nbsp;");
  };

  Template.editor.events({
    'keydown .editor': function(e) {
      e.stopPropagation();
    }
  });

  Meteor.startup(function() {
    var editor = $(".editor").focus().get(0), sel, rng;
    if (window.getSelection) {
      getSelection().collapse(editor, editor.childNodes.length);
    } else {
      rng = document.body.createTextRange();
      rng.moveToElementText(editor);
      rng.collapse(false);
      rng.select();
    }
  });
}
