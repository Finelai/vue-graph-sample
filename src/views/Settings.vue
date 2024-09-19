<script setup lang="ts">
import { ref } from 'vue';
import type { Router } from 'vue-router';

import { NButton, NForm, NFormItem, NColorPicker, NDynamicTags } from 'naive-ui';
import type { FormInst } from 'naive-ui';

import { store } from '@/store.ts';

const formRef = ref<FormInst | null>(null);
const formValue = ref({
  color: store.graphData.backgroundColor,
  labels: store.graphData.labels,
  metrics: store.graphData.metrics.map(String),
});

function handlePreviewClick(e: MouseEvent, router: Router) {
  e.preventDefault();
  router.push({
    name: 'graph',
    params: {
      bgColor: formValue.value.color,
      labels: JSON.stringify(formValue.value.labels),
      metrics: JSON.stringify(formValue.value.metrics),
    },
  });
}
</script>

<template>
  <section class="container">
    <h1>Graph Settings</h1>
    <n-form ref="formRef" :model="formValue">
      <n-form-item label="Background Color" path="color">
        <n-color-picker v-model:value="formValue.color" :show-alpha="false" />
      </n-form-item>
      <n-form-item label="Labels" path="labels">
        <n-dynamic-tags v-model:value="formValue.labels" :max="12" type="primary" />
      </n-form-item>
      <n-form-item label="Metrics" path="metrics">
        <n-dynamic-tags v-model:value="formValue.metrics" :max="12" type="info" />
      </n-form-item>
      <n-button strong secondary type="success" @click="handlePreviewClick($event, $router)">Preview</n-button>
    </n-form>
  </section>
</template>

<style lang="scss">
.n-form {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 650px;
}
</style>
