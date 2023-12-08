export const getUsers = async (): Promise<Array<{}>> => {
  return [
    {
      "name": "Erik",
      "group": 2
    },
    {
      "name": "Lisa",
      "group": 2
    },
    {
      "name": "Hampus",
      "group": 2
    },
    {
      "name": "Linda",
      "group": 3
    },
    {
      "name": "Eva",
      "group": 1
    },
    {
      "name": "Anna",
      "group": 3
    },
  ];
}

export const getGroups = async (): Promise<{}[]> => {
  return [
    {
      "id": 1,
      "groupName": "Hajarna"
    },
    {
      "id": 2,
      "groupName": "Valarna"
    },
    {
      "id": 3,
      "groupName": "Zebrorna"
    },
  ];
};
