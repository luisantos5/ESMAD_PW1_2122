<template>
  <div>
    <!-- DIALOG -->
    <dialog :open="isDialogOpen">
      <form @submit.prevent="addTask" method="dialog">
        <label for="txtDescription">DESCRIPTION:</label>
        <input
          type="text"
          id="txtDescription"
          required
          v-model="form.description"
        />
        <br />
        <label for="sltCategory">CATEGORY:</label>
        <select id="sltCategory" required v-model="form.category">
          <option value="" disabled>--SELECT CATEGORY--</option>
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <br />
        <label for="txtPriority">PRIORITY:</label>
        <input
          type="number"
          id="txtPriority"
          min="1"
          max="5"
          v-model.number="form.priority"
        />
        <br />
        <input type="submit" value="ADD TASK" />
      </form>
    </dialog>

    <!--TABELA DAS TAREFAS-->
    <button @click="showDialogAddTask()">ADD TASK</button>
    <button @click="removeAllTasks()">REMOVE ALL TASKS</button>
    <button @click="changeSort()">SORT TASK</button>

    <br />
    <br />
    <input type="text" v-model="filter.description" />
    <select v-model="filter.category">
      <option value="">ALL</option>
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
    <br /><br />
    <table v-if="tasks.length > 0">
      <tr>
        <th>#</th>
        <th>DESCRIÇÃO</th>
        <th>CATEGORIA</th>
        <th>PRIORIDADE</th>
        <th>OPÇÕES</th>
      </tr>
      <tr
        v-for="(task, index) in filteredTasks"
        :key="index"
        :style="{ color: task.done ? 'green' : 'red' }"
      >
        <td>{{ index + 1 }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.category }}</td>
        <td>
          <img
            src="../assets/down.png"
            v-show="task.priority > 1"
            @click="task.priority--"
          />
          {{ task.priority }}
          <img
            src="../assets/up.png"
            v-show="task.priority < 5"
            @click="task.priority++"
          />
        </td>
        <td>
          <button @click="task.done ? (task.done = false) : (task.done = true)">
            EXECUTE
          </button>
        </td>
      </tr>
    </table>
    <p v-else>NO TASKS!</p>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      form: {
        description: "",
        category: "",
        priority: 1,
        done: false,
      },
      filter: {
        description: "",
        category: "",
      },
      isDialogOpen: false,
      sortToggle: "priority",
      tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
      categories: ["pessoal", "profissional"],
    };
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  methods: {
    addTask() {
      if (
        !this.tasks.some((task) => task.description == this.form.description)
      ) {
        const newTask = {
          description: this.form.description,
          category: this.form.category,
          priority: this.form.priority,
          done: false,
        };

        this.tasks.push(newTask);
      } else {
        alert("TASK ALREADY EXIST!");
      }
      this.isDialogOpen = false;
    },

    showDialogAddTask() {
      this.isDialogOpen = true;
    },

    removeAllTasks() {
      if (confirm("Do you want to remove all tasks?")) {
        this.tasks = [];
      }
    },

    changeSort() {
      this.sortToggle = this.sortToggle == "priority" ? "isDone" : "priority";
    },
    compareTasks(taskA, taskB) {
      if (this.sortToggle == "priority") {
        if (taskA.priority > taskB.priority) return 1;
        else if (taskA.priority < taskB.priority) return -1;
        else return 0;
      } else {
        if (taskA.done) return -1;
        else if (taskB.done) return 1;
        else return 0;
      }
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks
        .filter(
          (task) =>
            task.description.includes(this.filter.description) &&
            (task.category == this.filter.category ||
              this.filter.category == "")
        )
        .sort(this.compareTasks);
    },
  },
};
</script>

<style lang="scss" scoped></style>