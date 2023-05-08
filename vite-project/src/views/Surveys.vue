<template>
    <pageComponentVue>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                    Surveys
                </h1>
                <router-link
                :to="{ name: 'SurveyCreate' }"
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-500
                hover:bg-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Create Survey
                </router-link>
            </div>
        </template>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div v-for="survey in surveys" :key="survey.id"
                class="
                flex flex-col
                py-4
                px-6
                shadow-md
                bg-white
                hover-bg-gray-100
                h-[470px]"
            >
                <img :src="survey.image" alt="" class="w-full h-48 object-cover" />
                <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
                <div v-html="survey.description" class="mt-2 text-sm text-gray-500"></div>

            <div class="flex justify-between items-center mt-3">
                <router-link
                :to="{ name: 'SurveyView', params: { id: survey.id } }"
                class="flex
                items-center
                px-4
                py-2
                border border-transparent
                text-base
                font-medium
                rounded rounded-md
                shadow-sm
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
                text-white bg-emerald-500
                hover:bg-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>

                Edit Survey
                </router-link>
                <button
                    v-if="survey.id"
                    @click="deleteSurvey(survey)"
                    type="button"
                    class="
                    h-8
                    w-8
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border border-transparent
                    text-gray-500
                    focus ring-2 ring-offset-2 ring-indigo-500
                    ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                    </button>
                </div>
            </div>
        </div>
    </pageComponentVue>
</template>

<script setup>
import pageComponentVue from '../components/pageComponent.vue';
import store from '../store/index.js'
import {computed } from 'vue'


const surveys = computed(() => store.state.surveys)

    function deleteSurvey(survey) {
        if (confirm('Are you sure you want to delete this survey?')) {
            //delete the survey
        }
    }



</script>


