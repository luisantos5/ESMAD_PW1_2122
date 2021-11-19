

<template>
  <div>
    <p>Wrapper for a text input</p>
    <input
      type="text"
      placeholder="Custom input!"
      @input="$emit('custom-change', $event.target.value)"
    />
    <!-- INLINE EMIT -->
  </div>
</template>
 

<script>
export default {
  name: "MyInput",
};
</script>

<style lang="scss" scoped>
</style>