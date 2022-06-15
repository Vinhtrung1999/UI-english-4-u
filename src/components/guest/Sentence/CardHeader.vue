<template>
    <div class="card-header bg-primary text-white fs-5">{{ title }}
        <div class="progress">
            <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                :style="{width: progress}"
                aria-valuemax="{{target}}">{{ progress }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'progress', 'target']
}
</script>

<style>

</style>