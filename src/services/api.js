export function getRecentRecipes(app) {
  const recipes = app.service('recipes');
  return recipes.find(
    {
      query: {'$sort': {'createdAt': -1}}
    }
  ).then((data, err) => data.data);
}

export function signup(app, username, password) {
  const users = app.service('users');
  return users.create({username, password}).then((data, err) => data);
}

export function login(app, username, password) {
  return app.authenticate({
    type: 'local',
    'email': username,
    'password': password
  }).then((resp) => resp).catch(() => {});
}

export function createRecipe(app, name, description, items, imageURL) {
  let ingredients = {};
  items.forEach((i) => ingredients[i] = 1);
  return app.authenticate().then(() => {
    const recipes = app.service('recipes');
    return recipes.create({name, description, ingredients, imageURL}).then((data, err) => data);
  });
}

export function logout(app) {
  return app.logout();
}

export function fetchRecipe(app, id) {
  const recipes = app.service('recipes');
  return recipes.find(
    {
      query: {
        '$limit': 1,
        '_id': id
      }
    }
  ).then((data, err) => data.data);
}

export function fetchMyRecipes(app, id) {
  const recipes = app.service('recipes');
  return recipes.find(
    {
      query: {
        'ownerId': id
      }
    }
  ).then((data, err) => data.data);
}
