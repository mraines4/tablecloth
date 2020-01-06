//@ts-nocheck
export const convertDataToTableArray = (data: object[], columns: string[]) => {
  return data.map(object => {
    return columns.map(column => {
      return object[column.toLowerCase()];
    });
  });
};
