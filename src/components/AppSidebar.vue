<script setup lang="ts">
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/Sidebar';

import { Link } from '@inertiajs/vue3';
import AppLogo from './AppLogo.vue';
import { usePage } from '@inertiajs/vue3';
import type { SharedData } from '@/types';

const page = usePage<SharedData>();
</script>

<template>
  <Sidebar collapsible="icon" variant="inset">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <Link :href="page.props?.navigation?.app?.default ?? '/dashboard'">
              <AppLogo />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <NavMain :items="page.props?.navigation?.app?.main?.items ?? []" />
    </SidebarContent>

    <SidebarFooter>
      <NavFooter :items="page.props?.navigation?.app?.footer?.items ?? []" />
      <NavUser />
    </SidebarFooter>
  </Sidebar>
  <slot />
</template>
