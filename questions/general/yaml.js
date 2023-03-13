const checkYaml = () => {
  let currentVersion = {
    app_name: 'my_app',
    version: '1.0.0',
    database: {
      host: 'localhost',
      name: 'my_db',
      username: 'bharath',
      password: 'my_password',
    },
  };
  let newVersion = {
    app_name: 'my_app',
    version: '1.1.0',
    database: {
      host: 'localhostBharath',
      port: 4000,
      name: 'my_db',
      username: 'my_user',
      password: 'my_password',
      pool_size: 10,
    },
  };

  // take everything from the current version to newversion but dont access new stuff using yaml conversion

  for (let [key, value] of Object.entries(newVersion)) {
    if (key in currentVersion) {
      if (typeof currentVersion[key] === 'object') {
        let newVersionSub = newVersion[key];
        let currentVersionSub = currentVersion[key];
        for (let [key, value] of Object.entries(newVersionSub)) {
          if (key in currentVersionSub) {
            currentVersionSub[key] = newVersionSub[key];
          }
        }
        currentVersion[key] = currentVersionSub;
      } else {
        currentVersion[key] = value;
      }
    }
  }
  console.log(currentVersion);
};

const jsonObject = {
  label: 'Send Survey',
  status: 'success',
  root: true,
  icon: 'list',
  id: 1,
  children: [
    {
      label: 'Delay',
      type: 'delay',
      status: 'success',
      icon: 'clock',
      active: false,
      id: 2,
      children: [
        {
          label: 'Email',
          type: 'email',
          status: 'success',
          icon: 'email',
          active: false,
          id: 3,
          children: [
            {
              label: 'Condition',
              type: 'condition',
              status: 'success',
              icon: 'condition',
              active: false,
              id: 4,
              children: [
                {
                  label: 'true',
                  icon: 'check',
                  type: 'condition-option',
                  id: 5,
                  children: [
                    {
                      label: 'Contact Exit',
                      icon: 'contact-exit',
                      leaf: true,
                    },
                  ],
                },
                {
                  label: 'false',
                  icon: 'close',
                  type: 'condition-option',
                  children: [
                    {
                      label: 'Contact Exit',
                      icon: 'contact-exit',
                      leaf: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
const removeChildrenNodes = (jsonObject, deleteIndex) => {
  let data = jsonObject;
  let prevChildren = data.children;
  // only for first child
  if (prevChildren[0].id === deleteIndex) {
    let nextChild = prevChildren[0].children;
    data.children = nextChild;
    return data;
  } else {
    // remaining children
    while (data.children) {
      let nextChildren = data.children[0].children;
      if (nextChildren[0].id === deleteIndex) {
        data.children[0].children = nextChildren[0].children;
        return data;
      }
      data.children = data.children[0].children;
    }
  }
};
// console.log(removeChildrenNodes(jsonObject, 3));
