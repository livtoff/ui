<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/Sidebar';
import { usePage } from '@inertiajs/vue3';
import type { SharedData } from '@/types';

interface Props {
  variant?: 'header' | 'sidebar';
}

defineProps<Props>();

const isOpen = usePage<SharedData>().props.sidebarOpen;
</script>

<template>
  <div v-if="variant === 'header'" class="flex min-h-screen w-full flex-col">
    <slot />
  </div>
  <SidebarProvider v-else :default-open="isOpen">
    <slot />
  </SidebarProvider>
</template>
