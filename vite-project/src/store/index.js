import { createStore } from 'vuex';
import axiosClient from '../axios';

const tempSurveys = [
    {
        id: 1,
        title: 'Survey 1',
        slug: 'survey-1',
        status : 'draft',
        image: 'https://aglowiditsolutions.com/wp-content/uploads/2019/12/Laravel-Best-Practices.png',
        description: 'Description 1',
        created_at: '2021-09-01',
        updated_at: '2021-09-01',
        expire_at: '2021-09-01',
        questions: [
            {
                id: 1,
                question: 'From which country are you?',
                type: 'select',
                description: null,
                data: {
                    options: [
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123',
                            text: 'USA',
                        },
                        {
                            uuid:'f8i3j4234234w2342sa234-123123123asdaqwe23123sdf234',
                            text: 'Canada',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123-2342e23',
                            text: 'Mexico',
                        },
                    ]

                }
            },
            {
                id: 2,
                question: 'Which language do you use in your daily life?',
                type: 'checkbox',
                description: 'loremp ipsum',
                data: {
                    options: [
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123',
                            text: 'Javascript',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123sdf234',
                            text: 'PHP',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123-2342e23',
                            text: 'Python',
                        },
                    ]
                }
            },
            {
                id: 3,
                question: 'What is your favorite programming language?',
                type: 'checkbox',
                description: 'loremp ipsum',
                data: {
                    options: [
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123',
                            text: 'laravel 1',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123sdf234',
                            text: 'laravel 2',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123-2342e23',
                            text: 'laravel 3',
                        },
                    ]
                }
            },

            {
                id: 4,
                question: 'What is your favorite programming language?',
                type: 'radio',
                description: 'loremp ipsum',
                data: {
                    options: [
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123',
                            text: 'laravel 5',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123sdf234',
                            text: 'laravel 6',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123-2342e23',
                            text: 'laravel 7',
                        },
                    ]
                }
            },

            {
                id: 5,
                question: 'What is your favorite programming language?',
                type: 'checkbox',
                description: 'loremp ipsum',
                data: {
                    options: [
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123',
                            text: 'laravel 8',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123sdf234',
                            text: 'laravel 9',
                        },
                        {
                            uuid: 'f8i3j4234234w2342sa234-123123123asdaqwe23123-2342e23',
                            text: 'laravel 10',
                        },
                    ]
                }
            },
            {
                id: 6,
                question: 'What is your favorite programming language?',
                type: 'text',
                description: 'loremp ipsum',
                data: {}
            },
            {
                id: 7,
                question: 'What is your favorite programming language?',
                type: 'textarea',
                description: 'loremp ipsum',
                data: {}
            },
        ]
    },
    {
        id: 2,
        title: 'Survey 2',
        slug: 'survey-2',
        status : 'draft 2',
        image: 'https://www.techrepublic.com/wp-content/uploads/2023/02/tr2323-code-language-jobs.jpeg',
        description: 'Description 2',
        created_at: '2021-09-01',
        updated_at: '2021-09-01',
        expire_at: '2021-09-01',
        questions: []
    },
    {
        id: 3,
        title: 'Survey 3',
        slug: 'survey-3',
        status : 'draft 3',
        image: 'https://codersera.com/blog/wp-content/uploads/2019/07/1_BNTVANUr5kNm9faDrAUrKg.jpeg',
        description: 'Description 2',
        created_at: '2021-09-01',
        updated_at: '2021-09-01',
        expire_at: '2021-09-01',
        questions: []
    },
    {
        id: 4,
        title: 'Survey 4',
        slug: 'survey-4',
        status : 'draft 4',
        image: 'https://concatenate.io/wp-content/uploads/2021/07/php-language.jpeg',
        description: 'Description 2',
        created_at: '2021-09-01',
        updated_at: '2021-09-01',
        expire_at: '2021-09-01',
        questions: []
    }

]



const store = createStore({
    state: {
        user: {
            data: {},
            token : sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tempSurveys],
    },
    getters: {},
    actions: {
        register: ({commit}, user) => {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data);
                    return data;
                })
            },
        login: ({commit}, user) => {
                return axiosClient.post('/login', user)
                    .then(({data}) => {
                        commit('setUser', data);
                        return data;
                    })
        },
        logout({commit})  {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
});


export default store;
