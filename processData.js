var path = require('path');
var fs = require('fs');
var genbank = require('genbank');

var dataPath = './data';
var partsPath = path.join(dataPath, 'Parts');
var vectorsPath = path.join(dataPath, 'Vectors');

var outputPublicRoot = './public/data/';
var partsFilePath = path.join(outputPublicRoot, 'parts.js');
var vectorsFilePath = path.join(outputPublicRoot, 'vectors.js');

function run() {
  var partsFiles = getFiles(partsPath);
  var vectorFiles = getFiles(vectorsPath);

  var vectors = processFolder(vectorsPath, vectorFiles);
  var vectorsString = JSON.stringify(vectors, null, 2);
  console.log('saving to', vectorsFilePath, '...');
  fs.writeFileSync(vectorsFilePath, 'var vectors = ' + vectorsString);

  var parts = processFolder(partsPath, partsFiles);
  var partsString = JSON.stringify(parts, null, 2);
  console.log('saving to', partsFilePath, '...');
  fs.writeFileSync(partsFilePath, 'var parts = ' + partsString);
}

/**
 *
 * @param root
 * @param files
 */
function processFolder(root, files) {
  var output = [];

  files.map(function (file) {
    console.log('processing', file, '...');
    var fullPath = path.join(root, file);
    var sample = fs.readFileSync(fullPath, 'utf8');
    if (sample.indexOf('join') > -1) {
      //do not precess it for now until bug is fixed
    } else {
      var gbf = genbank.parseGBF(sample);
      console.log(gbf);
      output.push(gbf);
    }
  });
  return output;
}

/**
 *
 * @param srcpath
 * @returns {*}
 */
function getFiles(srcpath) {
  if (exists(srcpath)) {
    return fs.readdirSync(srcpath).filter(function (file) {
      return fs.statSync(path.join(srcpath, file)).isFile();
    });
  } else {
    console.error(srcpath, 'does not exist');
    return [];
  }
}

/**
 *
 * @param srcpath
 * @returns {boolean}
 */
function exists(srcpath) {
  try {
    fs.lstatSync(srcpath);
    return true;
  }
  catch (e) {
    return false;
  }
}


//KICK IT OFF!
run();