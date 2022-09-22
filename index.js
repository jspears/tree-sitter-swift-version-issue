const Parser = require("tree-sitter");
const Swift = require("tree-sitter-swift");

const parser = new Parser();
parser.setLanguage(Swift);
