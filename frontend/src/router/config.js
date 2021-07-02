import { LayoutDefault, RouteWrapper } from '@/components/layouts'

export const publicRoute = [
  {
    path: '*',
    component: () => import('@/views/error/NotFound.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found',
    },
    component: () => import('@/views/error/NotFound.vue'),
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error',
    },
    component: () => import('@/views/error/Error.vue'),
  },
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      icon: '',
    },
    redirect: '/kanboard',
    children: [
      {
        path: '/kanboard',
        meta: {
          title: 'Painel de Trabalho',
          icon: 'mdi-drag-variant',
        },
        name: 'kanboard',
        component: () => import('@/views/task/KanBoard.vue'),
      },
      //task
      {
        path: '/task',
        component: RouteWrapper,
        redirect: '/task/list',
        meta: {
          title: 'Tarefas',
          icon: 'mdi-grid',
        },
        children: [
          {
            path: '/task/list',
            name: 'Listar',
            meta: {
              title: 'Listar',
              icon: 'mdi-newspaper',
            },
            redirect: '/task/list',
            component: RouteWrapper,
            children: [
              {
                path: '/task/list',
                name: 'task.list',
                meta: {
                  title: 'task_list',
                  icon: 'mdi-calendar-account',
                },
                component: () => import('@/views/task/TaskList.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hidden: true,
        },
        component: () => import('@/views/error/Deny.vue'),
      },
    ],
  },
]
