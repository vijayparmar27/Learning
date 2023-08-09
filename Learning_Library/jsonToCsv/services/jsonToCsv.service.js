const csvWrite = require('@fast-csv/format');

exports.jsonToCsv = async ({
  csvData,
  headers,
  type,
  filePath,
  writeHeaders,
  delimiter,
  rowDelimiter,
}) => {
  let config = {
    headers,
    writeHeaders,
    rowDelimiter: rowDelimiter ?? '\r\n',
    delimiter: delimiter ?? '|',
  };

  switch (type) {
    case 'file':
      await csvWrite.writeToPath(filePath, csvData, config);
      break;

    case 'buffer':
      let newfileBuffer = await csvWrite.writeToBuffer(csvData, config);
      return newfileBuffer;

    default:
      throw new Error('Invalid type');
  }
};