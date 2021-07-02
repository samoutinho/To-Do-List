import request from '@/util/request'

const state = {
  taskStatus: [
    {
      text: 'A fazer',
      value: 'todo',
    },
    {
      text: 'Fazendo',
      value: 'doing',
    },
    {
      text: 'Feito',
      value: 'done',
    },
  ],
}

// getters
const getters = {
  getTaskStatus: (state) => state.taskStatus,
  getTaskStatusByValue: (state) => (value) => {
    const find = state.taskStatus.find(item.value === value)
    return find.text
  },
}

// actions
const actions = {
  fetchTask(context, query) {
    return request({
      url: `tasks/all`,
      method: 'get',
      params: query,
    })
  },
  fetchTaskPaginated(context, query) {
    return request({
      url: `tasks`,
      method: 'get',
      params: query,
    })
  },
  createTask(context, data) {
    return request({
      url: `tasks`,
      method: 'post',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  updateTask(context, { id, data }) {
    return request({
      url: `tasks/${id}`,
      method: 'put',
      data: data,
    }).then((resp) => {
      return resp
    })
  },
  updateTaskStatus(context, { id, status }) {
    return request({
      url: `tasks/${id}`,
      method: 'put',
      data: {
        status: status,
      },
    }).then((resp) => {
      return resp
    })
  },
  deleteTask(context, id) {
    return request({
      url: `tasks/${id}`,
      method: 'delete',
    })
  },
  getTaskById(context, id) {
    return request({
      url: `tasks/${id}`,
      method: 'get',
    }).then((resp) => {
      return resp
    })
  },
}

// mutations
const mutations = {}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
