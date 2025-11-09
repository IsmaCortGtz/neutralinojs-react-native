const root = process.cwd();

module.exports = async function customImport(package) {
  const path = require.resolve(package, { paths: [root] });
  return await import(path);
}