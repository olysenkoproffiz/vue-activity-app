<template>
  <article class="post">
    <i class="fas fa-cog activity-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
    <div class="activity-title">
      <!-- TODO: Add v-model -->
      <input v-model="activity.title" type="text" class="input" />
    </div>
    <div class="activity-category">
      <!-- TODO: add v-model and iterate categories in option  -->
      <select v-model="activity.category" class="select">
        <option disabled value>Please select one</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{ category.text }}</option>
      </select>
    </div>
    <div class="control activity-notes">
      <!-- TODO: Add v-model here -->
      <textarea v-model="activity.notes" class="textarea" placeholder="Write some notes here" />
    </div>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a>
            updated {{ activity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- TODO: Add v-model here -->
        <input
          id="progress"
          v-model="activity.progress"
          type="range"
          name="progress"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <label for="progress">{{ activity.progress }} %</label>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="activity-controll">
      <!-- TODO: create function 'updateActivity' to console log 'activity' -->
      <a class="button is-warning" @click="updateActivity">Commit Update</a>
      <!-- TODO: Emit Event to Cancel Edit Mode -->
      <a class="button is-danger" @click="$emit('toggleUpdate', false)">Cancel</a>
    </div>
  </article>
</template>

<script>
import textUtility from "@/mixins/textUtility";

export default {
  mixins: [textUtility],
  props: {
    categories: {
      type: Object,
      required: true
    },
    activity: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMenuDisplayed: false
    };
  },
  methods: {
    updateActivity() {
      console.log(this.activity);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  justify-items: center;
  flex-direction: column;
}
.post .title {
  margin-bottom: 5px;
}
.activity-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.activity-category {
  margin-bottom: 10px;
}
.activity-settings {
  align-self: flex-end;
  margin-bottom: 10px;
  font-size: 22px;
  &:hover {
    cursor: pointer;
  }
}
.activity-controll {
  margin: 20px 0 0 0;
  a {
    margin-right: 5px;
  }
}
.activity-notes {
  margin-bottom: 10px;
}
.media-right {
  display: flex;
  justify-content: center;
}
#progress {
  margin: 0 5px;
}
</style>
