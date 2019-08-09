<template>
  <div class="reward-category-container">
    <h4 class="title">get miles</h4>
    <div class="reward-side">
      <h5 class="side-title">Rewards</h5>
      <div class="reward" v-for="(reward, index) in rewards" :key="index" :ref="reward" draggable="true">
        <span class="reward-close">x</span>
        <span>{{ reward }}</span>
      </div>
    </div>
    <div class="category-side">
      <h5 class="side-title">Categories</h5>
      <div class="category" v-for="(category, index) in categories" :ref="category" :key="index">
        <h5 class="category-title">{{ category }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RewardCategory',
  data() {
    return {
      rewards: ['R1', 'R2', 'R3', 'R4', 'R5'],
      categories: ['C1', 'C2', 'C3', 'C4', 'C5'],
      selectedReward: null
    }
  },
  mounted() {
    let rewards = document.getElementsByClassName('reward');
    for (let r of rewards) {
      r.addEventListener('dragstart', this.dragStart);
      r.addEventListener('dragend', this.dragEnd);
    };
    let categories = document.getElementsByClassName("category");
    for (let c of categories) {
      c.addEventListener('dragover', this.dragOver);
      c.addEventListener('dragenter', this.dragEnter);
      c.addEventListener('dragleave', this.dragLeave);
      c.addEventListener('drop', this.dragDrop);
    }
  },
  methods: {
    removeReward(e) {
      console.log(e);
      let selectedCategory = e.target.parentNode.parentNode;
      let selectedReward = e.target.parentNode;
      selectedCategory.removeChild(selectedReward);
    },
    dragStart(e) {
      // console.log('drag start');
      this.selectedReward = e.target.cloneNode(true);
      this.selectedReward.children[0].addEventListener('click', this.removeReward);
      // console.log(e);
    },
    dragEnd() {
      // console.log('drag END')
    },
    dragOver(e) {
      e.preventDefault();
      // console.log('drag over')
    },
    dragEnter() {
      // console.log('drag enter')
    },
    dragLeave() {
      // console.log('drag leave')
    },
    dragDrop(e) {
      console.log(e)
      let dup = false;
      for (let c of e.target.children) {
        console.log(c.innerText + " || " + this.selectedReward.innerText)
        if (c.innerHTML === this.selectedReward.innerHTML) dup = true;
      }
      if (!dup) {
        e.target.append(this.selectedReward)
      };
    }
  }
}
</script>
<style scoped>
.reward-category-container {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
.title {
  font-size: 36px;
  color: rgb(149, 211, 193);
  text-transform: uppercase;
  letter-spacing: 15px;
}
.side-title {
  font-size: 24px;
  color: rgb(149, 211, 193);
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
}
.reward-side {
  width: 20%;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
  border-left: 2px solid rgb(149, 211, 193);
  border-right: 2px solid rgb(149, 211, 193);
  
}
.category-side {
  width: 80%;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
  text-align: left;
  padding-left: 15px;
  
}
.reward {
  cursor: pointer;
  box-sizing: border-box;
  color: rgb(149, 211, 193);;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(149, 211, 193);
  padding-top: 14px;
  margin: 25px auto;
}
.reward-close {
  position: absolute;
  margin-top: -18px;
  margin-left: 22px;
}
.category {
  text-align: center;
  vertical-align: top;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  border-right: 1px solid rgb(149, 211, 193);
  height: 400px;
}
.category-title {
  color: rgb(149, 211, 193);
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: center;
}
</style>

