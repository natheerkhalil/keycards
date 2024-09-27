<template>
<h1>Test</h1>

<br>

<p>Folders: {{ allFolders }}</p>
</template>

<script>
import { useDataStore } from '@/stores/data';

export default {
    data() {
        return {
            ds: useDataStore(),

            allFolders: []
        }
    },

    created() {
        this.ds.getAllFolders().then(folders => {
            this.allFolders = folders;
        });
    }
}
</script>