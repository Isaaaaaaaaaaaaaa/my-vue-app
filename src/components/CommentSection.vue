<!-- src/components/CommentSection.vue -->
<template>
  <div
    class="comment-section card border-0 shadow-sm animate__animated animate__fadeInUp"
  >
    <div class="card-body">
      <form @submit.prevent="submitComment" class="mb-4">
        <div class="form-floating mb-3">
          <textarea
            v-model="comment"
            class="form-control"
            id="commentTextarea"
            placeholder="留下你的评论"
          ></textarea>
          <label for="commentTextarea">留下你的评论</label>
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
      </form>
      <div v-if="comments.length" class="comments-section">
        <h6>最新评论</h6>
        <ul v-show="commentsVisible" class="list-unstyled">
          <li
            v-for="(comment, index) in comments"
            :key="comment.id"
            class="mb-3 comment-item"
          >
            <div class="comment-header d-flex align-items-center mb-2">
              <div class="comment-username">
                {{ comment.username || "匿名用户" }}
              </div>
              <div class="comment-time ms-3">
                {{ formatDate(comment.timestamp) }}
              </div>
              <button
                class="btn btn-outline-success btn-sm ms-auto"
                @click="likeComment(comment.id, index)"
              >
                <i class="bi bi-hand-thumbs-up-fill"></i> {{ comment.likes }}
                <span class="like-text">点赞</span>
              </button>
            </div>
            <div class="bg-light p-3 rounded shadow-sm comment-content">
              {{ comment.content }}
            </div>
          </li>
        </ul>
        <button @click="toggleComments" class="btn toggle-comments-btn mt-2">
          {{ commentsVisible ? "折叠评论" : "展开评论" }}
          <i
            :class="commentsVisible ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axiosInstance";

export default {
  name: "CommentSection",
  data() {
    return {
      comment: "",
      comments: [],
      username: "",
      isLoggedIn: false,
      commentsVisible: true,
    };
  },
  mounted() {
    this.checkLoginStatus();
    this.fetchComments();
  },
  methods: {
    async checkLoginStatus() {
      try {
        const response = await axios.get("/status");
        this.isLoggedIn = response.data.logged_in;
        this.username = this.isLoggedIn ? response.data.username : "匿名用户";
      } catch (error) {
        this.isLoggedIn = false;
        this.username = "匿名用户";
        console.error("检查登录状态失败:", error);
      }
    },
    async fetchComments() {
      try {
        const response = await axios.get("/comments");
        this.comments = response.data;
      } catch (error) {
        console.error("获取评论失败:", error);
      }
    },
    async submitComment() {
      if (this.comment.trim()) {
        try {
          const response = await axios.post("/comments", {
            username: this.username,
            content: this.comment,
          });
          if (response.data.status === "success") {
            this.fetchComments();
            this.comment = "";
          }
        } catch (error) {
          console.error("提交评论失败:", error);
        }
      }
    },
    async likeComment(commentId, index) {
      try {
        const response = await axios.post(`/comments/like/${commentId}`);
        if (response.data.status === "success") {
          this.comments[index].likes += 1;
        }
      } catch (error) {
        console.error("点赞失败:", error);
      }
    },
    toggleComments() {
      this.commentsVisible = !this.commentsVisible;
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const isoString = date.toISOString(); // ISO 8601 format

      // Extract date and time part (without milliseconds and 'Z')
      return isoString.slice(0, 19).replace("T", " ");
    },
  },
};
</script>

<style scoped>
.comment-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 0.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.comments-section {
  transition: all 0.3s ease;
}

textarea.form-control {
  height: 100px;
  resize: none;
  border: none;
  background: #f0f0f0;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
}

textarea.form-control:focus {
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.comment-item {
  transition: all 0.3s ease;
}

.comment-item:hover {
  transform: translateY(-2px);
}

.comment-item .comment-header {
  font-size: 0.9rem;
  color: #555;
}

.comment-item .comment-username {
  font-weight: bold;
  color: #333;
}

.comment-item .comment-time {
  font-size: 0.85rem;
  color: #888;
}

.comment-item .comment-content {
  padding: 1rem;
  background: linear-gradient(145deg, #ffffff, #e0e0e0);
  box-shadow: 3px 3px 6px #c0c0c0, -3px -3px 6px #ffffff;
  font-size: 1rem;
}

.comment-item button.btn-outline-success {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
}

.comment-item button.btn-outline-success .like-text {
  margin-left: 5px;
  font-size: 0.85rem;
}

.toggle-comments-btn {
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.toggle-comments-btn:hover {
  color: #0056b3;
  background-color: #e0e8ff;
}

.toggle-comments-btn i {
  margin-left: 0.5rem;
}

.bi-hand-thumbs-up-fill {
  margin-right: 5px;
}
</style>
