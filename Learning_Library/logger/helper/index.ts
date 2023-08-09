/**
 * Internal
 * @param {Object} message object to format
 * @returns {String} in format " key: value, "
 */
const removeEscapeCharacters = (message:any) => {
    // stringify return undefined type when passed undefined, returning empty string instead
    let value = message;
    if (message instanceof Error) {
      value = message.message + message.stack;
    }
    // stringify return undefined type when passed undefined, returning empty string instead
    const stringified = JSON.stringify(value) || '';
  
    // return stringified.replace(/\\/g, '');
    return stringified;
    // return value;
  };
  
  /**
   *
   * @param {Array} messages containing text to print
   */
  const formatLogMessages = (messages:any) => {
    let returnValue = '';
  
    for (let i = 0; i < messages.length; ++i) {
      const item = messages[i];
      returnValue += removeEscapeCharacters(item);
    }
  
    return returnValue;
  };
  
  const exportObject = {
    formatLogMessages,
  };
  export = exportObject;