<template>
    <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold">
            {{ index + 1 }}. {{ model.question }}
        </h3>
        <div class="flex items-center">
            <button
            type="button"
            @click="addQuestion()"
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
                hover:text-gray-700"
            >
                <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fill-rule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                />
                <path
                    fill-rule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm9-7a1 1 0 00-2 0v1H7a1 1 0 100 2h2v2a1 1 0 102 0V6h2a1 1 0 100-2h-2V3z"
                    clip-rule="evenodd"
                />
                </svg>
                Add Question
            </button>
            <button
            type="button"
            @click="deleteQuestion()"
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
                hover:text-gray-700"
            >
                <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fill-rule="evenodd"
                    d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
                </svg>
                Delete
            </button>
        </div>
    </div>
    <div class="grid gap-3 grid-cols-12">
        <div class="mt-3 col-span-9">
            <label
            :for="'question_text_' + model.data"
            class="block text-sm font-medium text-gray-700"
            >Question</label>
            <input
            type="text"
            :name="'question_text_' + model.data"
            v-model="model.question"
            @change="dataChange"
            :id="'question_text_' + model.data"
            class="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    </div>
</template>

<script setup>

import { defineProps, defineEmits, ref } from 'vue';


const props = defineProps({
    Question: Object,
    index: Number

});

const emit = defineEmits(['deleteQuestion', 'change', 'addQuestion']);
const model = ref(JSON.parse(JSON.stringify(props.question)));

</script>

