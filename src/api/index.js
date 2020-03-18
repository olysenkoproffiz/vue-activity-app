import fakeApi from '@/lib/fakeApi'

export const fetchActivities = () => {
  return fakeApi.get('activities', { force: 1 })
    .then(activities => {
      this.state.activities = activities;
      return activities;
    })
}

export const fetchCategories = () => {
  return fakeApi.get('categories', { force: 1 })
    .then(categories => {
      this.state.categories = categories;
      return categories;
    });
}

const generateUid = () => Math.floor(new Date() * Math.random())

export const createActivityAPI = (activity) => {
  // not a best way of doing this
  activity.id = generateUid();
  activity.progress = 0;
  activity.createdAt = new Date();
  activity.updatedAt = new Date();

  return fakeApi.post('activities', activity)
}

export const deleteActivityAPI = (activity) => {
  return fakeApi.deleteItem('activities', activity);
}

export const fetchUser = () => {
  return {
    name: "Filip Jerga",
    id: "-Aj34jknvncx98812"
  }
}
