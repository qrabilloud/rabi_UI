import axios, { AxiosHeaders } from 'axios'

const lists = ['Work Tasks', 'Personal Tasks', 'Shopping List']
const listItems: Record<string, string[]> = {
    'Work Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Personal Tasks': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter'],
    'Shopping List': ['Buy groceries', 'Complete React project', 'Exercise for 30 minutes', 'Read a book chapter']
}

export const apiClient = {
    getLists: async () => {
        return axios.get('http://localhost:3000/lists').then(res => res.data.data.map((list: any) => list.id))
    }, 
    addList: async (listName: string) => {
        /*lists.push(listName)
        return Promise.resolve(lists)*/
        return axios.post('http://localhost:3000/lists', {"id" : listName, "items" : []}).then(res => res.data.data.map((list : any) => list.id))
    },
    getTodos: async (listName: string): Promise<string[]> => {
        return axios.get('http://localhost:3000/lists/' + listName + '/items').then(res => res.data.data.map((list: any) => list.id))
    },
    addTodo: async (listName: string, todo: string) => {
        /*if (!listItems[listName]) {
            listItems[listName] = []
        }
        listItems[listName].push(todo)
        return Promise.resolve(listItems[listName])*/
        return axios.post('http://localhost:3000/lists/' + listName + '/items', {"id" : todo}).then(res => res.data.data.items.map((item : any) => item.id))
    }
}
