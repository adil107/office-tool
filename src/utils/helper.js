const removeKey = (data, myKey) => {
  const tempData = { ...data };
  for (const key in tempData) {
    if (
      tempData[key] === null ||
      tempData[key] === "" ||
      tempData[key] === undefined ||
      key === myKey
    ) {
      delete tempData[key];
    }
  }
  return tempData;
};
export default removeKey;

export const convertBase64Image = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const convertShortNumber = (num, fixed) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(fixed || 1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(fixed || 1) + "M"; // convert to M for number from > 1 million
  } else if (num < 1000) {
    return Number(num).toFixed(fixed || 1); // if value < 1000, nothing to do
  }
};

export const handleSumFun = (data) => {
  let total = 0;
  const tempData = [...data];

  for (let i = 0; i < tempData.length; i++) {
    total = total + tempData[i];
  }
  return total;
};

export const selectAllCheckboxToggle = (booleanVal, obj) => {
  let tempObj = { ...obj };
  for (let key in tempObj) {
    tempObj[key] = booleanVal;
  }

  return tempObj;
};
export const checkAllCheckboxBoolean = (obj) => {
  let tempObj = JSON.parse(JSON.stringify({ ...obj }));
  let tempBoolean = false;
  for (let key in tempObj) {
    if (tempObj[key] === false) {
      return (tempBoolean = false);
    } else {
      tempBoolean = true;
    }
  }

  return tempBoolean;
};

export const convertArr = (data) => {
  const tempData = JSON.parse(JSON.stringify({ ...data }));
  const output = [];
  for (let key in tempData) {
    output.push(tempData[key]);
  }
  return output;
};
