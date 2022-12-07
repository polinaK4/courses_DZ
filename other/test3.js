const fse = require ('fs-extra');

fse.ensureDirSync('./newfolder');
fse.ensureFileSync('./newfolder/for-add.txt');
fse.ensureDirSync('./folder2');
fse.moveSync('./newfolder/for-add.txt', './folder2/for-add.txt');
g
fse.ensureDirSync('./folder3');
fse.copySync('./folder2/for-add.txt', './folder3/for-add.txt');

fse.removeSync('./folder2/for-add.txt');
fse.removeSync('./folder3/for-add.txt');
fse.removeSync('./folder2');
fse.removeSync('./folder3');
fse.removeSync('./newfolder');