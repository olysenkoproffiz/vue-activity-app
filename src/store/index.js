import fakeApi from '@/lib/fakeApi'

const store = {
  state: {
    activities: {},
    categories: {}
  },

  fetchActivities() {
    return fakeApi.get('activities', { force: 1 });
  },

  fetchCategories() {
    return fakeApi.get('categories', { force: 1 });
  },

  generateUid() {
    return Math.floor(new Date() * Math.random())
  },

  createActivityAPI(activity) {
    // not a best way of doing this
    activity.id = this.generateUid();
    activity.progress = 0;
    activity.createdAt = new Date();
    activity.updatedAt = new Date();

    return fakeApi.post('activities', activity)
  },

  deleteActivityAPI(activity) {
    return fakeApi.deleteItem('activities', activity);
  },

  fetchUser() {
    return {
      name: "Filip Jerga",
      id: "-Aj34jknvncx98812"
    }
  }
}

export default store;
