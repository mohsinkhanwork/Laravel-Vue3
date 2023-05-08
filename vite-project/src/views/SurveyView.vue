<template>
    <pageComponentVue>
        <template v-slot:header>
            <div class="flex items-center justify-between">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                    {{ model.id ? model.title : 'Create a Survey' }}
                </h1>
            </div>
        </template>
        <form @submit.prevent="saveSurvey">
            <div class="shadow sm:rounded-mdsm-overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">
                            image
                        </label>
                        <div class="mt-1 flex items-center">
                            <img
                            v-if="model.image"
                            :src="model.image"
                            :alt="model.title"
                            class="object-cover"
                            />
                            <span
                            v-else
                            class="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </span>

                    </div>
                    <div class="mt-2">
                        <button
                            type="button"
                            class="
                            mt-2
                            w-full
                            inline-flex
                            items-center
                            justify-left
                            px-4
                            py-2
                            border border-transparent
                            shadow-sm
                            text-sm
                            font-medium
                            rounded-md
                            "
                            >
                            <input
                                type="file"

                            />
                            Change
                            </button>
                    </div>
                </div>
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <div class="mt-1">
                        <input
                        type="text"
                        name="title"
                        id="title"
                        v-model="model.title"
                        autocomplete="title"
                        class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                </div>
                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div class="mt-1">
                        <textarea
                        id="description"
                        name="description"
                        rows="3"
                        v-model="model.description"
                        class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        ></textarea>
                    </div>
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input
                        id="status"
                        name="status"
                        type="checkbox"
                        v-model="model.status"
                        autocomplete="status"
                        class="
                            focus:ring-emerald-500
                            h-4
                            w-4
                            text-emerald-600
                            border-gray-300
                            rounded"
                        >
                    </div>
                    <div class="ml-3 text-sm">
                            <label for="active" class="block text-sm font-medium text-gray-700">
                                Active
                            </label>
                        </div>
                </div>
                <div>
                    <label for="expire_at" class="block text-sm font-medium text-gray-700">
                        Expire At
                    </label>
                    <div class="mt-1">
                        <input
                        type="date"
                        name="expire_at"
                        id="expire_at"
                        v-model="model.expire_at"
                        autocomplete="expire_at"
                        class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="questions" class="block text-sm font-medium text-gray-700">
                        Questions
                        <button
                        type="button"
                        class="
                            ml-5
                            inline-flex
                            items-center
                            px-4
                            py-2
                            border
                            border-transparent
                            text-sm
                            font-medium
                            rounded-md
                            shadow-sm
                            text-white
                            bg-emerald-600
                            hover:bg-emerald-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-emerald-500
                        "
                        @click="addQuestion()"
                        >
                        Add Question
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-plus-circle"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        </button>
                    </label>
                    <div v-if="!model.questions.length" class="text-center text-gray-500">
                        No questions added yet
                    </div>
                    <div v-for="(question, index) in model.questions" :key="question.id">
                        <QuestionEditor :question="question" :index="index"
                        @delete="deleteQuestion"
                        @change="questionChange"
                        @addQuestion = "addQuestion"
                        />
                    </div>
                </div>
                <div class="flex justify-end">
                    <button
                    type="submit"
                    class="
                        ml-5
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border
                        border-transparent
                        text-sm
                        font-medium
                        rounded-md
                        shadow-sm
                        text-white
                        bg-emerald-600
                        hover:bg-emerald-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-emerald-500
                    "
                    >
                    Save
                    </button>
                    </div>

            </div>
         </div>
        </form>
    </pageComponentVue>
</template>


<script setup>
import pageComponentVue from '../components/pageComponent.vue';
import QuestionEditor from '../components/editor/QuestionEditor.vue';
import store from '../store/index.js'
import { ref  } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()


let model = ref({
    title: '',
    status: '',
    image: '',
    expire_at: '',
    description: '',
    questions: []
})

if (route.params.id) {
    model.value = store.state.surveys.find(
    (s) => s.id === parseInt(route.params.id)

    )
}

</script>

<style>
</style>
