<template>
  <div class="activityCreateForm">
    <a
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click.prevent="toggleFormDisplay"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book" />
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="input activity-textarea"
              type="text"
              placeholder="Write some notes here"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option value disabled>Please Select One</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              :disabled="!isFormValid"
              @click.prevent="createActivity"
            >Create Activity</button>
            <button class="button is-link btn-secondary" @click="toggleFormDisplay">Close Form</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createActivityAPI } from "../api/index";

export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return (
        this.newActivity.title &&
        this.newActivity.notes &&
        this.newActivity.category
      );
    }
  },
  methods: {
    createActivity(e) {
      createActivityAPI({ ...this.newActivity })
        .then(activity => {
          this.resetActivity();
          this.isFormDisplayed = false;
          this.$emit("activityCreated", { ...activity });
        })
        .catch(err => console.log("Error occures:", err));
    },
    resetActivity() {
      this.newActivity.title = "";
      this.newActivity.notes = "";
      this.newActivity.category = "";
    },
    toggleFormDisplay(e) {
      this.isFormDisplayed = !this.isFormDisplayed;
    }
  }
};
</script>

<style scoped>
</style>
