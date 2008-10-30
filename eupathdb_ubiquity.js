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
    Utils.openUrlInBrowser(urlString);
  }
})
/* Currently the BLAST modules do NOT work, because I haven't worked out
 * how to use POST commands yet */
CmdUtils.CreateCommand({
  name: "plasmodb blast protein",
  takes: {"plasmodb_id": noun_arb_text},
  homepage: "http://gist.github.com/20872",
  author: { name: "Ben J. Woodcroft", email: "b.woodcroft@pgrad.unimelb.edu.au"},
  contributors: ["Ben J. Woodcroft"],
  license: "GPL3",
  description: "Blast against Plasmodium falciparum protein sequences using BLASTP",
  preview: "Blast against Plasmodium falciparum protein sequences using BLASTP",
  
  execute: function(sequence) {
    var urlString = "http://plasmodb.org/plasmo/showSummary.do?questionFullName=GeneQuestions.GenesBySimilarity&myProp(BlastDatabaseType)=Proteins&myProp(BlastAlgorithm)=blastp&myProp(BlastDatabaseOrganism)=Plasmodium+falciparum&myProp(BlastQuerySequence)="+sequence.text+"&myProp(-e)=0.05&myProp(-v)=50&myProp(-b)=50&myProp(-filter)=yes&altPageSize=1000000";
    Utils.openUrlInBrowser(urlString);
  }
})
  
CmdUtils.CreateCommand({
  name: "plasmodb blast transcript",
  takes: {"plasmodb_id": noun_arb_text},
  homepage: "http://gist.github.com/20872",
  author: { name: "Ben J. Woodcroft", email: "b.woodcroft@pgrad.unimelb.edu.au"},
  contributors: ["Ben J. Woodcroft"],
  license: "GPL3",
  description: "Blast against Plasmodium falciparum transcript sequences using BLASTN",
  preview: "Blast against Plasmodium falciparum transcript sequences using BLASTN",
  
  execute: function(sequence) {
    var urlString = "http://plasmodb.org/plasmo/showSummary.do?questionFullName=GeneQuestions.GenesBySimilarity&myProp(BlastDatabaseType)=Transcripts&myProp(BlastAlgorithm)=blastn&myProp(BlastDatabaseOrganism)=Plasmodium+falciparum&myProp(BlastQuerySequence)="+sequence.text+"&myProp(-e)=0.05&myProp(-v)=50&myProp(-b)=50&myProp(-filter)=yes&altPageSize=1000000";
    Utils.openUrlInBrowser(urlString);
  }
})

