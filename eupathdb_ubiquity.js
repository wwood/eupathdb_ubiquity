CmdUtils.CreateCommand({
  name: "plasmodb",
  takes: {"plasmodb_id": noun_arb_text},
  homepage: "http://gist.github.com/20872",
  author: { name: "Ben J. Woodcroft", email: "b.woodcroft@pgrad.unimelb.edu.au"},
  contributors: ["Ben J. Woodcroft"],
  license: "GPL3",
  description: "Go to a PlasmoDB Gene page in a new window",
  preview: "Go to a PlasmoDB Gene page in a new window.",
  
  execute: function(plasmodb_id) {
    var urlString = "http://plasmodb.org/gene/"+plasmodb_id.text;
    displayMessage(urlString);
    Utils.openUrlInBrowser(urlString);
  }
})

CmdUtils.CreateCommand({
  name: "toxodb",
  takes: {"toxodb_id": noun_arb_text},
  homepage: "http://gist.github.com/20872",
  author: { name: "Ben J. Woodcroft", email: "b.woodcroft@pgrad.unimelb.edu.au"},
  contributors: ["Ben J. Woodcroft"],
  license: "GPL3",
  description: "Go to a ToxoDB Gene page in a new window",
  preview: "Go to a ToxoDB Gene page in a new window.",
  
  execute: function(toxodb_id) {
    var urlString = "http://toxodb.org/gene/"+toxodb_id.text;
    displayMessage(urlString);
    Utils.openUrlInBrowser(urlString);
  }
})

CmdUtils.CreateCommand({
  name: "toxodb beta",
  takes: {"toxodb_id": noun_arb_text},
  homepage: "http://gist.github.com/20872",
  author: { name: "Ben J. Woodcroft", email: "b.woodcroft@pgrad.unimelb.edu.au"},
  contributors: ["Ben J. Woodcroft"],
  license: "GPL3",
  description: "Go to a beta ToxoDB Gene page in a new window",
  preview: "Go to a beta ToxoDB Gene page in a new window.",
  
  execute: function(toxodb_id) {
    var urlString = "http://beta.toxodb.org/gene/"+toxodb_id.text;
    displayMessage(urlString);
    Utils.openUrlInBrowser(urlString);
  }
})
